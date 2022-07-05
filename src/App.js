import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Projects from './components/Projects'
import Techstack from './components/Techstack'
function App() {
  return (
    <div>
      <Header />
      <About />
      <h1
        style={{
          textAlign: 'center',
          padding: '10px',
          fontWeight: 'bold',
          background: 'lightgray',
          color: 'white',
        }}
      >
        My Projects
      </h1>
      <Projects />
      <h1
        style={{
          textAlign: 'center',
          padding: '10px',
          fontWeight: 'bold',
          background: 'lightgray',
          color: 'white',
        }}
      >
        Tech Skills
      </h1>
      <Techstack />
      <h1
        style={{
          textAlign: 'center',
          padding: '10px',
          fontWeight: 'bold',
          background: 'lightgray',
          color: 'white',
        }}
      >
        Contact Me
      </h1>
      <Contact/>
    </div>
  )
}

export default App
