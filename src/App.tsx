import {useState} from "react";
import MixList from "./components/MixList/MixList.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import MonsterTracker from "./components/MonsterTracker/MonsterTracker.tsx";
import AlBhedPrimers from "./components/AlBhedPrimers/AlBhedPrimers";

function App() {
  const [currentApp, setCurrentApp] = useState<string>('mix-list');

  return (
    <div>
      <NavBar currentApp={currentApp} setCurrentApp={setCurrentApp} />
      <div id="main-app-container">
        {currentApp === 'mix-list' && <MixList />}
        {currentApp === "monster-tracker" && <MonsterTracker />}
        {currentApp === "al-bhed-primers" && <AlBhedPrimers />}
      </div>
    </div>
  );
}

export default App;
