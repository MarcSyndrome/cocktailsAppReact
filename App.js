import * as React from 'react';
import {
    FlatList,
    Text,
    View,
    Image
} from 'react-native';
import { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Cocktails from "./Components/Cocktails";
import Details from "./Components/Details";
import Styles from "./assets/Styles";

const Tab = createBottomTabNavigator();

// Composant affichant l'image de base et les redirections
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('./assets/imageHomeCocktail.jpg')} style={{width: '100%'}} />
      <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 60}}>Bienvenue sur Cocktailish !</Text>
    </View>
  );
  }

// Composant principal de l'application
export default function App() {
    return (
    <NavigationContainer style={{ paddingHorizontal: 100}}>
      <Tab.Navigator>
        <Tab.Screen
          name="Cocktailish"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Accueil',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            tabBarStyle: { backgroundColor: '#f2ffff' },
            tabBarLabelStyle: { fontSize: 20 },
            tabBarActiveTintColor: '#0080ff',
            tabBarInactiveTintColor: 'black',
          }}
        />
        <Tab.Screen
          name="Cocktails"
          component={CocktailsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="glass" color={color} size={size} />
            ),
            tabBarLabelStyle: { fontSize: 20 },
            tabBarActiveTintColor: '#0080ff',
            tabBarInactiveTintColor: 'black',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

// Composant affichant la liste des cocktails
function CocktailsScreen() {
  return (
    <Cocktails/>
  );
}