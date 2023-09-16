import { Route, Routes } from 'react-router-dom'
import Navbar from './components/common/navbar'
import PageNotFound from './routes/pageNotFound'
import { navLinks } from './helpers/navlinks'
import AnimatedWrapper from './components/common/animationWrapper'
import Home from './routes/home'
function App() {
  return (
    <>
      <Navbar links={navLinks} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<h1>search</h1>} />
        <Route path='/games' element={<h1>games</h1>} />
        <Route path='/contactus' element={<h1>contactus</h1>} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </>
  )
}

export default App
