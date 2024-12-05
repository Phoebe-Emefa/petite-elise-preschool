export function ProgramsHero() {
  return (
    <div className="relative h-[60vh] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/639407632/photo/excited-school-girls-during-chemistry-experiment.jpg?s=612x612&w=0&k=20&c=-W-vGm-bJ9XnxiCyFIxmLz3Asi0NJEiUjJoPShtBGLo=')",
        }}
      >
        {/* Lighter Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(0, 127, 148, 0.3), rgba(0, 127, 148, 0.5))`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-md">
          Nurturing Young Minds
        </h1>
        <p className="text-xl mb-8 drop-shadow-md">
          Discover our comprehensive programs designed to inspire, educate, and
          empower your child&apos;s early years.
        </p>
      </div>
    </div>
  );
}
