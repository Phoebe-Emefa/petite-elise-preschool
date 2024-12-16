import CTA from "@/components/programs/CTA";
import Image from "next/image";

interface Trustee {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const trustees: Trustee[] = [
  {
    id: 1,
    name: "Eno Quagraine",
    role: "School Head",
    bio: `Eno Quagraine is a passionate educator with her first teaching experience 16 years ago at Ghana International School. She has also been deeply involved in advocacy for maternal health and empowering mothers through community-building platforms like Talkative Mom LLC.`,
    image: "/images/eno.jpg",
  },
  {
    id: 2,
    name: "Mrs Surama King",
    role: "Head of CAS Coordinator",
    bio: `With over 25 years in service-learning education, Surama has inspired students toward personal and academic growth. She champions creativity, resilience, and community engagement as means of building lifelong learners.`,
    image: "/images/Mrs-king.jpg",
  },
  {
    id: 3,
    name: "Dr Genevieve Allotey-Papoe",
    role: "Assistant Professor of Musicology",
    bio: `Dr Genevieve Allotey-Papoe is an expert in Musicology and Ethnomusicology at Brown University. She focuses on bridging the gap between academia and the creative industry with a passion for music, technology, and social impact.`,
    image: "/images/Genevive.jpg",
  },
  {
    id: 4,
    name: "Adelaide Yirenkyi",
    role: "Head of Programs, Audiologist",
    bio: `Adelaide Yirenkyi is an audiologist and speech-language therapist with extensive experience in inclusive education. She has worked with children across Ghana, focusing on early intervention and special needs education.`,
    image: "/images/Adelaide.jpg",
  },
  {
    id: 5,
    name: "David Kobina Quagraine",
    role: "Cloud Consultant, Group Head of Cloud",
    bio: `David Quagraine has 12+ years of experience in Cloud Consulting and is currently leading the Cloud department at FCMB, Nigeria. He is dedicated to creating tech-friendly programs for young learners to bridge the gap between education and technology.`,
    image: "/images/David.jpg",
  },
];

export default function BoardOfTrustees() {
  return (
  <>
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-20 text-center">
        <h2 className="text-2xl lg:text-5xl font-bold text-gray-800 mb-12">Meet the Board of Trustees</h2>
        <p className="text-lg lg:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Our trustees are leaders who bring expertise from diverse fields, guiding us toward excellence and empowering future generations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {trustees.map((trustee) => (
            <div key={trustee.id} className="flex flex-col items-center gap-8">
              {/* Image Section */}
              <div className="relative w-full h-80 sm:w-[280px] sm:h-[240px] md:w-[350px] md:h-[270px] xl:w-[450px] xl:h-[350px] rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105">
                <Image
                  src={trustee.image}
                  alt={trustee.name}
                  layout="fill"
                  objectFit="cover" 
                  className="rounded-xl"
                />
              </div>

              {/* Text Section */}
              <div className="text-center w-full px-4">
                <h3 className="text-2xl font-semibold text-gray-800">{trustee.name}</h3>
                <p className="text-lg text-primary">{trustee.role}</p>
                <p className="mt-4 text-md text-gray-700">{trustee.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTA />
  </>
  );
}
