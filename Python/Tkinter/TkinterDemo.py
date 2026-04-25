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
        insertQuery = "insert into student_info(firstName, lastName, email, mobile) values(%s, %s, %s, %s)"
        instertedDetails = (e_firstName.get(), e_lastName.get(), e_email.get(), e_phone.get())
        cursor.execute(insertQuery, instertedDetails)
        connection.commit()
        connection.close()
        e_firstName.delete(0,'end')
        e_lastName.delete(0,'end')
        e_email.delete(0,'end')
        e_phone.delete(0,'end')
        msg.showinfo("Insert Status", "Data Inserted Successfully..!!") 
    
def search_data() :
    print("Search Button Clicked")

def update_data() :
    print("Update Button Clicked")

def delete_data() :
    print("Delete Button Clicked")

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

insertButton = Button(root, text = "INSERT", bg = "black", fg = "white", font=("Arial",12), command = insert_data)
insertButton.place(x =20, y=300)
    
searchButton = Button(root, text = "SEARCH", bg = "black", fg = "white", font=("Arial",12), command = search_data)
searchButton.place(x =92, y=300)

updateButton = Button(root, text = "UPDATE", bg = "black", fg = "white", font=("Arial",12), command = update_data)
updateButton.place(x =175, y=300)

deleteButton = Button(root, text = "DELETE", bg = "black", fg = "white", font=("Arial",12), command = delete_data)
deleteButton.place(x =255, y=300)
