import { Facebook, Github, Heart, Instagram, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const quickLinkStyles = "text-slate-400 hover:text-blue-400 transition-colors"

    const socialLinkStyles = "text-slate-400 hover:text-blue-500 transition-colors text-xl"

    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-8 mt-7">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">


                    {/* Brand Column */}

                    <div className="col-span-1 md:col-span-2">
                        <Link to={"/"} className="text-2xl font-bold text-slate-100 font-mono">
                            Ajima
                            <span className="text-blue-500">Ops</span>
                        </Link>
                        <p className="mt-4 max-w-sm text-slate-400">
                            Buildig reliable software systems with a focus on Linux, Networking, Backend Engineering, Cloud-Native Technologies and scalable infrastructure.
                        </p>
                    </div>

                    {/* Quick Links */}

                    <div>
                        <h3 className="text-slate-200 font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to={"/about"} className={quickLinkStyles}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to={"/projects"} className={quickLinkStyles}>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to={"/skills"} className={quickLinkStyles}>
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link to={"/contact"} className={quickLinkStyles}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}

                    <div className="flex flex-col gap-1">
                        <h3 className="text-slate-200 font-semibold mb-4">
                            Network
                        </h3>
                        <a href="*" target="blank" className={socialLinkStyles}>
                            <Github />
                        </a>
                        <a href="*" target="blank" className={socialLinkStyles}>
                            <Linkedin />
                        </a>
                        <a href="*" target="blank" className={socialLinkStyles}>
                            <Facebook />
                        </a>
                        <a href="*" target="blank" className={socialLinkStyles}>
                            <Instagram />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}

                <div className="border-t border-slate-900 pt-8 flex flex-col items-center justify-between gap-4">
                    <p className="text-slate-500 text-sm">
                        &copy; {currentYear} Ajima Fabian. All rights reserved.
                    </p>
                    <p className="text-slate-600 flex items-center gap-1 text-sm">
                        <Heart />
                        By Ajima Fabian
                    </p>
                </div>
            </div>
        </footer>
    )
}


export default Footer
