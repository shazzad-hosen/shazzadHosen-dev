import profile_image from "../assets/profile_image.jpeg";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-2xl">
        {/* Profile Image */}
        <div className="relative w-40 h-40 mx-auto mb-6 group">
          {/* Glow Background */}
          <div className="absolute inset-0 bg-linear-to-r from-primary to-accent rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-500" />

          {/* Image */}
          <img
            src={profile_image}
            alt="Shazzad Hosen"
            className="relative w-40 h-40 object-cover rounded-full border-4 border-white/10 transition-transform duration-500 group-hover:scale-105"
          />

          {/* Status Indicator Dot */}
          <span className="absolute bottom-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-darkBg shadow-lg" />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Shazzad Hosen</h1>

        {/* Description */}
        <p className="text-white/70 mb-8 text-lg">
          Full Stack Developer specializing in secure backend systems, scalable
          APIs, and clean architecture design.
        </p>

        {/* Status Text */}
        <p className="text-green-400 font-medium mb-8">🟢 Available for Work</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-lg bg-linear-to-r from-primary to-accent font-medium hover:opacity-90 transition"
          >
            Download Resume
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-white/20 hover:border-primary transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
