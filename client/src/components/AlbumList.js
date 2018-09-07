import React, { Component } from "react";
import { View, Text } from "react-native";
import axios from "axios";

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }
  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response =>
        this.setState({
          albums: response.data
        })
      );
  }

  renderAlbums() {
    return this.state.albums.map((album, index) => (
      <Text key={index}>{album.title}</Text>
    ));
  }

  // {profile.skills.slice(0, 4).map((skill, index) => (
  //   <li key={index} className="list-group-item">
  //     <i className="fa fa-check pr-1" />
  //     {skill}
  //   </li>
  // ))}

  render() {
    console.log(this.state.albums);
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
