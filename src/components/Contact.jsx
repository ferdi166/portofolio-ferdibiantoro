import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Contact = () => {
    const socialLinks = [
        {
            icon: <FaGithub className="w-8 h-8" />,
            href: 'https://github.com/ferdi166',
            label: 'GitHub',
            color: 'from-gray-700 to-gray-900',
            description: 'Lihat projek-projek saya'
        },
        {
            icon: <FaLinkedin className="w-8 h-8" />,
            href: 'https://linkedin.com/in/ferdi-prayoga-biantoro-4235782b7',
            label: 'LinkedIn',
            color: 'from-blue-600 to-blue-800',
            description: 'Mari terhubung secara profesional'
        },
        {
            icon: <FaInstagram className="w-8 h-8" />,
            href: 'https://instagram.com/ferdi_biantoro',
            label: 'Instagram',
            color: 'from-pink-500 to-purple-600',
            description: 'Ikuti keseharian saya'
        }
    ]

    return (
        <section
            id="contact"
            className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50"
            role="region"
            aria-label="Kontak"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-40 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
                        Mari <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Terhubung</span>
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-12">
                        Temukan saya di platform media sosial berikut
                    </p>
                </div>

                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-white backdrop-blur-xl p-8 rounded-2xl border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                                <div className={`p-4 bg-gradient-to-br ${social.color} rounded-xl text-white border border-transparent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                    {social.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{social.label}</h3>
                                    <p className="text-gray-600">{social.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact