import BackButton from "../components/BackButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Stalker() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white p-6 relative">
      <BackButton />

      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-2">🕵️‍♂️ Stalker</h1>
      <p className="text-center text-lg mb-6">Peek into Vansh’s career vault</p>

      {/* Quick Access */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        <a
          href="https://github.com/vansh16-code"
          target="_blank"
          rel="noreferrer"
          className="bg-white/10 border border-gray-600 hover:scale-105 p-6 rounded-xl transition text-center"
        >
          <FaGithub size={40} className="mx-auto mb-2" />
          <h3 className="text-lg font-bold">GitHub</h3>
          <p className="text-sm text-gray-300">View projects & code</p>
        </a>
        <a
          href="https://linkedin.com/in/vansh-mahajan-267696277"
          target="_blank"
          rel="noreferrer"
          className="bg-white/10 border border-blue-600 hover:scale-105 p-6 rounded-xl transition text-center"
        >
          <FaLinkedin size={40} className="mx-auto mb-2" />
          <h3 className="text-lg font-bold">LinkedIn</h3>
          <p className="text-sm text-gray-300">Professional timeline</p>
        </a>

        <a
          href="https://www.instagram.com/_vansh_mahajan_/?igsh=bzQ2NTBpN3RzeDZ5#"
          target="_blank"
          rel="noreferrer"
          className="bg-white/10 border border-blue-600 hover:scale-105 p-6 rounded-xl transition text-center"
        >
          <FaLinkedin size={40} className="mx-auto mb-2" />
          <h3 className="text-lg font-bold">Instagram</h3>
          <p className="text-sm text-gray-300">Sneak Peak</p>
        </a>
       
      </div>

      {/* Footer */}
      <p className="text-center text-gray-400 italic mt-10">
        You sure know how to dig deep 😉
      </p>
    </div>
  );
}
