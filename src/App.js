import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Components/Home";
import Playlist from "./Components/Playlist";
import Navhead from "./Components/Navhead";

import "./styles.css";
import "./playlist.css";

export default function App() {
  return (
    <BrowserRouter>
        <div>
          <Navhead />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/playlist" component={Playlist}/>
             
           </Switch>
        </div> 
      </BrowserRouter>
  );
}
