
from tkinter import *
from tkinter import filedialog 

def saveas():
    global text
    t = text.get("1.0", "end-1c")
    savelocation=filedialog.asksaveasfilename()
    file1 = open(savelocation, "w+");
    file1.write(t)
    file1.close();

root = Tk();
text = Text(root)
text.grid()

button = Button(root, text="Save", command=saveas)
button.grid()




root.mainloop();


