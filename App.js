import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { screenNames } from "./constants";

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screenNames.home}
        screenOptions={{
          contentStyle: {
            backgroundColor: "#ffffff",
          },
        }}
      >
        <Stack.Screen name={screenNames.home} component={HomeScreen} />
        <Stack.Screen
          name={screenNames.restaurant}
          component={RestaurantScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
