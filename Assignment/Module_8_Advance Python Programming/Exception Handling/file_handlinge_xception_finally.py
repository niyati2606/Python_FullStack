def read_file_safely(filename):
    file = None
    try:
        file = open(filename, "r")
        content = file.read()
        print("File content:")
        print(content)
    except FileNotFoundError:
        print(f"Error: '{filename}' does not exist.")
    except PermissionError:
        print(f"Error: No permission to read '{filename}'.")
    finally:
        if file:
            file.close()
            print("File closed successfully.")
        else:
            print("No file was opened.")

read_file_safely("sample.txt")
