import { Route, Routes } from 'react-router-dom'
import Navbar from './components/common/navbar'
import PageNotFound from './routes/pageNotFound'
import { navLinks } from './helpers/navlinks'
import Home from './routes/home'
import ShowData from './routes/showData'
import Games from './routes/games'
import Contact from './routes/contact'
import { links } from './enums/links'
function App() {
  return (
    <>
      <Navbar links={navLinks} />
      <Routes>
        <Route path={links.HOME} element={<Home />} />
        <Route path={links.SEARCH} element={<ShowData />} />
        <Route path={links.GAMES} element={<Games />} />
        <Route path={links.CONTACT} element={<Contact />} />
        <Route path={links.PAGENOTFOUND} element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
