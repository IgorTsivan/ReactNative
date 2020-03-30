import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Photo } from "../components/Photo";
import { AppLoader } from "../components/ui/AppLoader";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/actions/post";

export const MainScreen = ({ navigation }) => {
  const [loader, setLoader] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
    setLoader(false);
  }, [dispatch]);

  const allPosts = useSelector(state => state.post.allPosts);

  const goToScreenImg = post => {
    navigation.navigate("Photo", {
      fullScreenImg: post.urls.small,
      headerTitle: post.user.name
    });
  };
  let content = (
    <FlatList
      data={allPosts}
      renderItem={({ item }) => (
        <Photo post={item} toFullScreen={goToScreenImg} />
      )}
      keyExtractor={post => post.id.toString()}
    />
  );

  if (loader) {
    content = <AppLoader />;
  }

  return <View style={styles.container}>{content}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  text: {
    color: "#000"
  }
});
