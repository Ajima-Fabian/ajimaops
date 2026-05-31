import { useState, useEffect } from "react";
import {Menu, X} from 'lucide-react'
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    const navLinks = [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"},
        {name: "Skills", path: "/skills"},
        {name: "Projects", path: "/projects"},
        {name: "Contact", path: "/contact"}
    ]

    const isActive = (path) => location.pathname === path

    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY > 20){
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-lg' : 'bg-transparent border-b border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to={"/"} className=" flex items-center gap-2">
                        <div className="text-slate-100 border border-blue-400 py-1 px-2 font-bold tracking-wides rounded-md text-sm">
                            AjimaOps
                        </div>
                    </Link>


                    {/* Desktop Menu */}

                    <div className="hidden md:block">
                        <ul className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${isActive(link.path) ? 'text-blue-400' : 'text-slate-400 hover:text-slate-100'}`}>
                                    {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Mobile Menu Button */}


                    <div className="md:hidden">
                            <button onClick={() =>setIsOpen(!isOpen) }>
                                {isOpen ? <X size={25} className="text-slate-100"/> : <Menu size={25} className="text-slate-100"/>}
                            </button>
                    </div>
                </div>
            </div>


            {/* Mobile Menu Dropdown */}


            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-900 border-b border-slate-900 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="px-4 pt-2 pb-4 space-y-2">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link 
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive(link.path) ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'}`}
                                >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar