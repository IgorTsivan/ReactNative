import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export const Photo = ({ post, toFullScreen }) => {
  return (
    <TouchableOpacity onPress={() => toFullScreen(post)}>
      <View style={styles.photoBox}>
        <ImageBackground
          resizeMode="cover"
          style={styles.img}
          source={{ uri: post.urls.thumb }}
        >
          <Text style={styles.text}>{post.user.name}</Text>
          <Text style={styles.text}> {post.alt_description} </Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    textAlign: "center"
  },
  img: {
    justifyContent: "space-between",
    width: "100%",
    height: 200
  },
  photoBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    padding: 5
  }
});
