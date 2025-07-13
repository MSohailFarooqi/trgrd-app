function ComingSoonComponent() {
  return (
    <div className="flex flex-wrap items-center py-10">
      <div className="w-full md:w-1/2">
        <h2 className="text-center text-4xl font-bold">
          Coming Soon -{" "}
          <span className="text-[#96819c] font-normal">Sneak Peak</span>
        </h2>
        <h1 className="text-center xl:text-[20em] lg:text-[15em] text-[8em] leading-[1em] font-extrabold tracking-[-.2em]">
          <span className="text-[#a590ab]">2</span>
          <span className="text-[#96819c]">0</span>
          <span className="text-[#7d6480]">2</span>
          <span className="text-[#96819c]">6</span>
        </h1>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 pt-10">
        <div className="block">
          <h3 className="text-2xl font-bold mb-2">
            🌐 Community Reflections Wall
          </h3>
          <p className="mb-5">
            An anonymous space to view or share what others are reflecting on —
            with filters by trigger type.
          </p>
        </div>
        <div className="block">
          <h3 className="text-2xl font-bold mb-2">📲 Mindful Notifications</h3>
          <p className="mb-5">
            Choose gentle reminders based on the time of day or your emotional
            patterns.
          </p>
        </div>
        <div className="block">
          <h3 className="text-2xl font-bold mb-2">
            💖 Emotion-Curated Playlists
          </h3>
          <p className="mb-5">
            Curated “watch, read, or listen” collections by emotion — e.g., “For
            When You Feel Stuck,” or “For Quiet Joy.”
          </p>
        </div>
        <div className="block">
          <h3 className="text-2xl font-bold mb-2">🔐 Private Notes Lock</h3>
          <p className="mb-5">
            Set a pin or biometric lock for your reflection journal and
            sensitive notes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonComponent;
