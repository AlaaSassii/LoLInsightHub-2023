import Home from './routes/home'
import Games from './routes/games'
import Contact from './routes/contact'
import ShowData from './routes/showData'
import MatchHistory from './routes/matchHistoryData'
import ChampionsData from './routes/championsData'
import PageNotFound from './routes/pageNotFound'
import Navbar from './components/common/navbar'
import { links } from './enums/routes/links'
import { navLinks } from './helpers/navbar/navlinks'
import { Route, Routes } from 'react-router-dom'
import SingleChampionData from './routes/singleChampionData'
function App() {
  return (
    <>
      <Navbar links={navLinks} />
      <Routes>
        <Route path={links.HOME} element={<Home />} />
        <Route path={links.SEARCH} element={<ShowData />} />
        <Route path={links.GAMES} element={<Games />} />
        <Route path={links.CONTACT} element={<Contact />} />
        <Route path={links.MATCHHISTORY} element={<MatchHistory />} />
        <Route path={links.CHAMPIONS} element={<ChampionsData />} />
        <Route path={`${links.CHAMPIONS}/:name`} element={<SingleChampionData />} />
        <Route path={links.PAGENOTFOUND} element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App
