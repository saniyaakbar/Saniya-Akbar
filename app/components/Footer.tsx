export default function Footer() {
  return (
    <footer className="relative w-full bg-black pt-20 pb-12 text-center overflow-hidden">

      {/* glowing background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/20 to-black pointer-events-none"></div>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-emerald-600/20 blur-[140px] rounded-full pointer-events-none"></div>

      {/* CONTENT WRAPPER — CENTERED */}
      <div className="relative w-full max-w-4xl mx-auto px-6">

        {/* Logo */}
        <h2 className="text-4xl font-bold text-emerald-300 mb-3 tracking-wide">
          Saniya Akbar
        </h2>
        <p className="text-emerald-200/80 text-sm uppercase tracking-[0.25em] mb-10">
          Portfolio
        </p>

        {/* Navigation */}
        <nav className="flex justify-center flex-wrap gap-8 text-gray-300 text-sm mb-8">
          <a href="/" className="hover:text-emerald-300 transition">Home</a>
          <a href="/#journey" className="hover:text-emerald-300 transition">Journey</a>
          <a href="/skills" className="hover:text-emerald-300 transition">Skills</a>
          <a href="/projects" className="hover:text-emerald-300 transition">Projects</a>
          <a href="/contact" className="hover:text-emerald-300 transition">Contact</a>
        </nav>

        {/* Description */}
        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-10 leading-relaxed">
          Frontend Engineer • Product Thinker — crafting clean, meaningful digital experiences  
          by bridging engineering and product strategy.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-gray-400 text-xl mb-10">
          <a href="#" className="hover:text-emerald-300 transition"><i className="ri-linkedin-fill"></i></a>
          <a href="#" className="hover:text-emerald-300 transition"><i className="ri-github-fill"></i></a>
          <a href="#" className="hover:text-emerald-300 transition"><i className="ri-twitter-fill"></i></a>
          <a href="#" className="hover:text-emerald-300 transition"><i className="ri-mail-fill"></i></a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Saniya Akbar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
