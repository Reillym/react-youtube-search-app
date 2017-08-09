import _ from 'lodash';
import React from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

// Youtube Data v3 API
const API_KEY = "AIzaSyATyMyeyiN9KuKZVoGZbJLPAGYud68WVBQ";

// Stateless Funcational Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    // Initialize videos with search data
    this.videoSearch('Lions');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos =>
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    );
  }

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 500);

    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch} />
        <div className="row">
          <VideoDetail video = {this.state.selectedVideo} />
          <VideoList
            onVideoSelect = {selectedVideo => this.setState({ selectedVideo })}
            videos = {this.state.videos}
          />
        </div>
      </div>
    );
  }
}

// Place the component's generated HTML into the DOM
ReactDOM.render(<App />, document.querySelector(".container"));
