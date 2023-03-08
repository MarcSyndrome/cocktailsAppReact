import * as React from 'react';
import {
    FlatList,
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import UserData from "./Components/UserData";
import Cocktails from "./Components/Cocktails";
import Details from "./Components/Details";

// Composant affichant une liste de cocktails aléatoires
function HomeScreen() {
  const [randomCocktail, setRandomCocktail] = useState([]);

  useEffect(() => {
    // Fonction qui récupère un cocktail aléatoire depuis l'API
    const cocktails = async () => {
      const response = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php'
      );
      const data = await response.json();
      return data.drinks[0];
    };

    // Fonction qui récupère 10 cocktails aléatoires
    const getUniqueCocktails = async (uniqueCocktails) => {
      if (uniqueCocktails.size >= 10) {
        setRandomCocktail([...uniqueCocktails]);
        return;
      }

      const cocktail = await cocktails();
      uniqueCocktails.add(cocktail);

      getUniqueCocktails(uniqueCocktails);
    };

    getUniqueCocktails(new Set());
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={randomCocktail}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <Image
              style={{ width: 60, height: 60 }}
              source={{ uri: `${item.strDrinkThumb}` }}
            />
            <Text style={{ paddingHorizontal: 10 }}>{item.strDrink}</Text>
          </View>
        )}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Composant principal de l'application
export default function App() {
    return (
<NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Cocktailish"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cocktails"
                    component={CocktailsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="glass" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="User"
                    component={UserScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="user" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
  )
}

// Composant affichant les données de l'utilisateur
function UserScreen() {
    return (
        <UserData/>
    );
}

// Composant affichant la liste des cocktails
function CocktailsScreen() {
    return (
        <Cocktails/>
    );
}

// Composant affichant les détails d'un cocktail
function DetailScreen() {
    return (
        <Details/>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        height: '100%'
    },
    listContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        width:'100%'
    }
})


