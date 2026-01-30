import { useEffect, useState } from 'react'
import fotoProfile from '../assets/profile/ferdi.png'

// Komponen Hero untuk landing page
const Hero = () => {
  // State untuk efek typing
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const fullText = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Web Developer',
    'Mobile App Developer',
    // 'Software Engineer',
    'Frontend Developer',
    'Backend Developer'
  ]
  const [charIndex, setCharIndex] = useState(0)

  // Efek typing animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Mengetik
        if (charIndex < fullText[textIndex].length) {
          setText(prev => prev + fullText[textIndex][charIndex])
          setCharIndex(charIndex + 1)
        } else {
          // Mulai menghapus setelah delay
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        // Menghapus
        if (text.length > 0) {
          setText(prev => prev.slice(0, -1))
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % fullText.length) // Pindah ke teks berikutnya
          setCharIndex(0)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, textIndex, isDeleting, text.length, fullText])

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16 overflow-hidden"
      role="region"
      aria-label="Beranda"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 py-6 sm:py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 relative z-10">
        {/* Ilustrasi/Gambar - Akan muncul pertama di mobile */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="relative w-full max-w-[280px] sm:max-w-lg mx-auto">
            <div className="absolute top-0 -left-4 w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mix-blend-soft-light filter blur-2xl opacity-50 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-64 h-64 bg-gradient-to-bl from-indigo-100 to-indigo-200 rounded-full mix-blend-soft-light filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-64 h-64 bg-gradient-to-tr from-purple-100 to-purple-200 rounded-full mix-blend-soft-light filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
            <div className="relative">
              {/* Foto profil */}
              <div className="h-64 sm:h-80 md:h-full p-2 group cursor-pointer">
                <img
                  src={fotoProfile}
                  alt="Foto profil Ferdi Biantoro"
                  className="w-full h-full object-contain"
                  loading="eager"
                  title="Ferdi Biantoro - Full Stack Developer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Teks Content - Akan muncul kedua di mobile */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6 animate-fadeIn order-2 md:order-1">
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              Halo! <span className="inline-block animate-wave">👋</span>
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
              Saya <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-bold">Ferdi Prayoga Biantoro</span>
            </h1>
          </div>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">
            Seorang <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-semibold">{text}</span>
            <span className="animate-blink text-blue-600">|</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto md:mx-0 leading-relaxed">
            Membangun solusi digital yang inovatif dan berkualitas tinggi dengan fokus pada pengalaman pengguna yang luar biasa
          </p>
          {/* CTA Buttons */}
          {/* <div className="flex flex-row justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-6 w-full">
            <a
              href="#contact"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl transition-all duration-300 text-base font-semibold hover:from-blue-600 hover:to-purple-700 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-1 focus:ring-2 focus:ring-purple-400 focus:outline-none active:scale-95 flex items-center justify-center"
              aria-label="Hubungi saya untuk kolaborasi"
            >
              <span>Hubungi Saya</span>
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#projects"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-xl transition-all duration-300 text-base font-semibold hover:bg-purple-600 hover:text-white hover:shadow-2xl hover:shadow-purple-600/25 hover:-translate-y-1 focus:ring-2 focus:ring-purple-400 focus:outline-none active:scale-95 flex items-center justify-center bg-white/50 backdrop-blur-sm"
              aria-label="Lihat portfolio proyek saya"
            >
              <span>Lihat Portfolio</span>
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero