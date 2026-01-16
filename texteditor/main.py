# Create a texteditor using tkinter


#import tkinter
from tkinter import *
from tkinter import filedialog 

#save function
def saveas():
    global text
    t = text.get("1.0", "end-1c")
    savelocation=filedialog.asksaveasfilename()
    file1 = open(savelocation, "w+");
    file1.write(t)
    file1.close();

#initialization
root = Tk();

#text grid
text = Text(root)
text.grid()

#save button
button = Button(root, text="Save", command=saveas)
button.grid()

#main loop 
root.mainloop();


