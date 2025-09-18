import React from 'react'
import { FaCertificate, FaAward, FaGraduationCap, FaCode } from 'react-icons/fa'

// Import gambar sertifikat
import jpCert from '../assets/certificates/sertifikat-junior-programming.jpeg'
import dasarProgCert from '../assets/certificates/dasarprog.png'
import dasarJsCert from '../assets/certificates/dasarjs.png'
import frontendCert from '../assets/certificates/frontendpemula.png'
import sqlCert from '../assets/certificates/sqldicoding.png'

const Certification = () => {
    // Data sertifikat - bisa disesuaikan dengan sertifikat yang dimiliki
    const certifications = [
        {
            title: 'Junior Programming',
            issuer: 'LSP TIK Indonesia',
            date: '2024',
            icon: <FaCode className="w-8 h-8" />,
            color: 'from-blue-500 to-cyan-500',
            description: 'Sertifikasi pengembangan aplikasi React modern',
            image: jpCert,            
        },
        {
            title: 'Belajar Dasar Pemrograman',
            issuer: 'Dicoding Indonesia',
            date: '2023',
            icon: <FaCertificate className="w-8 h-8" />,
            color: 'from-yellow-500 to-orange-500',
            description: 'Sertifikasi Belajar Dasar Pemrograman',
            image: dasarProgCert,
            link: 'https://www.dicoding.com/certificates/4EXGKO33EZRL'
        },
        {
            title: 'Belajar Dasar Pemrograman JavaScript',
            issuer: 'Dicoding Indonesia',
            date: '2023',
            icon: <FaGraduationCap className="w-8 h-8" />,
            color: 'from-green-500 to-emerald-500',
            description: 'Sertifikasi Belajar Dasar Pemrograman JavaScript',
            image: dasarJsCert,
            link: 'https://www.dicoding.com/certificates/07Z6041EYZQR'
        },
        {
            title: 'Belajar Membuat Front-End Web untuk Pemula',
            issuer: 'Dicoding Indonesia',
            date: '2022',
            icon: <FaAward className="w-8 h-8" />,
            color: 'from-purple-500 to-pink-500',
            description: 'Sertifikasi Belajar Membuat Front-End Web untuk Pemula',
            image: frontendCert,
            link: 'https://www.dicoding.com/certificates/GRX5O4613P0M'
        },
        {
            title: 'Belajar Dasar Structured Query Language (SQL)',
            issuer: 'Dicoding Indonesia',
            date: '2024',
            icon: <FaAward className="w-8 h-8" />,
            color: 'from-purple-500 to-pink-500',
            description: 'Sertifikasi Belajar Dasar Structured Query Language (SQL)',
            image: sqlCert,
            link: 'https://www.dicoding.com/certificates/98XWLQ75WZM3'
        }
    ]

    return (
        <section
            id="certification"
            className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
            role="region"
            aria-label="Sertifikasi"
        >
            {/* Background Animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-32 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Sertifikasi
                        </span> & Pencapaian
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
                        Koleksi sertifikat dan pencapaian yang menunjukkan komitmen saya dalam pengembangan profesional
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="group relative bg-white backdrop-blur-xl rounded-2xl border-2 border-gray-100 hover:border-gray-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                            
                            {/* Certificate Image */}
                            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                                <img 
                                    src={cert.image} 
                                    alt={`Sertifikat ${cert.title}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        // Fallback jika gambar tidak ditemukan
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback placeholder jika gambar tidak ada */}
                                <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                                    <div className={`p-6 bg-gradient-to-br ${cert.color} rounded-xl text-white`}>
                                        {cert.icon}
                                    </div>
                                </div>
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-6">                                
                                {/* Certificate Info */}
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                                        {cert.title}
                                    </h3>
                                    <p className="text-base font-semibold text-gray-600">
                                        {cert.issuer}
                                    </p>
                                    {/* <p className="text-gray-600 text-sm leading-relaxed">
                                        {cert.description}
                                    </p> */}
                                </div>

                                {/* Verification Badge */}
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-xs text-green-600 font-medium">Terverifikasi</span>
                                    </div>
                                    {/* View Certificate Button */}
                                    <button onClick={() => window.open(cert.link, '_blank')} className="text-xs text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors duration-200 cursor-pointer">
                                        Lihat Sertifikat
                                    </button>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                <FaCertificate className="w-8 h-8 text-gray-400" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certification