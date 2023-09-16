import { Route, Routes } from 'react-router-dom'
import Navbar from './components/common/navbar'
import PageNotFound from './routes/pageNotFound'
import { navLinks } from './helpers/navlinks'
import Home from './routes/home'
import ShowData from './routes/showData'
import Games from './routes/games'
import Contact from './routes/contact'
function App() {
  return (
    <>
      <Navbar links={navLinks} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<ShowData />} />
        <Route path='/games' element={<Games />} />
        <Route path='/contactus' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </>
  )
}

export default App
