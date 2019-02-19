import React, { Component } from 'react';
import './App.css';

const defaultColor = {
  color: 'black'
}

const tempData = {
  user: {
    name: 'Brian',
    playlists: [
      {
        name: 'PlayList One',
        songs: [
          { name: 'test1', duration: 3 },
          { name: 'test2', duration: 3 },
          { name: 'test3', duration: 3 },
        ],
      },
      {
        name: 'PlayList Two',
        songs: [
          { name: 'test1', duration: 3 },
          { name: 'test2', duration: 3 },
          { name: 'test3', duration: 3 },
        ],
      },
      {
        name: 'PlayList Three',
        songs: [
          { name: 'test1', duration: 3 },
          { name: 'test2', duration: 3 },
          { name: 'test3', duration: 3 },
        ],
      },
      {
        name: 'PlayList Four',
        songs: [
          { name: 'test1', duration: 3 },
          { name: 'test2', duration: 3 },
          { name: 'test3', duration: 3 },
        ],
      }
    ]
  }
}

class PlayListCounter extends Component {
  render() {
    return (
      <div className="title" id="title">
        <h2>{this.props.playlists.length} Playlists</h2>
      </div>
    );
  }
}
class HourCounter extends Component {

  render() {
    let allSong = this.props.playlists.reduce((songs, playlist) => {
      return songs.concat(playlist.songs);
    }, [])
    let total = allSong.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div className="title" id="title">
        <h2>{Math.round(total / 60)} Hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div>
        <img />
        <input type="text" />
      </div>
    );
  }
}
class PlayList extends Component {
  render() {
    return (
      <div id="playlist">
        <img />
        <h3>PlayList Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}
class Counter extends Component {
  render() {
    return (
      <div id="playlist">
        <img />
        <h3>PlayList Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { serverData: {} }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        serverData: tempData
      })
    }, 5000);

  }

  render() {
    return (

      <div style={defaultColor} id="app1" className="App" >
        {this.state.serverData.user ?

          <div class="firstComponent">
            <h1>
              {this.state.serverData.user.name}'s Playlist
          </h1>


            {this.state.serverData.user &&
              <PlayListCounter playlists={
                this.state.serverData.user.playlists}
              />}


            {this.state.serverData.user &&
              <HourCounter playlists={
                this.state.serverData.user.playlists}
              />}

            <Filter />
            <PlayList />
            <PlayList />
            <PlayList />
          </div > : <h1>Loading...</h1>
        }


      </div>
    );
  }
}

export default App;
