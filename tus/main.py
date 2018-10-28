#!/usr/bin/env python3

from subprocess import call
import os
import urllib

def parse_file(fname):
    # Read the file in
    f = open(fname, 'r')
    lines = f.readlines()
    f.close()

    # Doing course search or not
    check = False
    # Valid semester labels
    semesterLabel = ['AUTUMN ', 'SPRING ', 'SUMMER ']
    # Tracks the current line number
    lineNumber = 0
    # Stuff
    subject = []
    number = []
    course = []

    # Check if number
    def isNumber(s):
        try:
            float(s)
            return True
        except ValueError:
            return False

    # Flag when an error from pdf to text is detected
    danger = False

    # For each line
    for line in lines:
        # Skip line if empty
        if line == '\n' :
            continue

        # Check if line contains a valid semester label
        if any(x in line for x in semesterLabel) :

            # Initiate course search
            check = True

            # Semester holds description for semester. e.g. AUTUMN, 2018, UENG
            semester = line.split(' ')
            startLine = lineNumber

            # Reset sub line count (the count for this semester)
            withinLine = 0

        # Read in classes
        if check :

            # Break and set check to false if end is reached
            if "SEM:HR" in line :
                check = False
                withinLine = 0
                continue

            # Save in variables
            if withinLine % 4 == 1 :
                # When pdf to text messes up a newline
                if isNumber(line) :
                    danger = True
                    withinLine -= 1
                    courseTemp = []
                    subject.append(oldLine[:-1])
                    courseTemp = oldLine[:-1] + ' '
                    line2 = line
                    number.append(line2[:-1])
                    courseTemp += line2[:-1]
                    course.append(courseTemp)
                else :
                    courseTemp = []
                    subject.append(line[:-1])
                    courseTemp = line[:-1] + ' '

            elif (not danger) & (withinLine % 4 == 2) :
                line2 = line
                # Make sure 1281.02H doesn't mess up
                if ' ' in line :
                    line2 = line.split(' ')[0] + ' '
                    withinLine += 1
                number.append(line2[:-1])
                courseTemp += line2[:-1]
                course.append(courseTemp)

            # Increment sub line count
            withinLine += 1

            danger = False

        # Increment line number
        lineNumber += 1

        # Store current line (for when pdf to text messes up)
        oldLine = line

    return course

from flask import Flask, render_template, request
from werkzeug import secure_filename
app = Flask(__name__)
	
@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
   if request.method == 'POST':
      f = request.files['file']
      fname = secure_filename(f.filename)
      f.save(fname)
      call(["pdftotext", fname, "out.txt"])

      courses = ','.join(parse_file("out.txt"))

      os.remove("out.txt")
      os.remove(fname)

      html = "<html><head><meta http-equiv=\"refresh\" content=\"0; URL='http://localhost:8000/?comp=" + urllib.parse.quote(courses) + "'\" /></head></html>"

      return html
		
if __name__ == '__main__':
   app.run(debug = True)