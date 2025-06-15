import BackButton from "../components/BackButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Recruiter() {
  const skills = [
    "React", "Django", "FastAPI", "TailwindCSS",
    "PostgreSQL", "Javascript", "Machine Learning", "OpenCV", "WebSockets",
  ];

  const achievements = [

    {
      title: "Winner at TECHNOVISTA 2.O IDEATHON",
      detail:
        "🥈 2nd Prize at Ideathon for UniPool a ride-sharing platform for university students, recognized for innovation and social impact.",
    },
    {
      title: "🧠 Developed 'ReactCustomAuth'",
      detail:
        "A custom React user registration form with client-side validation, visual feedback, and JSON Server as a mock backend API.",
    },
    {
      title: "💡 Built 'InkPersona'",
      detail:
        "A tool that helps writers beat creative blocks using AI-powered character interviews — over 1,000+ simulated sessions.",
    },
    {
      title: "🚗 Created UniPool",
      detail:
        "A Django-based ride-sharing portal for university students promoting safer, sustainable campus commuting.",
    },
    {
      title: "🧠 Developed WebSockets using Django Channels. ",
      detail:
        "A custom React user registration form with client-side validation, visual feedback, and JSON Server as a mock backend API.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      <BackButton />

      <h1 className="text-4xl font-bold text-center mb-4">👔 Recruiter View</h1>
      <p className="text-center text-lg mb-10">Vansh Mahajan</p>

      {/* Intro */}
      <div className="max-w-3xl mx-auto mb-10 text-center text-gray-300">
        <p>
          I'm a passionate and self-driven full-stack developer who loves blending creativity with logic to solve real-world problems.
          With strong experience in technologies like <span className="text-purple-400">React</span>, <span className="text-purple-400">Django</span>,
          <span className="text-purple-400">FastAPI</span>, and <span className="text-purple-400">JavaScript</span>, I've built projects ranging from AI-powered storytelling tools like 
          <strong> InkPersona</strong> to real-time applications using Django Channels. I thrive on building user-focused, technically-sound applications that make a difference.
        </p>
      </div>

      {/* Skills */}
      <h2 className="text-2xl font-semibold text-center mb-4">💻 Skills</h2>
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-purple-700 rounded-full text-sm hover:scale-105 transition"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Achievements */}
      <h2 className="text-2xl font-semibold text-center mb-4">🏅 Achievements</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {achievements.map((achieve, index) => (
          <div
            key={index}
            className="bg-white/10 p-4 rounded-lg border border-purple-500 shadow-lg"
          >
            <h3 className="text-lg font-bold mb-2">{achieve.title}</h3>
            <p className="text-sm text-gray-300">{achieve.detail}</p>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">📫 Let's Connect</h2>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/vansh16-code"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/vansh-mahajan-267696277"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:vanshmahajan2023@gmail.com"
            className="hover:text-red-400 text-sm mt-1"
          >
            vanshmahajan2023@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
