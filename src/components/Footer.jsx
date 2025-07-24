import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaCode, FaHeart } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        {name:'Certification', href:'#certification'},
        { name: 'Contact', href: '#contact' }
    ]

    const socialLinks = [
        {
            icon: <FaGithub size={20} />,
            href: 'https://github.com/ferdi166',
            label: 'GitHub',
            color: 'hover:text-gray-100'
        },
        {
            icon: <FaLinkedin size={20} />,
            href: 'https://linkedin.com/in/ferdi-prayoga-biantoro-4235782b7',
            label: 'LinkedIn',
            color: 'hover:text-blue-400'
        },
        {
            icon: <FaInstagram size={20} />,
            href: 'https://instagram.com/ferdi_biantoro',
            label: 'Instagram',
            color: 'hover:text-pink-400'
        },
        {
            icon: <FaEnvelope size={20} />,
            href: 'mailto:biantoroferdi@gmail.com',
            label: 'Email',
            color: 'hover:text-green-400'
        }
    ]

    return (
        <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                            Ferdi Prayoga Biantoro
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Full Stack Developer passionate about creating innovative web solutions and meaningful digital experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <nav className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <div className="space-y-2 text-sm text-gray-400">
                            <p>Blitar, Indonesia</p>
                            <a
                                href="mailto:biantoroferdi@gmail.com"
                                className="hover:text-white transition-colors duration-200"
                            >
                                biantoroferdi@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-6 mt-8">
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <p className="text-sm text-gray-400">
                            &copy; {currentYear} Ferdi Prayoga Biantoro. All rights reserved.
                        </p>

                        {/* Made with love */}
                        {/* <p className="text-sm text-gray-400 flex items-center gap-2">
                            Made with <FaHeart className="text-red-500 animate-pulse" /> and <FaCode className="text-blue-400" />
                        </p> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer