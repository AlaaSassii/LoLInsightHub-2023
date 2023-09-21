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
import SingleChampionData from './routes/singleChampionData'
import SpiderChart from './components/common/spiderChart'
function App() {
  const data = [3, 2, 4, 5, 3];
  const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'];
  return (
    <div className="App">
      <h1>Spider Chart Example</h1>
      <SpiderChart data={data} labels={labels} maxScale={5} />
    </div>
  );
}

export default App
