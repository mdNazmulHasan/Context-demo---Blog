import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import indexScreen from "./src/screens/indexScreen";
import { Provider } from "./src/context/BlogContext";
import showScreen from "./src/screens/showScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen
            name="Index"
            component={indexScreen}
            options={{ title: "Blogs" }}
          />
          <Stack.Screen
            name="Show"
            component={showScreen}
            options={{ title: "Blogs" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
