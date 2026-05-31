import React from 'react'
import { motion } from 'framer-motion'
import { Server, Code, Laptop, Download, Cpu } from 'lucide-react'
import profileImage from '../assets/b2.jpg'
import Button from '../components/Button.jsx'

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    return (
        <div className='min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>

            {/* Background Decoration */}

            <div className='absolute top-1/4 right-0 w-96 bg-cyan-600/10 rounded-full blur-[100px] -z-10' />

            <div className='absolute bottom-1/4 left-0 w-72 bg-purple-600/10 rounded-full blur-[80px] -z-10' />

            <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>

                {/* Left: Image / Visual */}

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className='relative lg:sticky lg:top-24'
                >

                    <div className='relative z-10 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm aspect-[4/5] shadow-2xl'>
                        <img src={profileImage} alt="Ajima Fabian" className='w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500' />

                        <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent'>

                        <div className='bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 shadow-lg'>

                        <p className='text-slate-400 text-xs font-mono mb-1'>SYSTEM STATUS</p>

                        <p className='text-green-400 flex font-semibold items-center gap-2 text-sm'>
                            <span className='relative flex h-2 w-2'>
                                <span className='animate-ping absolute inline-flex  h-full w-full bg-green-400 opacity-75'></span>
                                <span className='relative inline-flex rounded-full w-full h-full bg-green-500'></span>
                            </span>
                            Building Cloud & Backend Systems
                        </p>

                        </div>

                        </div>

                    </div>

                    <div className='absolute -bottom-6 -left-6 w-full border border-slate-800/50 rounded-2xl -z-10 bg-slate-900/30 backdrop-blur-sm'/>

                </motion.div>

                {/* Right: Content */}

                <motion.div
                    initial="hidden"
                    variants={containerVariants}
                    animate="visible"
                    className='space-y-10'
                >

                    {/* Header Section */}

                    <motion.div variants={itemVariants}>
                        <h2 className='text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3 flex items-center gap-2'>
                            <span className='w-8 h-[1px] bg-cyan-400'></span>
                            whoami
                        </h2>
                        <h1 className='text-4xl font-bold text-slate-100 mb-6 leading-tight lg:text-5xl'>
                            Building Software <br /> <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>Systems & Infrastructure</span>
                        </h1>

                        <div className='space-y-4 text-slate-400 text-lg leading-relaxed'>
                            <p>
                                I'm a <strong>Software Engineer</strong> passionate about building reliable applications and understanding the infrastructure that powers them.
                            </p>
                            <p>
                                My journey started with web development using <strong>Javascript, TypeScript, React and Python</strong> but quickly expanded into Linux systems, networking, Docker, cloud-native technologies and backend architecture.
                            </p>
                            <p>
                                I enjoy exploring how software interacts with operating systtems, networks, containers and distributed environments. My goal is to build systems that are scalable, secure and maintainable.
                            </p>
                        </div>
                    </motion.div>

                    {/* Core Skills Grid */}

                    <motion.div variants={itemVariants} className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div className='p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-colors group'>
                            <Server className='text-3xl text-purple-500 mb-3 group-hover:scale-110 transition-transform'/>
                            <h3 className='text-slate-200 font-bold mb-1'>Linux & Infrastructure</h3>
                            <p className='text-sm text-slate-500'>
                                Linux, Shell, System Administration
                            </p>
                            <p className='text-xs text-slate-600 mt-2 font-mono'>
                                Terminal Driven Workflow
                            </p>
                        </div>
                        <div className='p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-pink-500/30 transition-colors group'>
                            <Code className='text-3xl text-pink-500 mb-3 group-hover:scale-110 transition-transform'/>
                            <h3 className='text-slate-200 font-bold mb-1'>Software Engineering</h3>
                            <p className='text-sm text-slate-500'>React, TypeScript, Python & Go</p>
                            <p className='text-xs text-slate-600 mt-2 font-mono'>Building Modern Applications</p>
                        </div>

                        <div className='p-5 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-blue-500/30 transition-colors group'>
                            <Laptop className='text-3xl text-blue-500 mb-3 group-hover:scale-110 transition-transform'/>

                            <h3 className='text-slate-200 font-bold mb-1'>Networking & Security</h3>
                            <p className='text-sm text-slate-500'>Model, Security Concepts</p>
                            <p className='text-xs text-slate-600 mt-2 font-mono'>Systems Communication</p>
                        </div>

                        <div className='p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-orange-500/30 transition-colors group'>
                            <Laptop className='text-3xl text-orange-500 mb-3 group-hover:scale-110 transition-transform'/>
                            <h3 className='text-slate-200 font-bold mb-1'>Cloud-Native Learning</h3>
                            <p className='text-sm text-slate-500'>Docker, Microservices & DevOps</p>
                            <p className='text-xs text-slate-600 mt-2 font-mono'>Continuous Learning</p>
                        </div>
                    </motion.div>

                    {/* Core Value */}


                    <motion.div variants={itemVariants} className='bg-slate-900/30 border border-slate-800 rounded-xl p-6 relative'>
                        <div className='absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to to-blue-600 rounded-l-lg'/>

                        <h3 className='text-xl font-bold text-slate-200 mb-3'>
                            Engineering Principles
                        </h3>

                        <ul className='space-y-2 text-slate-400 text-sm sm:text-base'>
                            <li className='flex
                             gap-3'><span className='text-cyan-500'>⊳</span>Strong understanding of software engineering fundamentals and systems design.</li>
                            <li className='flex gap-3'><span className='text-cyan-500'>⊳</span>Passion for Linux, networking and infrastructure technologies.</li>
                            <li className='flex gap-3'><span className='text-cyan-500'>⊳</span>Commitment to writing maintainable, scalable</li>
                            <li className='flex gap-3'><span className='text-cyan-500'>⊳</span>Focus on perfomance, reliability and developer experience.</li>
                        </ul>
                    </motion.div>


                    {/* Actions */}

                    <motion.div variants={itemVariants} className='flex flex-wrap gap-4 pt-4'>

                        <Button to={"/contact"} variant='primary'>Let's Connect</Button>

                        <Button href={"/resume.pdf"} variant='outline' download="Resume.pdf" className='gap-2 group'>
                            <Download className='group-hover:translate-y-0.5 transition-transform'/>
                            Download CV
                        </Button>

                    </motion.div>

                </motion.div>
            </div>

        </div>
    )
}

export default About