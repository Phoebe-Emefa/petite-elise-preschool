import Image from "next/image";

interface StaffMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const staffMembers: StaffMember[] = [
  {
    id: 1,
    name: "Adelaide Ankrah",
    role: "Head of Programs & Administration",
    image: "/images/eno.jpg", // Replace with your image path
  },
  {
    id: 2,
    name: "Gifty Kobi Osei",
    role: "Assistant Teacher",
    image: "/images/eno.jpg", // Replace with your image path
  },
  {
    id: 3,
    name: "Gifty Kobi Osei",
    role: "Assistant Head of Administration & HR",
    image: "/images/eno.jpg", // Replace with your image path
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Teacher",
    image: "/images/eno.jpg",
  },
  {
    id: 5,
    name: "John Doe",
    role: "Teacher",
    image: "/images/eno.jpg",
  },
  {
    id: 6,
    name: "Jane Doe",
    role: "Teacher",
    image: "/images/eno.jpg",
  },
  {
    id: 7,
    name: "Isaac Dorkenu",
    role: "Security",
    image: "/images/eno.jpg",
  },
  {
    id: 6,
    name: "Jane Doe",
    role: "Head of Kitchen",
    image: "/images/eno.jpg",
  },
];

export default function OurStaff() {
  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
    <div className="max-w-7xl mx-auto ">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-center bg-gradient-to-r from-[#007f94] to-[#009ca5] bg-clip-text text-transparent mb-6 tracking-tight">
        Our Dedicated Staff
      </h2>
      <p className="text-base lg:text-xl text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Meet the passionate individuals behind our mission, dedicated to the well-being and development of each child at our center.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-0">
        {staffMembers.map((staff) => (
          <div
            key={staff.id}
            className="group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-[30rem] lg:h-[35rem]">
              <Image
                src={staff.image}
                alt={staff.name}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute right-0 bottom-0 bg-white rounded-l-3xl p-6 text-right">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary mb-2">
                  {staff.name}
                </h3>
                <p className="text-gray-500">{staff.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
