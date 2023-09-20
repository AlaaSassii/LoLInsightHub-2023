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
  const spiderChartData = [55, 48, 43, 39, 18, 15, 5];
  const spiderChartCategories = ["Time", "Cost Saving", "Productivity", "Reduction in Errors", "ROI", "Revenue Increase", "Payback Period"];

  return (
    <div>
      <h1>Spider Chart Example</h1>
      <SpiderChart data={spiderChartData} categories={spiderChartCategories} />
    </div>
  );
}

export default App
