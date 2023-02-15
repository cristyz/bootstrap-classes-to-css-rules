import re
import os


file = open("cssFile.css", "r")

cssClasses = re.findall(r'\.(.*?)\s*{([^}]*)}', file.read())

string = ""
for cssClass in cssClasses:
    if not "98" in cssClass[0]:
        string += "." + cssClass[0] + " { " + cssClass[1] + " } \n"


newFile = open("newCssFile.css", "w")
newFile.write(string)
newFile.close()

file.close()

file = open("newCssFile.css", "r")
cssClasses = re.findall(r'\.(.*?)\s*{([^}]*)}', file.read())

string = "export const cssClasses = { \n"
for cssClass in cssClasses:
    string += '"' + cssClass[0].replace('"', "'") + '" : `' + cssClass[1] + '`, \n'
string += "}"

newFile = open("cssClasses.js", "w")
newFile.write(string)
newFile.close()

# delete newCssFile.css file
os.remove("newCssFile.css")

