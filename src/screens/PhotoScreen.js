import React from "react";
import { StyleSheet, View, Image } from "react-native";

export const PhotoScreen = ({ route }) => {
  const { fullScreenImg } = route.params;

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.img}
        source={{ uri: fullScreenImg }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "#000"
  },
  img: {
    width: "100%",
    height: "100%"
  }
});
