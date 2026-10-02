import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { addDoc, collection, doc, getDocs, limit, query, Timestamp, where } from 'firebase/firestore';
import { firebaseDatabase } from '../Firebase/firebaseConfig';
import { AuthContext } from './MyState';

function UsersContext(props) {

    const [user, setUser] = useState({
        email: "",
        name: "",
        password: "",
        status: false,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        })
    });

    const [userDetails, setUserDetails] = useState(null)

    const registerUser = async () => {

        if (user.email == "" || user.password == "" || user.name == "") {
            toast.error("Please Add Details..")
            return false
        }

        const userRef = collection(firebaseDatabase, "users")

        try {
            await addDoc(userRef, user)
            toast.success("User registered Successfully")
            setTimeout(() => {
                window.location.href = "/login"
            }, 800)
            setUser("")
        } catch (error) {
            toast.error("Error : ", error)
        }
    }

    // const getUserDetails = async (user) => {

    //     let uEmail = user.email
    //     // setUser("")
    //     const q = query(
    //         collection(firebaseDatabase, "users"),
    //         where("email", "==", uEmail.trim().toLowerCase()),
    //         limit(1)
    //     )
    //     const snapshot = await getDocs(q)

    //     if (snapshot.empty) {
    //         console.log("user --")
    //         return false
    //     } else {
    //         const doc = snapshot.docs[0]
    //         const data = doc.data()
    //         console.log("user --", data)
    //         setUser("")
    //     }
    // }

    const getUserDetails = async (email) => {
        if (!email) return null

        try {
            const q = query(
                collection(firebaseDatabase, "users"),
                where("email", "==", email.trim().toLowerCase()),
                limit(1)
            )
            const snapshot = await getDocs(q)

            if (snapshot.empty) {
                setUserDetails(null)
                return null
            }

            const docSnap = snapshot.docs[0]
            const { password, ...safeUser } = docSnap.data()
            const details = { id: docSnap.id, ...safeUser }

            console.log("user --", details)   // data is available here
            setUserDetails(details)           // and stored in state
            return details

        } catch (error) {
            console.log(error)
            return null
        }
    }

    const login = async (user) => {
        if (!user.email || !user.password) {
            toast.error("Please enter Email and Password")
            return false
        }

        let uemail = user.email
        let upassword = user.password


        try {
            const q = query(
                collection(firebaseDatabase, "users"),
                where("email", "==", uemail.trim().toLowerCase()),
                limit(1)
            )
            const snapshot = await getDocs(q)

            // 1. email check
            if (snapshot.empty) {
                toast.error("Email not registered")
                return false
            }

            const docSnap = snapshot.docs[0]
            const dbUser = docSnap.data()

            // 2. password check
            if (dbUser.password !== upassword) {
                toast.error("Incorrect password")
                return false
            }

            // 3. status check
            if (dbUser.status == true) {
                toast.error("Your account is not active yet")
                return false
            }

            localStorage.setItem("userName", dbUser.name)
            localStorage.setItem("userEmail", dbUser.email)

            toast.success("Login Successful..")
            setTimeout(() => {
                window.location.href = "/"
            }, 800)
            return true

        } catch (error) {
            console.log(error)
            toast.error("Error: " + error.message)
            return false
        }
    }

    return (
        <AuthContext.Provider
            value={{ user, setUser, registerUser, login, getUserDetails, userDetails }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default UsersContext