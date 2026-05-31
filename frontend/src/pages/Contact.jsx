import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, MessageCircle, MessageSquare, Send } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"
import Button from "../components/Button"

const Contact = () => {

  const [state, handleSubmit] = useForm("svjankba")
  const inputStyles = "w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"

  if (state.succeeded) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center max-w-md"
        >
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="text-green-500 text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-slate-100 mb-2">
            Message Sent!
          </h2>
          <p className="text-slate-400 mb-6">
            Thanks for reaching out. I'll get back to as soon as possible
          </p>
          <Button to={"/"} variant="primary">
            Back to Home
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className='min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      <div className='absolute bottom-0 left-0 w-96 bg-blue-900/10 rounded-full blur-[120px] -z-10' />

      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24'>

        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl text-slate-100 font-bold mb-6 md:text-5xl">
            Let's build something <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Extraordinary</span>
          </h1>
          <p className="text-slate-400 text-lg mb-12">
            Whether you have a question, a project proposal, or just want to discuss the latest in tech, my inbox is always open.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="text-blue-400 p-3 bg-blue-500/10 rounded-lg">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-slate-200 font-semibold text-lg">Email</h3>
                <a href="*" className="text-slate-400 hover:text-blue-400 transition-colors">codewithajima@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-purple-400 rounded-lg bg-purple-500/10 p-3">
                <Linkedin size={24} />
              </div>
              <div>
                <h3 className="text-slate-200 text-lg font-semibold">
                  Linkedin
                </h3>
                <a href="*" rel="noreferrer" target="blank" className="text-slate-400 hover:text-purple-400">
                  Connect on Linkedin
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">

              <div className="text-white p-3 bg-slate-800 rounded-lg">
                <Github size={24} />
              </div>
              <div>
                <h3 className="text-slate-200 font-semibold  text-lg">
                  Github
                </h3>
                <a href="*" target="blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  Check my Repositories
                </a>
              </div>

            </div>
            <div className="flex items-start gap-4">

              <div className="text-green-300 p-3 bg-green-800/10 rounded-lg">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="text-slate-200 font-semibold  text-lg">
                  WhatsApp
                </h3>
                <a href="*" target="blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  Message me on WhatsApp
                </a>
              </div>

            </div>

            <div className="flex items-start gap-4">
              <div className="text-green-400 p-3 bg-green-500/10 rounded-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-slate-200 text-lg font-semibold">
                  Enugu, Nigeria
                </h3>
                <p className="text-slate-400">
                  Available for remote work
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-900 border border-slate-800 p-8 shadow-xl rounded-2xl"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className={inputStyles}
                  placeholder="Mike Tyson"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                  Email
                </label>
                <input type="email"
                  name="email"
                  id="email"
                  required
                  className={inputStyles}
                  placeholder="miketyson@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className={inputStyles}
                placeholder="Project Discussion"
              />
              <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-xs mt-1" />
            </div>

            <div>
              <label htmlFor="Message" className="block  text-sm font-medium text-slate-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                className={`resize-none ${inputStyles}`}
                placeholder="Tell me about your project..."
              />
              <ValidationError prefix="Message" errors={state.errors} className="text-red-500 text-xs mt-1" />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </Button>

          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact