import React from 'react'
import { FiMapPin, FiMail, FiPhone, FiCalendar, FiAward, FiCode } from 'react-icons/fi'
import fotoProfile from '../assets/ferdi.png'

const About = () => {
    // Data informasi personal
    const personalDetails = [
        {
            icon: <FiMapPin className="w-5 h-5" />,
            label: "Lokasi",
            value: "Blitar, Indonesia"
        },
        {
            icon: <FiMail className="w-5 h-5" />,
            label: "Email",
            value: "biantoroferdi@gmail.com"
        },
        {
            icon: <FiCalendar className="w-5 h-5" />,
            label: "Pengalaman",
            value: "3+ Tahun"
        }
    ]

    // Data keahlian utama
    const mainSkills = [
        "Full Stack Development",
        "React & Node.js",
        "UI/UX Design",
        "Mobile Development",
        "Database Management",
        "API Development"
    ]

    return (
        <section 
            id="about" 
            className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white"
            role="region"
            aria-label="Tentang Saya"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        Tentang Saya
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                        Mengenal lebih dekat tentang latar belakang, pengalaman, dan passion saya dalam dunia pengembangan web
                    </p>
                </div>

                {/* Main Content - Photo + Description Layout */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Foto Section - Akan muncul pertama di mobile */}
                        <div className="relative order-1 lg:order-1">
                            <div className="relative max-w-md mx-auto lg:mx-0">
                                {/* Background decorative elements */}
                                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl transform rotate-3"></div>
                                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-tr from-orange-100 to-pink-100 rounded-2xl transform -rotate-3"></div>
                                
                                {/* Main photo container */}
                                <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                                    <img 
                                        src={fotoProfile}
                                        alt="Foto profil Ferdi Biantoro"
                                        className="w-full h-auto object-cover rounded-xl"
                                        loading="lazy"
                                    />
                                    
                                    {/* Badge */}
                                    <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        <FiCode className="inline w-4 h-4 mr-1" />
                                        Developer
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description Section - Akan muncul kedua di mobile */}
                        <div className="order-2 lg:order-2 space-y-6">
                            {/* Nama dan Title */}
                            <div className="space-y-2">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                                    Ferdi Prayoga Biantoro
                                </h3>
                                {/* <p className="text-lg text-blue-600 font-semibold">
                                    Full Stack Developer & UI/UX Designer
                                </p> */}
                            </div>

                            {/* Deskripsi */}
                            <div className="space-y-4">
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Seorang pengembang web full-stack yang bersemangat dengan pengalaman dalam membangun aplikasi web yang responsif dan user-friendly. Saya senang belajar teknologi baru dan berbagi pengetahuan dengan komunitas.
                                </p>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Memiliki pengalaman dalam pengembangan aplikasi web menggunakan teknologi modern seperti React, Node.js, dan berbagai framework lainnya. Fokus pada penulisan kode yang bersih dan dapat dipertahankan.
                                </p>
                            </div>

                            {/* Personal Details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {personalDetails.map((detail, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg text-blue-600">
                                            {detail.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-500">{detail.label}</p>
                                            <p className="text-sm sm:text-base text-gray-800 font-medium">{detail.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Skills */}
                            {/* <div className="space-y-3">
                                <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                                    <FiAward className="w-5 h-5 mr-2 text-blue-600" />
                                    Keahlian Utama
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {mainSkills.map((skill, index) => (
                                        <span 
                                            key={index}
                                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div> */}

                            {/* CTA Button */}
                            <div className="pt-4">
                                <a 
                                    href="#contact"
                                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                >
                                    Mari Berkolaborasi
                                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
