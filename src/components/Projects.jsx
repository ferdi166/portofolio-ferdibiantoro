import React from 'react'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'

// Import gambar proyek
import foodImg from '../assets/projects/food.PNG'
import kebunImg from '../assets/projects/kebun.jpg'
import realImg from '../assets/projects/real-estate.PNG'
import ppdbImg from '../assets/projects/ppdbmi.png'

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = React.useState(4)
    const projectsPerLoad = 4

    // Data proyek
    const projects = [
        {
            title: "Food Delivery",
            description: "Website food delivery dengan fitur keranjang belanja, pembayaran, dan admin dashboard. Dibangun menggunakan React, Node.js, dan MongoDB.",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            demoUrl: "#",
            githubUrl: "#",
            image: foodImg
        },
        {
            title: "Sistem Informasi PPDB MI Ulumul Fadhol",
            description: "Website Sistem Informasi Penerimaan Baru (PPDB) MI Ulumul Fadhol dengan fitur pendaftaran online, verifikasi berkas, dan pengumuman hasil seleksi. Dibangun menggunakan React, Node.js, dan MySQL.",
            tags: ["React", "Tailwind CSS", "Node.js", "MySQL", "Express"],
            demoUrl: "#",
            githubUrl: "https://github.com/ferdi166/ppdb-miulumulfadhol",
            image: ppdbImg
        },
        {
            title: "SMART Kebun IoT",
            description: "Desain Aplikasi untuk mengelola kebun sayuran dengan menggunakan IoT. Beberapa fitur diantaranya adalah monitoring tandon air, ph air, amonia air, mengisi tandon air, tombol siram kebun dll.",
            tags: ["Figma"],
            demoUrl: "https://www.figma.com/proto/jtWgQXlGe7zmz9v0zyNe87/SMART-Kebun?node-id=6-5&node-type=canvas&t=d9i7hFfvQfl9R0Uy-0&scaling=scale-down&content-scaling=fixed&page-id=6%3A3&starting-point-node-id=6%3A5",
            githubUrl: "#",
            image: kebunImg
        },
        {
            title: "Landing Page Real Estate",
            description: "Landing page untuk real estate dengan fitur pencarian properti, detail properti, dan formulir konsultasi.",
            tags: ["React", "Tailwind CSS"],
            demoUrl: "#",
            githubUrl: "https://github.com/ferdi166/real-estate",
            image: realImg
        },
    ]

    return (
        <section
            id="projects"
            className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50"
            role="region"
            aria-label="Proyek"
        >
            {/* Background Animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
                <div className="absolute bottom-1/4 left-16 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Proyek
                        </span> Terbaru
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                        Beberapa proyek yang telah saya kerjakan menggunakan berbagai teknologi modern
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            {/* Project Image */}
                            <div className="relative aspect-video overflow-hidden bg-gray-100">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <FiFolder className="w-16 h-16" />
                                    </div>
                                )}
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-900 transition-colors"
                                            aria-label={`Lihat kode sumber ${project.title} di GitHub`}
                                        >
                                            <FiGithub className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-900 transition-colors"
                                            aria-label={`Lihat demo ${project.title}`}
                                        >
                                            <FiExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleProjects < projects.length && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setVisibleProjects(prev => Math.min(prev + projectsPerLoad, projects.length))}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                        >
                            <span>Lihat Lebih Banyak</span>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects