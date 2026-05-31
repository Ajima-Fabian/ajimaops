import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Notfound from './pages/Notfound.jsx'
import Footer from './components/Footer.jsx'

const App = () => {

  return (
   <div className='flex flex-col min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950'>

    <Navbar />

    <main className='flex-grow pt-6'>
       <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/skills' element={<Skills />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='*' element={<Notfound />}/>
    </Routes>
    </main>

    <Footer />

   </div>
  )
}

export default App