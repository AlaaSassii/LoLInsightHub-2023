import Home from './routes/home'
import Games from './routes/games'
import Contact from './routes/contact'
import ShowData from './routes/showData'
import MatchHistoryData from './routes/matchHistoryData'
import ChampionsData from './routes/championsData'
import PageNotFound from './routes/pageNotFound'
import Navbar from './components/common/navbar'
import { links } from './enums/routes/links'
import { navLinks } from './helpers/navbar/navlinks'
import { Route, Routes } from 'react-router-dom'
import SearchInput from './components/common/searchInput'

function App() {

  return (
    <>
      <Navbar links={navLinks} />
      <Routes>
        <Route path={links.HOME} element={<Home />} />
        <Route path={links.SEARCH} element={<ShowData />} />
        <Route path={links.GAMES} element={<Games />} />
        <Route path={links.CONTACT} element={<Contact />} />
        <Route path={links.MATCHHISTORY} element={<MatchHistoryData />} />
        <Route path={links.CHAMPIONS} element={<ChampionsData />} />
        <Route path={links.PAGENOTFOUND} element={<PageNotFound />} />
      </Routes>
      < SearchInput
        handleSearchFunction={() => alert('')}
        placeholder='placeholder' />
    </>
  )
}

export default App
