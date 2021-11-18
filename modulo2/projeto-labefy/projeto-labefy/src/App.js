import React from "react";
import CriarPlaylist from "./Components/CriarPlaylist";
import ListaDePlaylists from "./Components/ListaDePlaylists";

export default class App extends React.Component {
  render(){
    return(
      <div>
        {/* <CriarPlaylist/> */}
        <ListaDePlaylists/>
      </div>
    )
  }
}