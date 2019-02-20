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
        name: 'BooBoo One',
        songs: [
          { name: 'Boo', duration: 333 },
          { name: 'test2', duration: 311 },
          { name: 'test3', duration: 322 },
        ],
      },
      {
        name: 'PlayList Two',
        songs: [
          { name: 'test1', duration: 34 },
          { name: 'test2', duration: 355 },
          { name: 'test3', duration: 344 }
        ],
      },
      {
        name: 'PlayList Three',
        songs: [
          { name: 'test1', duration: 33 },
          { name: 'test2', duration: 13 },
          { name: 'test3', duration: 23 },
        ],
      },
      {
        name: 'PlayList Four',
        songs: [
          { name: 'test1', duration: 33 },
          { name: 'test2', duration: 453 },
          { name: 'test3', duration: 36 },
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
        <input type="text" onKeyUp={e => this.props.onTextChange(e.target.value)} />
      </div>
    );
  }
}
class PlayList extends Component {

  render() {
    let listOfPlaylist = this.props.playlist;
    return (
      <div id="playlist">
        <img />
        <h3>{listOfPlaylist.name}</h3>
        <ul>
          {listOfPlaylist.songs.map(song =>
            <li>{song.name}</li>
          )}

        </ul>
      </div>
    );
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
      filterString: ''
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        serverData: tempData
      })
    }, 1000);

  }

  render() {
    let playListTo = this.state.serverData.user ? this.state.serverData.user.playlists
      .filter(playlist =>
        playlist.name.toLowerCase().includes(this.state.filterString.toLowerCase())
      ) : []
    return (

      <div style={defaultColor} id="app1" className="App" >
        {this.state.serverData.user ?

          <div class="firstComponent">
            <h1>
              {this.state.serverData.user.name}'s Playlist
          </h1>


            {this.state.serverData.user &&
              <PlayListCounter playlists={
                playListTo}
              />}


            {this.state.serverData.user &&
              <HourCounter playlists={
                playListTo}
              />}

            <Filter onTextChange={text => this.setState({ filterString: text })} />

            {playListTo.map(playlist =>
              < PlayList playlist={playlist} />
            )}
          </div > : <h1>Loading...</h1>
        }


      </div>
    );
  }
}

export default App;
