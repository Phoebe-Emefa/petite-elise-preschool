// pages/building-blocks-club.tsx

import CTA from "@/components/programs/CTA";

const BuildingBlocksClub = () => {
  const programs = [
    {
      title: "Summer Camp",
      period: "July to September",
      description:
        "Our Summer Camp runs for 13 weeks and is open to children outside our school from ages 1-6 years. Daily, Weekly, Monthly, and Full Term options are available.",
    },
    {
      title: "Christmas Camp",
      period: "3rd/4th week of December",
      description:
        "Join us for holiday fun and learning during the festive season.",
    },
    {
      title: "Childminding",
      period: "School breaks, Public holidays, Weekends",
      description:
        "Children on a midterm break, enrolled in other schools, can be registered. During public holidays and weekends, childminding services are available upon request. They will be assisted with homework, fed, and engaged during the period.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* <section className="relative h-[60vh]">
        <Image
          src="/images/club.jpg"
          alt="Building Blocks Club"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </section> */}

      <section className="flex justify-center items-center h-[60vh] bg-white">
        <div className="text-center leading-none">
          {/* Top Text - BUILDING BLOCKS */}
          <div
            className="relative text-[4rem] md:text-[5rem] lg:text-[6rem] font-extrabold uppercase drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]"
            style={{
              color: "#00B2FF", // Inner Blue
              textShadow: `
          2px 2px 0 #FFD700, /* Yellow Outline */
          4px 4px 0 #FF0000, /* Red Layer 1 */
          6px 6px 0 #FF0000, /* Red Layer 2 */
          8px 8px 0 #000000  /* Black Shadow Layer */
        `,
            }}
          >
            Building Blocks
          </div>

          {/* Bottom Text - CLUB */}
          <div
            className="relative text-[5rem] md:text-[6rem] lg:text-[7rem] font-extrabold uppercase mt-4 drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]"
            style={{
              color: "#00B2FF", // Inner Blue
              textShadow: `
          2px 2px 0 #FFD700, /* Yellow Outline */
          4px 4px 0 #FF0000, /* Red Layer 1 */
          6px 6px 0 #FF0000, /* Red Layer 2 */
          8px 8px 0 #000000  /* Black Shadow Layer */
        `,
            }}
          >
            Club
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="pt-4 pb-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-gray-700">
            Building Blocks Club was set up to engage kids in experiential
            activities like Arts & Crafts, Gardening, Sensory Activities, Games,
            Reading, Outdoor Adventures, and so much more while parents get a
            chance to unwind after a full work week. We also offer homework help
            at no extra cost. This is open to all kids, whether enrolled with us
            or not.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-8">
            Programs We Offer
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.title}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-secondary mb-2">
                  {program.title}
                </h3>
                <p className="text-sm font-medium text-gray-500 mb-4">
                  Period: {program.period}
                </p>
                <p className="text-gray-700">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default BuildingBlocksClub;
