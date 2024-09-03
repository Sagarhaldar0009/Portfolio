// import React from 'react'
// import HeroSection from '../components/HeroSection.jsx'
// import About from '../components/About.jsx'
// import Experience  from '../components/Experience.jsx'
// import Skills from '../components/Skills.jsx'
// import Education  from '../components/Education.jsx'
// import ContactUs from '../components/ContactUs'
// import Projects from '../components/Projects.jsx'
// import NavBar from '../components/common/NavBar.jsx'
// import Footer from '../components/common/Footer.jsx'

// const MainPage = () => {
//   return (
//     <div>
//       <NavBar/>
//       <HeroSection/>
//       <About/>
//       <Experience/>
//       <Skills/>
//       <Projects/>
//       <Education/>
//       <ContactUs/>
//       <Footer/>
//     </div>
//   )
// }

// export default MainPage


import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import About from '../components/About.jsx'
import Experience from '../components/Experience.jsx'
import Skills from '../components/Skills.jsx'
import Education from '../components/Education.jsx'
import ContactUs from '../components/ContactUs'
import Projects from '../components/Projects.jsx'
import NavBar from '../components/common/NavBar.jsx'
import Footer from '../components/common/Footer.jsx'

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </div>
  )
}

export default MainPage
