from tkinter import *
import mysql.connector
import tkinter.messagebox as msg
import re

def create_connection() :
    return mysql.connector.connect(

            host = "localhost",
            user = "root",
            password = "",
            database = "student_python"
            
        )
print("Checking SQL Connection :", create_connection())

def create_table():
    connection = create_connection()
    cursor = connection.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS student_info_1 (
            ID        INT          PRIMARY KEY AUTO_INCREMENT,
            firstName VARCHAR(50)  NOT NULL,
            lastName  VARCHAR(50)  NOT NULL,
            email     VARCHAR(100) NOT NULL,
            mobile    VARCHAR(10)  NOT NULL
        )
    """)
    connection.commit()
    connection.close()
    print("Table created successfully.")


def insert_data() :

    emailPattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
    mobilePattern = r'^\d{10}$'

    if e_firstName.get() == "" and e_lastName.get() == "" and e_email.get() == "" and e_phone.get() == "":
        msg.showinfo("Insert Status", "Please Enter All Details")
    elif e_firstName.get() == "" :
        msg.showinfo("Insert Status", "Please Enter First Name")
    elif e_lastName.get() == "" :
        msg.showinfo("Insert Status", "Please Enter Last Name")
    elif e_email.get() == "" :
        msg.showinfo("Insert Status", "Please Enter EmailID")
    elif not re.match(emailPattern, e_email.get()) :
        msg.showinfo("Insert Status", "Please Enter Valid EmailID")
    elif e_phone.get() == "" :
        msg.showinfo("Insert Status", "Please Enter Phone Number")
    elif not re.match(mobilePattern, e_phone.get()) :
        msg.showinfo("Insert Status", "Please Enter Valid Phone Number")        
    else :
        connection = create_connection()
        cursor = connection.cursor()
        insertQuery = "insert into student_info_1(firstName, lastName, email, mobile) values(%s, %s, %s, %s)"
        instertedDetails = (e_firstName.get(), e_lastName.get(), e_email.get(), e_phone.get())
        cursor.execute(insertQuery, instertedDetails)
        connection.commit()
        connection.close()
        e_id.delete(0,'end')
        e_firstName.delete(0,'end')
        e_lastName.delete(0,'end')
        e_email.delete(0,'end')
        e_phone.delete(0,'end')
        msg.showinfo("Insert Status", "Data Inserted Successfully..!!") 
    
def search_data():
    e_firstName.delete(0, 'end')
    e_lastName.delete(0, 'end')
    e_email.delete(0, 'end')
    e_phone.delete(0, 'end')

    if e_id.get() == "":
        msg.showinfo("Fetch Status", "Please enter ID to Fetch Data")
    else:
        connection = create_connection()
        cursor = connection.cursor()
        searchQuery = "SELECT * FROM student_info_1 WHERE ID = %s"
        searchDetails = (e_id.get(),)
        cursor.execute(searchQuery, searchDetails)
        row = cursor.fetchall()
        if row:
            e_firstName.insert(0, row[0][1])
            e_lastName.insert(0, row[0][2])
            e_email.insert(0, row[0][3])
            e_phone.insert(0, row[0][4])
        else:
            msg.showinfo("Fetch Status", "Data not Found")
        connection.close()
        
root = Tk()
root.geometry("350x380")
root.title("Tkinter Example")
root.resizable(width = False, height = False)

l_id = Label(root, text = "ID", font =("Arial",10))
l_id.place(x=50,y=50)

e_id = Entry(root)
e_id.place(x = 150, y= 50)

l_firstName = Label(root, text = "First Name", font =("Arial",10))
l_firstName.place(x=50,y=100)

e_firstName = Entry(root)
e_firstName.place(x = 150, y= 100)

l_lastName = Label(root, text = "Last Name", font =("Arial",10))
l_lastName.place(x=50,y=150)

e_lastName = Entry(root)
e_lastName.place(x = 150, y= 150)

l_email = Label(root, text = "Email", font =("Arial",10))
l_email.place(x=50,y=200)

e_email = Entry(root)
e_email.place(x = 150, y= 200)

l_phone = Label(root, text = "Phone", font =("Arial",10))
l_phone.place(x=50,y=250)

e_phone = Entry(root)
e_phone.place(x = 150, y= 250)

create_table()

insertButton = Button(root, text = "INSERT", bg = "black", fg = "white", font=("Arial",12), command = insert_data)
insertButton.place(x =20, y=300)
    
fetchButton = Button(root, text = "FetchData", bg = "black", fg = "white", font=("Arial",12), command = search_data)
fetchButton.place(x =92, y=300)
