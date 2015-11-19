var App = React.createClass({
  search(searchTerm) {
    var base = 'https://itunes.apple.com/search';
    var url = base + '?' + $.param({ term: searchTerm}) + '&callback=?';

    return $.getJSON(url).then((response) => {
      console.log(response.results);
      this.setState({ results: response.results });
    });
  },
  getInitialState() {
    return {
      results: []
    };
  },

  render() {
      return (
        <div>
          <h1> iTunes Search </h1>
          <Search search={this.search} />
          <ItunesResults results={this.state.results} />
        </div>
      );
  }
});

var Search = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    var searchTerm = this.refs.searchTerm.value; // document.getElementById().value --> plain JavaScript
    console.log(searchTerm);
    this.props.search(searchTerm);
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          {this.props.search}
        <input type="text" ref="searchTerm" />
        <input type="submit" value="Search" />
      </form>
    );
  }
});

var ItunesResults = React.createClass({

  render() {
    return (
      <div>
          {this.props.results.map(function(song) {
              return <Song item={song} key={song.trackId} />
          })}
      </div>
    );
  }
});

var Song = React.createClass({

    render() {
      return(
        <div className="song">
          <img src={this.props.item.artworkUrl100} />
          <h3> {this.props.item.artistName} </h3>
          <p> {this.props.item.trackName} </p>
          <p> Price: ${this.props.item.trackPrice} </p>
        </div>
      );
    }
});

// remder the content of the app to the DOM
ReactDOM.render(<App />, document.getElementById('app'));
