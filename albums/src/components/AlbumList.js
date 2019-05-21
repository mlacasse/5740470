// Import libraries for making a component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Make a class based component
class AlbumList extends Component {
    // initial state of AlbumList is an empty list of albums
    state = { albums: [] };

    // lifecycle methods - called the instant this component is seen on the screen
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

// Make the component available to other parts of the app
export default AlbumList;
