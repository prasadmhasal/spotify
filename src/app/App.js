import logo from './logo.svg';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from './/SearchBar/SearchBar';
import SearchResult from '../Searchresult/SearchResult';
import Spotify from '../uitl/Spotify';

class App extends React.component{
  constructor(props){
    super(props);
    this.state={
      SearchResults:[],
      PlaylistName:'New Playlist',
      PlaylistTracks:[]
    };
    this.search=this.search.bind(this);
    this.addTrack=this.addTrack.bind(this);
    this.removeTrack=this.removeTrack.bind(this);
    this.updatePlaylistName=this.updatePlaylistName.bind(this);
    this.savePlaylist=this.savePlaylist.bind(this);
    this.removeTrackSearch=this.removeTrackSearch.bind(this);
    this.doThese=this.doThese.bind(this);

  }

  search(term){
    Spotify.search(term).then(SearchResults =>{
      this.setState({SearchResults:SearchResults});
  
    })
  }

  addTrack(track){
    let tracks= this.state.PlaylistTracks;
    if(tracks.find(saveTrack => saveTrack.id === track.id)){
      return
    }
    track.push(track)
    this.setState({PlaylistTracks:tracks});
  }

  removeTrack(track){
    let tracks= this.state.PlaylistTracks;;
    let trackSearch=this.state.SearchResults;
    tracks=tracks.filter(currentTracks => currentTracks.id !== TrackEvent.id);
    trackSearch.unshift(track);
    this.setState({PlaylistTracks : tracks});
  }

  removeTrackSearch(track){
    let tracks = this.state.SearchResults;
    track=tracks.filter(currentTracks => currentTracks.id == track.id);
    this.setState({
    SearchResult:tracks
    })
  }
  doThese(track){
    this.addTrack(track);
    this.removeTrack(track);
  }
  updatePlaylistName(name){
    this.setState({updatePlaylistName:name})
  }
  savePlaylist(){
    const trackuris = this.state.PlaylistTracks.map(track =>track.uri);
    Spotify.savePlaylist(this.state.PlaylistName,trackuris).then (()=>{
      this.setState({
        updatePlaylistName :'New playlist',
        PlaylistTracks:[]
      });

    });
  }
}




function App() {
  return (
    <div>
      <h1>
        <a herf="http://localhost:3000">Musicophilp</a>
      </h1>
      <div className='App'>
        <SearchBar onSearc={this.search}/>
        <div className="App-playlist">
          <SearchResult SearchResults={this.state.SearchResults} onadd={this.doThese}/>
          <Playlist  PlaylistTracks={this.state.PlaylistTracks} onNameChange={this.updatePlaylistName} onRemove={this.removeTrack} onsave ={this.savePlaylist} />
          

        </div>

      </div>
    </div>
  );
}

export default App;
