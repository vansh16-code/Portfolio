// src/pages/Adventurer.jsx
import BackButton from "../components/BackButton";
import Starfield from "../components/Starfield";

export default function Adventurer() {
  return (
    <div className="min-h-screen bg-black text-white p-6 relative overflow-hidden">
      {/* Starfield Background */}
      <Starfield />

      {/* Fixed Back Button */}
      <div className="fixed top-4 left-4 z-20">
        <BackButton />
      </div>

      {/* Main Content */}
      <div className="text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🧭 Adventurer</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-300">
          I’m an explorer — not just of technology but of time, reality, and possibility.
          A quantum mechanics enthusiast, I love diving into the mysteries of the universe
          and understanding the complexities of the cosmos.
        </p>

        <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-400">
          Whether it's simulating characters with AI, crafting financial RPGs, or connecting
          students via real-time portals — I build not only with logic, but with imagination.
          My projects include <strong>InkPersona</strong>, <strong>FinanceQuest</strong>,
          <strong> UniPool</strong>, and <strong>UniFace</strong>.
        </p>

        {/* Interests Section */}
        <div className="mt-10 text-left max-w-2xl mx-auto space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-purple-300 mb-2">📚 Favorite Books</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li><em>To Kill a Mockingbird</em> – for its profound social commentary.</li>
              <li><em>Misery</em> by Stephen King – a deep dive into psychological suspense.</li>
              <li><em>A Brief History of Time</em> by Stephen Hawking – unlocking the universe.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-purple-300 mb-2">🎬 Favorite Movies</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li><strong>The Hangover</strong> – for chaotic comedy brilliance.</li>
              <li><strong>How to Make Millions Before Grandma Dies</strong> – emotionally powerful and raw.</li>
              <li><strong>Interstellar</strong> – beautifully intertwining space, love, and physics.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-purple-300 mb-2">🎌 Anime Explorer</h2>
            <p className="text-gray-300">
              I’m an avid anime watcher. From high-stakes mind battles in <strong>Death Note</strong>
              to heartwarming journeys in <strong>Your Name</strong>, anime inspires both my storytelling
              and emotional depth in design.
            </p>
          </div>
        </div>
      </div>

      {/* Quote */}
      <p className="text-purple-400 text-sm italic text-center mt-10 z-10 relative">
        "We are all stardust trying to code meaning into existence."
      </p>
    </div>
  );
}
