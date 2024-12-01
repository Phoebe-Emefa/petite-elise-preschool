import { LuAward, LuCheckCircle, LuHeart, LuMessageSquare, LuShield, LuSparkles, LuTarget, LuUsers } from "react-icons/lu";

export const navigation: { title: string; href: string }[] = [
    { title: "About", href: "/about" },
    { title: "Programs", href: "/programs" },
    { title: "Contact", href: "/contact" },
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