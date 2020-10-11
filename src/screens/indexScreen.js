import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";

const indexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      <Text>index screen</Text>
      <Button title="add blog" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default indexScreen;

const styles = StyleSheet.create({});
