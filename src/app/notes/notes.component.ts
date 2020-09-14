import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent{
  title = "Notes"
  description = `Here are some of the notes and projects from my classes.
                 I am currently in the process of transfering the files to this site. 
                 So, please excuse the lack of functionality.`

  classes = [
    {
      name: "Discrete Math",
      date: "Fall 2020",
      level: "CS1200",
      notes:[
        {
          title: "Class 1",
          fileType: "img",
          file: ""
        },
        {
          title: "Class 2",
          fileType: "img",
          file: ""
        },
        {
          title: "Class 3",
          fileType: "img",
          file: ""
        }
      ]
    },
    {
      name: "Data Structures",
      date: "Spring 2020",
      level: "CS1575",
      notes:[
        {
          title: "Class 1",
          fileType: " img",
          file: ""
        },
        {
          title: "Class 2",
          fileType: "file",
          file: ""
        },
        {
          title: "Class 3",
          fileType: "link",
          file: ""
        }
      ]
    },
    {
      name: "C++ Object-Oriented",
      date: "Fall 2019",
      level: "CS1570",
      notes:[
        {
          title: "Class 1",
          fileType: "img",
          file: ""
        },
        {
          title: "Class 1",
          fileType: "file",
          file: ""
        },
        {
          title: "Class 1",
          fileType: "link",
          file: ""
        }
      ]
    }
  ]

}
