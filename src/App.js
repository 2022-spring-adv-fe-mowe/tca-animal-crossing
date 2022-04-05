import { logo } from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Play } from './Play';
import { Home } from './Home';
import { Stats } from './Stats';
import { AddVillager } from './AddVillager';

const villagers = [
  {
    name: "Ione",
    picture: true, 
    active: true
  },
  {
    name: "Rodney",
    picture: true, 
    active: true
  },
  {
    name: "Baabara",
    picture: true, 
    active: true
  },
  {
    name: "Stinky",
    picture: true, 
    active: true
  },
  {
    name: "Shino",
    picture: false, 
    active: true
  },
  {
    name: "Walker",
    picture: false, 
    active: true
  },
  {
    name: "Marlo",
    picture: false, 
    active: true
  },
  {
    name: "Marshal",
    picture: true, 
    active: true
  },
  {
    name: "Octavian",
    picture: true, 
    active: true
  },
  {
    name: "Skye",
    picture: true, 
    active: true
  },
  {
    name: "Gruff",
    picture: true,
    active: false
  },
]

const interactions = [
  {
    villager: "Shino",
    date: "2022-02-26",
    interaction: 
      "GIR"
  },
  {
    villager: "Octavian",
    date: "2022-02-26",
    interaction: "GIR"
  }
]

const activeVillagers = villagers.filter(x => x.active === true);
const activeVillagerList = activeVillagers.map(x => x.name);
const archivedVillagers = villagers.filter(x => x.active === false);
const archivedVillagerList = archivedVillagers.map(x => x.name);

console.log(activeVillagerList);
console.log(archivedVillagerList);

const villagersWithoutPicture = villagers.filter(x => x.picture === false);
const villagersWithoutPictureList = villagersWithoutPicture.map(x=> x.name);

console.log(villagersWithoutPictureList);

 
const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stats" element={<Stats />} />
        <Route path="play" element={
          <Play
            villagers = {activeVillagerList}
            picturesNeeded = {villagersWithoutPictureList}
          />
        } />
        <Route path="addvillager" element={
          <AddVillager
            villagers = {activeVillagerList}
          />
        } />
      </Routes>
    </div>
  );
};

export default App;
