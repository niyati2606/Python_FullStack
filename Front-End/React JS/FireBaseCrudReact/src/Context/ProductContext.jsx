import React, { useEffect, useState } from 'react';
import {
    Timestamp,
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    setDoc
} from 'firebase/firestore';
import { firebaseDatabase } from '../Firebase/firebaseConfig';
import { toast } from 'react-toastify';
import { MyContext } from './MyState';

function ProductContext(props) {

    const [products, setProducts] = useState({
        product_name: "",
        product_price: "",
        product_img: "",
        product_category: "",
        prodcut_description: "",
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        })
    });

    //get all product
    const [allProducts, setAllProducts] = useState([]);

    const getProducts = async () => {

        try {
            const q = query(
                collection(firebaseDatabase, 'products'),
                orderBy('time')
            );

            const unsubscribe = onSnapshot(q, (querySnapshot) => {

                let productArray = [];

                querySnapshot.forEach((doc) => {
                    productArray.push({
                        ...doc.data(),
                        id: doc.id
                    });
                });

                setAllProducts(productArray);
            });

            return () => unsubscribe();

        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, []);


    //add product
    const addProduct = async () => {

        if (products.product_name == "" || products.product_category == "" || products.prodcut_description == "" || products.product_img == "" || products.product_price == "") {
            toast.error("Please Fill All Details..!!")
            return false
            // return alert("all Fields are required")
        }

        const productRef = collection(firebaseDatabase, "products")

        try {
            await addDoc(productRef, products)
            getProducts()
            toast.success("Product Added Successfully..!!")
            setTimeout(() => {
                window.location.href = "/"
            }, 800)
        } catch (error) {
            toast.error("Internel Error :", error)
        }
    }

    //edit product

    const editProducthandle = (item) => {
      //  console.log("Edit ==",item)
        setProducts(item)
    }

    const editProduct = async (data) => {

        try {
            await setDoc(doc(firebaseDatabase, 'products', products.id), products)
            getProducts()
            toast.success("Product Updated Successfully..!!")
            setTimeout(() => {
                window.location.href = "/"
            }, 800)
            setProducts("")
        } catch (error) {
            toast.error(error)
        }
    }

    //delete product
    const deleteProduct = async(item) => {
        console.log(item.id)
        try {
            await deleteDoc(doc(firebaseDatabase,"products",item.id),products)
            getProducts()
            toast.success("Product deleted successfully..")
        } catch (error) {
            toast.error(error)
        }
    }

    return (
        <MyContext.Provider
            value={{ products, setProducts, allProducts, setAllProducts, getProducts, addProduct, editProducthandle, editProduct, deleteProduct }}
        >
            {props.children}
        </MyContext.Provider>
    );
}

export default ProductContext;