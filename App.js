import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import indexScreen from "./src/screens/indexScreen";
import { BlogProvider } from "./src/context/BlogContext";

const Stack = createStackNavigator();

function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen
            name="Index"
            component={indexScreen}
            options={{ title: "Blogs" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

export default App;
