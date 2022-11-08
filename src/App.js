import React from 'react';
import './App.css';
import RecipeSearch from "./components/RecipeSearch";
import ReactAnimation from "./components/ReactAnimation";
import Map from "./components/Map/Map";
import Inventory from "./components/inventory/Inventory";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import FakeKanban from "./components/FakeKanban/FakeKanban";
import {DndProvider} from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';


export default class App extends React.Component{
  state = {
    pages: [<RecipeSearch />, <ReactAnimation />, <Map />, <Inventory />, <MusicPlayer />, <FakeKanban />],
    curPage: 0
  };
  
  render(){
    return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1>N320 React Projects</h1>
        <div>
          <button onClick={() => {
            this.swapProject(0);
            }}>
              Recipe Search
          </button>
          <button onClick={() => {
            this.swapProject(1);
            }}>
              React Animation
          </button>
          <button onClick={() => {
            this.swapProject(2);
            }}>
              Map
          </button>
          <button onClick={() => {
            this.swapProject(3);
            }}>
              Inventory Bag
          </button>
          <button onClick={() => {
            this.swapProject(4);
            }}>
              Music Player
          </button>
          <button onClick={() => {
            this.swapProject(5);
            }}>
              Fake Kanban
          </button>
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
      </DndProvider>
    );
  }
  
  swapProject(projectIndex){
    this.setState({ curPage: projectIndex});
  }
}
