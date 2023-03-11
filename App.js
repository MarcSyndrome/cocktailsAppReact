// Composant
import ListCocktails from "./components/ListCocktails";
import DetailsCocktails from "./components/DetailsCocktail";

import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cocktails aléatoires" component={ListCocktails} />
      <Stack.Screen name="Detail" component={DetailsCocktails} />
    </Stack.Navigator>
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
          name="Cocktails"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="glass" color={color} size={size} />
            ),
            tabBarLabelStyle: { fontSize: 18 },
            tabBarActiveTintColor: "#0080ff",
            tabBarInactiveTintColor: "black",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}