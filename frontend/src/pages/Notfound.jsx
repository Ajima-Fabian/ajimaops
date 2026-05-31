import React from 'react'
import { motion } from 'framer-motion'
import { TriangleAlert } from 'lucide-react'
import Button from '../components/Button'

const Notfound = () => {
  return (
    <div className='min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden px-4'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600 rounded-full blur-[1000px] -z-10'/>
        <div className='text-center max-w-lg mx-auto'>
          <motion.div
            initial={{opacity:0, scale: 0.8}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
            className='inline-block p-4 rounded-full bg-slate-900 border border-slate-800 mb-6'
          >
            <TriangleAlert className='text-4xl text-red-500'/>
          </motion.div>

          <motion.h1
            initial={{opacity:0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
            className='text-6xl font-mono font-bold text-slate-100 mb-4 md:text-8xl'
          >
            404
          </motion.h1>

          <motion.p
            initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{delay: 0.4}}
            className='text-xl text-slate-400 font-mono mb-8'
          >
            Error: Page Not Found
          </motion.p>

          <motion.p
            initial={{opacity:0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5}}
            className=' text-slate-500 mb-8'
          >
            The page you are looking for might have been removed, had it's name changed or temporaly unavailable.
          </motion.p>

          <motion.div
             initial={{opacity:0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6}}
          >
            <Button to={"/"} variant='primary'>
              Return to System Home
            </Button>
          </motion.div>
        </div>
    </div>
  )
}

export default Notfound