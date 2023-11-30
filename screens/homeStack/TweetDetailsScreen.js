import { useRoute, useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import TweetContent from "../../components/TweetContent";


const TweetDetailScreen = () => {
  const navigation = useNavigation();

  const {
    params: { tweet },
  } = useRoute();

 const name  = tweet.author.name
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:`😃 : ${name }`  ,
    })
  }, []);
  return (
    <View testID="TweetDetailScreen" style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <TweetContent tweet={tweet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TweetDetailScreen;
