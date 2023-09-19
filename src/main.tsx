import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'
import './sass/main.scss'
import store from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
// const dispatch = useAppDispatch();
// const { data, loading, error } = useAppSelector(state => state.singleChampion);
// useEffect(() => {
//   const argument = {
//       version: '13.18.1',
//       region: 'en_US',
//       name: 'Aatrox'

//   }
//   fetchChampionData(argument)
// }, [])