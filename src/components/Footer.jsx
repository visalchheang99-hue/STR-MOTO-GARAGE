import React, { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const socials = [
    {
      platform: 'facebook',
      url: 'https://web.facebook.com/profile.php?id=100063638410322',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      ),
    },
    {
      platform: 'tiktok',
      url: 'https://www.tiktok.com/@sitharithsuon95?is_from_webapp=1&sender_device=pc',
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31.01 2.61.18 3.86.51.04.1.07.21.08.32a11.59 11.59 0 0 0 2.44 5.37c.05.05.11.1.18.14a8.19 8.19 0 0 0 4.82 1.63v3.7c-1.39-.02-2.76-.35-4.01-.97-.13-.07-.25-.15-.36-.24a10.63 10.63 0 0 1-.77-.73v6.78c0 4.1-2.9 7.46-6.72 7.46a6.65 6.65 0 0 1-6.66-6.64c0-3.67 2.97-6.65 6.64-6.65.23 0 .46.01.69.04v3.74a2.91 2.91 0 0 0-2.22 2.87c0 1.62 1.32 2.93 2.94 2.93a2.94 2.94 0 0 0 2.94-2.93V0h3.21z" />
        </svg>
      ),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '') return;
    setIsJoined(true);
    setEmail('');
  };

  return (
    <footer className="relative w-full bg-[#050505] text-zinc-400 font-sans pt-20 pb-10 px-6 overflow-hidden select-none">

      {/* Top red line accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80 blur-[1px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pb-16">

        {/* Left — Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-5">

            {/* Logo with spin border on hover */}
            <div className="relative group p-0.5 rounded-xl bg-zinc-800/40 transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer">
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_20%,#a1a1aa_30%,transparent_40%,transparent_70%,#a1a1aa_80%,transparent_90%)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-500" />
              <div className="relative bg-[#0d0d0d] p-1 rounded-[10px]">
                <img
                  src="/STRlogo.jpg"
                  alt="STR MOTO Garage"
                  className="w-14 h-14 rounded-[9px] object-cover transition duration-300"
                />
              </div>
            </div>

            <div>
              <h3 className="text-white text-2xl font-black tracking-tighter uppercase font-mono leading-none">
                <span className="text-red-500">STR</span> MOTO Garage
              </h3>
              <p className="text-[10px] text-red-500 uppercase tracking-[0.3em] font-black mt-1">
                ENGINE TUNING LAB
              </p>
            </div>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed max-w-sm font-medium">
            We re-engineer raw mechanical power. Tear it down, bore it out, change the parts of your motorcycle, and build the beast. Your engine, completely optimized.
          </p>

          {/* Socials */}
          <div className="flex gap-3 pt-2">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow STR Moto Garage on ${social.platform}`}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#0d0d0d] border border-zinc-800 text-zinc-500 hover:text-red-500 hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Newsletter */}
        <div className="space-y-4 lg:pt-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-3 bg-red-500 inline-block skew-x-12" />
            <h4 className="text-white text-xs font-black tracking-widest uppercase font-mono">
              GET INTEL
            </h4>
          </div>

          <p className="text-xs text-zinc-500 font-medium">
            Drop your email below to get notified on secret parts drops, dyno video leaks, and build breakdowns.
          </p>

          {isJoined ? (
            <div className="bg-red-500/5 border border-red-500/30 rounded-xl p-4 flex flex-col gap-1 font-mono text-xs tracking-wider">
              <div className="flex items-center justify-between text-red-500 font-black">
                <span>&gt; ACCESS GRANTED</span>
                <span className="text-[9px] bg-red-500 text-black px-1.5 py-0.5 rounded font-mono font-black animate-pulse">
                  SECURE
                </span>
              </div>
              <p className="text-zinc-500 text-[11px] font-medium mt-1">
                SUCCESSFUL JOIN // CREW LOGGED.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="relative flex items-center bg-[#0d0d0d] border border-zinc-800 rounded-xl p-1 focus-within:border-red-500/50 transition-all duration-300"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your @Email.com"
                className="bg-transparent text-white placeholder-zinc-700 text-xs font-mono font-bold tracking-wider w-full px-3 focus:outline-none uppercase"
              />
              <button
                type="submit"
                className="group bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-mono font-black text-xs uppercase tracking-widest px-5 py-2.5 rounded-lg active:scale-95 transition-all duration-300 shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] flex items-center gap-1.5"
              >
                <span>JOIN</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">➔</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom strip */}
      <div className="max-w-7xl mx-auto border-t border-zinc-900/60 mt-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-zinc-600 tracking-widest uppercase font-bold">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <p>&copy; {currentYear} STR MOTO GARAGE LABS</p>
          <span className="hidden sm:inline text-zinc-800">|</span>
          <p className="text-zinc-700 flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            SYS_ONLINE // DEFIANTLY BUILT
          </p>
        </div>
      </div>
    </footer>
  );
}