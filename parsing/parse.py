#!/usr/bin/env python3

from os import listdir

courses = []
for file_name in listdir("pdfs"):
    if '.txt' not in file_name:
        continue
    link = file_name.replace('txt', 'pdf')
    course = file_name.split('.')[0]
    assert 'CSE-' in course
    course = 'CSE ' + course[4:]
    courses.append({'name': course, 'file': "pdfs/" + file_name, 'data': None, 'link': 'http://coe-portal.cse.ohio-state.edu/pdf-exports/CSE/' + link})

for course in courses:
    contents = open(course['file']).read()
    lines = contents.split('\n')
    if course['name'] not in lines[0]:
        print('Bad file ' + course['name'])
    
    name = ':'.join(lines[0].split(':')[1:])

    course_desc_num = 0
    for (n, line) in enumerate(lines):
        if 'Course Description' in line:
            course_desc_num = n
            break
    
    if course_desc_num == 2:
        name = name.strip() + " " + lines[1].strip()
    
    desc = ''
    for line in lines[course_desc_num+1:]:
        if ':' not in line:
            desc = desc + line
        else:
            break
    
    prereq_num = 0
    for (n, line) in enumerate(lines):
        if 'Prerequisites' in line:
            prereq_num = n
            break
    

    prereqs = ':'.join(lines[prereq_num].split(':')[1:])
    for line in lines[prereq_num+1:]:
        if ':' not in line:
            prereqs = prereqs + line
        else:
            break

    data = {'prereq': prereqs, 'desc': desc, 'name': name}
    course['data'] = data

"""
var csv = "Course,Name,Desc,Prereqs\n" +
"CSE 1212,,,CSE 1211\n"+
"CSE 1211,,,\n"+
"CSE 2221,Software I: Software Components,,CSE 1211 or CSE 1212\n"+
"CSE 2231,Software II: Software Development and Design,,CSE 2221\n" + 
"CSE 2501,\"Social, Ethical, and Professional Issues in Computing\",,CSE 2231";
"""

for course in courses:
    print('"' + course['name'] + '","' + course['data']['name'].replace('"', '\\"').strip() + '","' + course['data']['desc'].replace('"', '\\"').strip() + '","' + course['data']['prereq'].replace('"', '\\"').strip() + '","' + course['link'].replace('"', '\\"').strip() + '"')