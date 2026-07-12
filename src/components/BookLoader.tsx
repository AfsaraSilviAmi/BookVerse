"use client";

export default function BookLoader() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-[#eef8ff]">

      {/* Background Glow */}
      <div className="absolute h-[450px] w-[450px] rounded-full bg-[#5B21B6]/10 blur-3xl" />

      {/* Outer Orbit */}
      <div className="absolute h-72 w-72 animate-spin rounded-full border border-dashed border-[#5B21B6]/20 [animation-duration:18s]" />

      {/* Inner Orbit */}
      <div className="absolute h-56 w-56 animate-spin rounded-full border border-[#008B8B]/20 [animation-duration:10s] [animation-direction:reverse]" />

      {/* Orbiting Stars */}
      <div className="absolute h-72 w-72 animate-spin [animation-duration:8s]">

        <span className="absolute left-1/2 top-0 -translate-x-1/2 text-2xl">
          ✨
        </span>

        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xl">
          ⭐
        </span>

        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl">
          🌟
        </span>

        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl">
          ✨
        </span>

      </div>

      {/* Floating particles */}
      <div className="absolute left-[30%] top-[30%] animate-pulse text-lg">
        ✦
      </div>

      <div className="absolute right-[30%] top-[35%] animate-pulse delay-300 text-lg">
        ✦
      </div>

      <div className="absolute bottom-[28%] left-[40%] animate-pulse delay-700 text-lg">
        ✦
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center">

        {/* Open Book */}
        <div className="relative">

          {/* Left page */}
          <div className="absolute right-1 h-28 w-16 origin-right animate-[pulse_2s_ease-in-out_infinite] rounded-l-md bg-gradient-to-br from-[#1A365D] to-[#008B8B] shadow-xl" />

          {/* Right page */}
          <div className="absolute left-1 h-28 w-16 origin-left animate-[pulse_2s_ease-in-out_infinite] rounded-r-md bg-gradient-to-br from-[#008B8B] to-[#5B21B6] shadow-xl" />

          {/* Spine */}
          <div className="relative z-10 h-28 w-[4px] bg-white rounded-full shadow-lg" />

        </div>

        <h2 className="mt-14 bg-gradient-to-r from-[#1A365D] via-[#008B8B] to-[#5B21B6] bg-clip-text text-3xl font-extrabold text-transparent">
          BookVerse
        </h2>

        <p className="mt-3 animate-pulse text-slate-500">
          Loading your next adventure...
        </p>

      </div>

    </div>
  );
}