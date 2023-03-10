import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import CocktailsScreen from "./Screens/CocktailsScreen";
import DetailsScreen from "./Screens/DetailsScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Composant affichant l'image de base et les redirections
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("./assets/imageHomeCocktail.jpg")}
        style={{ width: "100%" }}
      />
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 60 }}>
        Bienvenue sur Cocktailish !
      </Text>
    </View>
  );
}

// Composant principal de l'application, icones dans navbar, redirection des details cocktails
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Cocktailish"
          component={HomeScreen}
          options={{
            tabBarLabel: "Accueil",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            tabBarLabelStyle: { fontSize: 18 },
            tabBarActiveTintColor: "#0080ff",
            tabBarInactiveTintColor: "black",
          }}
        />
        <Tab.Screen
          name="Cocktail"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="glass" color={color} size={size} />
            ),
            tabBarLabelStyle: { fontSize: 18 },
            tabBarActiveTintColor: "#0080ff",
            tabBarInactiveTintColor: "black",
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Cocktails"
                component={CocktailsScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="DetailsScreen"
                component={DetailsScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
