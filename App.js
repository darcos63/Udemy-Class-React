import React from 'react';
import SearchBar from './SearchBar';
import Babel from '@babel/template';
import youtube from '../apis/youTube';
import VideoList from './VideoList';

class App extends React.Component {

  state = {videos: []};
  
  onTermSubmit = async term => {
  const response = await youtube.get('/search', {
        params: { 
        q: term 
       }
  });
       
   this.setState({videos: response.data.items});
   console.log(response);

  };

  render() {
        return (
      <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit}/>
          <VideoList videos={this.state.videos} />
             
      </div>
    );
  }
}
export default App;
