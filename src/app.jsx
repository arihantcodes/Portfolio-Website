import { useState } from 'preact/hooks'
import './app.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Blog from './components/blog/Blog'
import Testimonials from './components/testimonials/Testimonials'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <main className='main'>
        { <Home/> }
         <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
      
        <Testimonials/>
        <Blog/>
        <Contact/>
      </main>
    </>
  )
}
