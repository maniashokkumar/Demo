import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  courseDetails = [{
    courseId: 'robotics',
    title: 'Canva Essentials with Ronny and Diana',
    description: 'A Beginner Guide to Start your Canva Journey | 2025 Edition',
    difficulty: "Beginner",
    duration: "10 days",
    creator: "Insutructor : Ronny Hermosa",
    language: "English",
    price: "Free",
    buttonText: "Join Class",
    location: "Online",
    videoDetails:{
      title: "Course Video",
      description: "This is a sample video description.",
      thumbnail: "https://img.freepik.com/free-photo/young-boy-learning-more-about-chemistry-class_23-2149068317.jpg",
      videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    eventDetails:{
      startDate: "2023-10-01",
     imageDetails:{
      imageName: "Course Image",
      imageUrl: ''
     }
    },
   shareButtonText: "Share",
   courseNavigation: [
    { label: "What you'll learn", active: true, nagivationDetails:["How to Get Started with Canva as a Beginner","How to Get Started with Canva as a Beginner","How to Get Started with Canva as a Beginner","How to Get Started with Canva as a Beginner","How to Get Started with Canva as a Beginner","How to Get Started with Canva as a Beginner"] },
    { label: "Course content", active: false ,nagivationDetails:["Use Canva to Edit Videos","Use Canva to Edit Videos","Use Canva to Edit Videos"] },
    { label: "Reviews", active: false ,nagivationDetails:["How to Upload and Edit Photos in Canva","How to Upload and Edit Photos in Canva","How to Upload and Edit Photos in Canva"] },
    { label: "Instructors", active: false ,nagivationDetails:["How to Work with Text in Canva","How to Work with Text in Canva","How to Work with Text in Canva"] }
  ]
  }, {
    courseId: 'robotics',
    title: 'Canva Essentials with Ronny and Diana',
    description: 'A Beginner Guide to Start your Canva Journey | 2025 Edition',
    difficulty: "Beginner",
    duration: "10 days",
    creator: "Insutructor : Ronny Hermosa",
    language: "English",
    price: "Free",
    buttonText: "Join Class",
    location: "Online",
    videoDetails:{
      title: "Course Video",
      description: "This is a sample video description.",
      thumbnail: "https://img.freepik.com/free-photo/young-boy-learning-more-about-chemistry-class_23-2149068317.jpg",
      videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
   shareButtonText: "Share",
   courseNavigation: [
    { label: "What you'll learn", active: true, nagivationDetails:["How to Get Started with Canva as a Beginner","How to Get Started with Canva as a Beginner","How to Get Started with Canva as a Beginner","How to Get Started with Canva as a Beginner","How to Get Started with Canva as a Beginner","How to Get Started with Canva as a Beginner"] },
    { label: "Course content", active: false ,nagivationDetails:["Use Canva to Edit Videos","Use Canva to Edit Videos","Use Canva to Edit Videos"] },
    { label: "Reviews", active: false ,nagivationDetails:["How to Upload and Edit Photos in Canva","How to Upload and Edit Photos in Canva","How to Upload and Edit Photos in Canva"] },
    { label: "Instructors", active: false ,nagivationDetails:["How to Work with Text in Canva","How to Work with Text in Canva","How to Work with Text in Canva"] }
  ]
  },{
    courseId: 'robotics',
    title: 'Canva Essentials with Ronny and Diana',
    description: 'A Beginner Guide to Start your Canva Journey | 2025 Edition',
    difficulty: "Beginner",
    duration: "10 days",
    creator: "Insutructor : Ronny Hermosa",
    language: "English",
    price: "Free",
    buttonText: "Join Class",
    location: "Online",
    videoDetails:{
      title: "Course Video",
      description: "This is a sample video description.",
      thumbnail: "https://img.freepik.com/free-photo/young-boy-learning-more-about-chemistry-class_23-2149068317.jpg",
      videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
   shareButtonText: "Share",
   courseNavigation: [
    { label: "What you'll learn", active: true, nagivationDetails:["How to Get Started with Canva as a Beginner","How to Get Started with Canva as a Beginner","How to Get Started with Canva as a Beginner","How to Get Started with Canva as a Beginner","How to Get Started with Canva as a Beginner","How to Get Started with Canva as a Beginner"] },
    { label: "Course content", active: false ,nagivationDetails:["Use Canva to Edit Videos","Use Canva to Edit Videos","Use Canva to Edit Videos"] },
    { label: "Reviews", active: false ,nagivationDetails:["How to Upload and Edit Photos in Canva","How to Upload and Edit Photos in Canva","How to Upload and Edit Photos in Canva"] },
    { label: "Instructors", active: false ,nagivationDetails:["How to Work with Text in Canva","How to Work with Text in Canva","How to Work with Text in Canva"] }
  ]
  }]

  getCourseDetails(courseId: string) {
    return this.courseDetails.find(course => course.courseId === courseId);
  }
}
