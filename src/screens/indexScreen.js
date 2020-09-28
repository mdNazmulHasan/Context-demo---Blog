import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import BlogContext from "../context/BlogContext";

const indexScreen = () => {
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>index screen {value}</Text>
    </View>
  );
};

export default indexScreen;

const styles = StyleSheet.create({});
