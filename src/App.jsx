/* import { useReducer } from "react" */
import Forecast from "./components/Forecast"
import Search from "./components/Search"
import { reducer } from "./reducer";
import { useEffect } from "react";
import { getCities, getCityForecast } from "./services/api";
import { AppProvider } from "./components/contexts/context";


function App() {
  return (
    <div className="app">
      <h1>Meteorologia em Portugal</h1>
      <AppProvider>
        <Search />
        <Forecast />
      </AppProvider>

    </div>
  )
}

export default App
