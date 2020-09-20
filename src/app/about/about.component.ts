import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent{
  title = "About"
  headers = [
    'Education',
    'Experience',
    'Involvement in the community',
    'Personal Section',
    'Skills'
  ]
  bodies = [
    'I am a sophomore studying Computer Science at Missouri University of Science and Technology. Currently, I am on track to graduate in the spring of 2023.',
    'I recently finished my first internship at J.B. Hunt. Work was completed using the agile framework for software development. I was placed in a development team to improve the UI and I learned an abundant amount of web development (frontend & backend). Actually, the knowledge that I obtained at this internship was used to create this website!',
    'I am involved in many clubs and teams on the campus of MS&T. I have been a member of multi-rotor, ACM web development, CCDC (Collegiate Cyber Defense Competition), Pi Kappa Alpha Fraternity, and many Intramural teams.',
    'When I am not busy with my other activities you can often find me skateboarding, doing parkour, reading books, working on personal coding projects, or even just hanging out with friends.',
    'C++, Python, Java, Unix, Typescript, Angular, Html/css, git, Networking/Computer Repair, and Graphic Design'
  ]
  projects = [
    {
      imgUrl: "/assets/img/lindbergh.jpg", 
      projectTitle: "LHS Connections", 
      desc: `We developed a website as a solution to World Wide Technologies hackathon
              The website allowed for students to find or tutor other students on classes
              they excelled in or need help with. I primarily work on the frontend designing the site.`, 
      link: "https://github.com/reidhaegele/LHS-Connections", 
      status: "Completed",
      imgStat: "/assets/img/greenstat.png"
    },
    {
      imgUrl: "/assets/img/multirotor.jpg", 
      projectTitle: "Multirotor", 
      desc: `We develop advanced solutions to drone challenges by using computer vision,
              flight control, and collision avoidance to achieve autonomous drone flight.
              I focused on the computer vision and object detection side.`, 
      link: "https://github.com/MissouriMRR/IARC-2020", 
      status: "Completed",
      imgStat: "/assets/img/greenstat.png"
    },
    {
      imgUrl: "/assets/img/website.JPG", 
      projectTitle: "Personal Website", 
      desc: `I developed a website using Angular to display information important to employers
              in order to show experience in web development. Currently, I am working to develope 
              a backend for this site. `, 
      link: "https://github.com/SamWeik/SamWeik.github.io", 
      status: "Completed",
      imgStat: "/assets/img/greenstat.png"
    },
    {
      imgUrl: "/assets/img/bot.png", 
      projectTitle: "InstagramBot", 
      desc: `I developed an instagram bot to spam a selected target to learn how a bot operates and 
              explore the power behind them.`, 
      link: "https://github.com/SamWeik/InstaBotSpam", 
      status: "Completed",
      imgStat: "/assets/img/greenstat.png"
    },
    {
      imgUrl: "/assets/img/CV.png", 
      projectTitle: "CVproject", 
      desc: `I developed a program using filters to detect motion, colors, and edges in a video.`, 
      link: "https://github.com/SamWeik/CVproject", 
      status: "Completed",
      imgStat: "/assets/img/greenstat.png"
    },
    {
      imgUrl: "/assets/img/calendar.png", 
      projectTitle: "Task Planner", 
      desc: `I am working to develop a calendar in python as a windows application to organize my 
              schedule for two weeks in order to improve time management and insure tasks are not forgotten. `, 
      link: "https://github.com/SamWeik/TaskPlanner", 
      status: "In Progress",
      imgStat: "/assets/img/yellowstat.png"
    },
    {
      imgUrl: "/assets/img/calendar.png", 
      projectTitle: "Greekeep", 
      desc: `A project with a small team of greek life students working to improve the way tasks are run
              at our fraternity. This project should allow fraternities to keep track of dailies, kitchen shifts,
              sober drives, events, and study hours.`, 
      link: "https://github.com/SamWeik", 
      status: "Wait Listed",
      imgStat: "/assets/img/redstat.png"
    }
  ]

}
