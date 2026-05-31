import { motion } from 'framer-motion'
import { skillsData } from '../data/skills.jsx'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggeeChildren: 0.15
      }
    }
  }

  const itemsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }
  return (
    <div className='min-h-screen pt-20 pb-16 sm:px-6 lg:px-8 relative overflow-hidden'>

      {/* Background Decoration */}

      <div className='absolute top-20 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] -z-10' />

      <div className='absolute top-20 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] -z-10' />

      <div className='max-w-7xl mx-auto'>

        {/* Page Header */}

        <div className='text-center mb-16'>
          <h2 className='text-white font-mono text-sm tracking-widest uppercase mb-3'>
            System Capabilities
          </h2>
          <h1 className='text-4xl md:text-5xl font-bold text-slate-100'>
            Technical <span className='bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent'>Arsenal</span>
          </h1>
          <p className='mt-5 text-slate-400 max-w-2xl mx-auto'>
            A continously evolving stack spanning fullstack engineering, backend architecture, infrastructure, networking and modern deployment workflows.
          </p>
        </div>

        {/* Currently Exploring */}

        <div className='mb-2 flex flex-wrap justify-center gap-3'>
          {
            [
              "Kubernetes",
              "Go",
              "Rust",
              "Networking",
              "System Design",
              "Security"
            ].map((item) => (
              <span key={item} className='text-blue-300 px-4 py-2 rounded-full border border-blue-500/20 text-sm bg-blue-500/5 font-mono backdrop-blur-sm'>
                Exploring: {item}
              </span>
            ))
          }
        </div>

        {/* Skills Grid */}

        <motion.div 
          initial="hidden"
          variants={containerVariants}
          animate="visible"
          className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 p-4'
        >
            {
              skillsData.map((category) => (
                <motion.div 
                  key={category.id}
                  variants={itemsVariants}
                  whileHover={{y: -5}}
                  className='group relative overflow-hidden bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300'
                  >
                    {/* Animated Top Border */}
                    <div className='absolute'/>

                    {/* Decorative Glow */}
                    <div className='absolute'/>

                    {/* Card Header */}

                    <div className='flex items-start justify-between mb-6 relative z-10'>
                      <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-xl bg-slate-800 text-blue-400 group hover:to-blue-500/10 group-hover:text-blue-300  transition-all duration-300 border border-slate-700/50'>
                          {category.icon}
                        </div>

                        <div>
                          <h3 className='text-xl font-semibold text-slate-100'>
                            {category.category}
                          </h3>
                          <p className='text-sm text-slate-500 mt-1'>
                            {category.description}
                          </p>
                          <div className='text-xs text-slate-600 font-mono mt-3 uppercase tracking-wider'>
                            {category.skills.length} Technology
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}

                    <div className='space-y-4'>
                      {
                        category.skills.map((skill, index) => (
                          <div key={index} className='flex items-center justify-between p-3 rounded-lg bg-slate-950/50 border border-slate-800/50 hover:border-slate-700 transition-colors'>
                              <div className='flex items-center gap-3'>
                                  <span className='text-xl'>{skill.icon}</span>
                                  <span className='text-slate-300 font-medium text-sm'>{skill.name}</span>
                              </div>

                              {/* Proficiency Badge or Status Indicator */}
                              <div>
                                <span className={`text-xs font-mono px-2 p-1 rounded-full ${skill.level === "Advanced" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" : skill.level === "Intermediate" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-slate-700/30 text-slate-400 border border-slate-700"}`}>
                                  {skill.level}
                                </span>
                              </div>
                          </div>
                        ))
                      }
                    </div>

                    {/* Decorative Corner */}

                    <div className='absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity'>
                      <div className='w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] text-white'/>
                    </div>
                </motion.div>
              ))
            }
        </motion.div>
      </div>
    </div>
  )
}

export default Skills