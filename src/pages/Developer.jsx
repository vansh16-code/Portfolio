import BackButton from "../components/BackButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Developer() {
  const projects = [
    {
      title: "InkPersona",
      description:
        "InkPersona is an AI-powered character interview tool built with Django and OpenAI. It helps writers overcome creative blocks by simulating natural conversations with their fictional characters, unlocking deeper story ideas through interactive Q&A sessions.",
      link: "https://github.com/vansh16-code/inkpersona",
    },
    {
      title: "Sockets (Django Channels)",
      description:
        "A real-time chat application using Django Channels and WebSockets, enabling live communication between users. Features include private and group chats, typing indicators, and instant updates without page refresh — all built with Django, Redis, and Tailwind.",
      link: "https://github.com/vansh16-code/Sockets-dj-channels-",
    },
    {
      title: "UniPool",
      description:
        "UniPool is a ride-sharing platform built for university students to coordinate safe, efficient campus travel. Built with Django, it allows users to offer or join rides, manage requests, and communicate with peers — making commuting more sustainable and community-driven.",
      link: "https://github.com/vansh16-code/UniPool",
    },
    {
      title: "UniFace",
      description:
        "UniFace is a centralized Django-based portal that allows all departments of a university to manage and publish their upcoming events and news. Students can follow departments, RSVP to events, and participate in polls and surveys — all from a single platform.",
      link: "https://github.com/vansh16-code/uniface",
    },
    {
      title: "WaveType",
      description:
        "This project implements a virtual keyboard controlled by hand gestures using OpenCV, MediaPipe, and Python. The user can type on a virtual keyboard displayed on the screen using hand gestures, such as pinching the thumb and index finger together to click on a key.",
      link: "https://github.com/vansh16-code/WaveType",
    },
    {
      title: "React-Custom-Auth",
      description:
        "A custom React user registration form with client-side validation, visual feedback, and JSON Server as a mock backend API.",
      link: "https://github.com/vansh16-code/ReactCustomAuthForm",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white p-6 relative">
      <BackButton />

      <h1 className="text-4xl font-bold text-center mb-4">👨‍💻 Developer</h1>
      <p className="text-center text-lg mb-6">Vansh Mahajan</p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-10">
        <a
          href="https://github.com/vansh16-code"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/vansh-mahajan-267696277"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin size={30} />
        </a>
      </div>

      {/* Projects */}
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="bg-white/10 rounded-xl p-4 border border-purple-500 hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold mb-1">{proj.title}</h3>
            <p className="text-sm text-gray-300 mb-2">{proj.description}</p>
            <a
              href={proj.link}
              className="text-purple-300 underline text-sm"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
