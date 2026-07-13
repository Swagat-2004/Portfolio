function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <h1 className="text-5xl font-bold text-white mb-4">
        Hi, I'm Swagat 👋
      </h1>
      <p className="text-xl text-gray-400 max-w-xl mb-8">
        Full Stack Developer (MERN) | Building web apps and exploring cloud technologies
      </p>
      <div className="flex gap-4">
        
        <a  href="/resume.pdf"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Download Resume
        </a>
        
        <a  href="#contact"
          className="border border-gray-500 hover:border-white text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Hero