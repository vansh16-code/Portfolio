// src/pages/Home.jsx
import AvatarCard from "../components/AvatarCard";

export default function Home() {
  const avatars = [
    { role: "Developer", img: "/avatars/developer.png", path: "/developer" },
    { role: "Recruiter", img: "/avatars/recruiter.png", path: "/recruiter" },
    { role: "Adventurer", img: "/avatars/adventurer.png", path: "/adventurer" },
    { role: "Stalker", img: "/avatars/stalker.png", path: "/stalker" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-semibold mb-12 tracking-wider">
        Who's watching?
      </h1>

      {/* Avatar Grid */}
      <div className="flex gap-10 flex-wrap justify-center">
        {avatars.map((avatar) => (
          <AvatarCard key={avatar.role} {...avatar} />
        ))}
      </div>
    </div>
  );
}
