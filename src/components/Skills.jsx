import React from 'react'
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiBootstrap,
    SiNodedotjs, SiExpress, SiMysql, SiPostgresql, SiPhp, SiLaravel,
    SiFigma, SiAdobexd, SiCanva, SiGit, SiDocker, SiPostman, SiFlutter
} from 'react-icons/si'
import { FaCode } from 'react-icons/fa'

const Skills = () => {
    // Data skills dengan kategori dan ikon
    const skillCategories = [
        {
            title: "Frontend Development",
            description: "Teknologi untuk membangun antarmuka pengguna yang responsif dan interaktif",
            skills: [
                { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" />, description: "Struktur dan konten website" },
                { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" />, description: "Styling dan animasi" },
                { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, description: "Interaktivitas dan logika" },
                { name: "React", icon: <SiReact className="text-[#61DAFB]" />, description: "Library UI yang powerful" },
                { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" />, description: "Framework CSS utility-first" },
                { name: "Bootstrap", icon: <SiBootstrap className="text-[#777BB4]" />, description: "Framework CSS responsive" },
                { name: "Flutter", icon: <SiFlutter className="text-[#06B6D4]" />, description: "Framework mobile" }
            ]
        },
        {
            title: "Backend Development",
            description: "Teknologi server-side untuk mengelola data dan logika bisnis",
            skills: [
                { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, description: "Runtime JavaScript" },
                { name: "Express", icon: <SiExpress className="text-[#000000]" />, description: "Framework web Node.js" },
                { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, description: "Database SQL" },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, description: "Database SQL advanced" },                
                { name: "PHP", icon: <SiPhp className="text-[#777BB4]" />, description: "Bahasa server-side" },
                { name: "Laravel", icon: <SiLaravel className="text-[#f54242]" />, description: "Framework PHP" }
            ]
        },
        {
            title: "Design Tools",
            description: "Tools untuk merancang UI/UX yang menarik dan user-friendly",
            skills: [
                { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" />, description: "Design & prototyping" },
                { name: "Adobe XD", icon: <SiAdobexd className="text-[#FF61F6]" />, description: "UI/UX design" },
                { name: "Canva", icon: <SiCanva className="text-[#00C4CC]" />, description: "Desain grafis" }
            ]
        },
        {
            title: "Development Tools",
            description: "Tools pendukung untuk pengembangan dan deployment",
            skills: [
                { name: "Git", icon: <SiGit className="text-[#F05032]" />, description: "Version control" },
                // { name: "Docker", icon: <SiDocker className="text-[#2496ED]" />, description: "Containerization" },
                { name: "VsCode", icon: <FaCode className="text-[#007ACC]" />, description: "Code editor & IDE" },
                { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" />, description: "API testing" }
            ]
        }
    ]

    return (
        <section 
            id="skills" 
            className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white"
            role="region"
            aria-label="Keahlian"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        Keahlian Teknis
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                        Tools dan teknologi yang saya gunakan dalam pengembangan web
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <div 
                            key={index}
                            className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl transition-all duration-300 border border-gray-200"
                        >
                            <div className="mb-6">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                                    {category.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    {category.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div 
                                        key={skillIndex} 
                                        className="group relative"
                                    >
                                        <div 
                                            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                                            title={`${skill.name} - ${skill.description}`}
                                        >
                                            <div className="text-2xl sm:text-3xl lg:text-4xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                                                {skill.icon}
                                            </div>
                                            <span className="text-xs text-gray-600 text-center font-medium">
                                                {skill.name}
                                            </span>
                                        </div>
                                        
                                        {/* Tooltip */}
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full w-32 bg-gray-800 text-white text-xs rounded-md py-1 px-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-center z-10 pointer-events-none">
                                            {skill.description}
                                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-800"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills