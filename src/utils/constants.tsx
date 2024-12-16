import { LuAward, LuCheckCircle, LuHeart, LuMessageSquare, LuShield, LuSparkles, LuTarget, LuUsers } from "react-icons/lu";

export const navigation: { title: string; href: string }[] = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Programs", href: "/programs" },
    { title: "Contact", href: "/contact" },
    // { title: "Blogs", href: "/blogs" },
  ]

 export const values = [
    { 
      name: "RESPECT",
      description: "Promoting a culture of tolerance, inclusion, diversity, equality, fairness and opportunity among staff and students.",
      icon: <LuHeart className="w-8 h-8" />
    },
    { 
      name: "CLEANLINESS",
      description: "Maintaining a healthy, tidy, orderly, functional environment that enables learning and fosters good habits.",
      icon: <LuCheckCircle className="w-8 h-8" />
    },
    { 
      name: "COMMUNICATION",
      description: "Genuine, open and honest dialogues.",
      icon: <LuMessageSquare className="w-8 h-8" />
    },
    { 
      name: "INTEGRITY",
      description: "Doing the right thing, even when no one else is watching.",
      icon: <LuShield className="w-8 h-8" />
    },
    { 
      name: "CREATIVITY",
      description: "Unearthing the potentials of both students and staff.",
      icon: <LuSparkles className="w-8 h-8" />
    },
    { 
      name: "SOLUTION & RESULT-DRIVEN",
      description: "Proactively problem-solving when issues arise.",
      icon: <LuTarget className="w-8 h-8" />
    },
    { 
      name: "ACCOUNTABILITY",
      description: "To accept responsibility and make positive changes.",
      icon: <LuUsers className="w-8 h-8" />
    },
    { 
      name: "COMMITMENT TO EXCELLENCE",
      description: "Developing skills for learning and continuously improving.",
      icon: <LuAward className="w-8 h-8" />
    },
  ]


  export const programs = [
    {
      icon: "/images/abc.png",
      title: "Daycare",
      time: "8:30am - 10:00am",
      price: "GHC 20,000",
      description:
        "We offer two Extended Day classes. Our Kaleidoscope Class meets from 12:00pm-3:30pm.",
      ageGroup: "All ages",
      schedule: "Monday-Friday, 8:30 AM - 3:30 PM",
      activities: ["Playtime", "Basic Learning", "Creative Arts", "Nap Time"],
    },
    {
      icon: "/images/puzzle.png",
      title: "Preschool",
      time: "8:30am - 10:00am",
      price: "GHC 20,000",
      description:
        "Our Summer Program is a 6-week learning adventure for children ages 3-4.",
      ageGroup: "Ages 3-4",
      schedule: "Monday-Friday, 8:30 AM - 12:00 PM",
      activities: ["Early Literacy", "Math Foundations", "Social Skills"],
    },
    {
      icon: "/images/calendar.png",
      title: "AfterSchool Care",
      time: "8:30am - 10:00am",
      price: "GHC 20,000",
      description:
        "The commitment of the school undertakes a viable, meaningful program for children.",
      ageGroup: "K-5th grade",
      schedule: "Monday-Friday, 3:00 PM - 6:00 PM",
      activities: ["Homework Help", "Reading Club", "Outdoor Play"],
    },
    {
      icon: "/images/tent-house.png",
      title: "Summer Camp",
      time: "8:30am - 10:00am",
      price: "GHC 20,000",
      description:
        "A meaningful program for children including outdoor activities and fun experiences.",
      ageGroup: "All ages",
      schedule: "Monday-Friday, 9:00 AM - 5:00 PM",
      activities: ["Outdoor Exploration", "Sports", "Field Trips"],
    },
    {
      icon: "/images/christmas.png",
      title: "Christmas Camp",
      time: "8:30am - 10:00am",
      price: "GHC 20,000",
      description:
        "Celebrate the holidays with arts, crafts, and storytelling at Christmas Camp.",
      ageGroup: "All ages",
      schedule: "Monday-Friday, 9:00 AM - 5:00 PM",
      activities: ["Holiday Crafts", "Games", "Storytelling"],
    },
    {
      icon: "/images/logical-thinking.png",
      title: "Childminding",
      time: "8:30am - 10:00am",
      price: "GHC 20,000",
      description:
        "Flexible hours for parents, offering creative and fun activities for children.",
      ageGroup: "All ages",
      schedule: "Flexible Hours",
      activities: ["Playtime", "Storytelling", "Creative Activities"],
    },
  ];
  