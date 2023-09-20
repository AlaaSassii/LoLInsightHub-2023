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
import Slider from './components/common/slider'
function App() {
  const images = [
    'https://assets.codepen.io/1462889/sl1.jpg',
    'https://assets.codepen.io/1462889/sl2.jpg',
    'https://assets.codepen.io/1462889/sl3.jpg',
    'https://assets.codepen.io/1462889/sl4.jpg',
  ];

  const titles = [
    'MALE GOOFY FACE',
    'TOY PIG',
    'SHY PORTRAIT',
    'SKATEBOARD FACE',
  ];

  return (
    <div className="App">
      <Slider images={images} titles={titles} />
    </div>
  );
}

export default App
