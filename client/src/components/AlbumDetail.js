import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const AlbumDetail = props => {
  // props
  const { title, artist, thumbnail_image, image } = props.album;

  // styling
  const {
    headerContentStyle,
    headerThumbnailStyle,
    headerThumbnailContainer,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerThumbnailContainer}>
          <Image
            style={headerThumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text style={headerTextStyle}>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  headerThumbnailStyle: {
    height: 50,
    width: 50
  },
  headerThumbnailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetail;
