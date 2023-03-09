import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  Image } from "react-native";

import Details from "./Details";
import Styles from "../assets/Styles";

// Composant affichant une liste de cocktails aléatoires
export default function Cocktails() {
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
        <View style={Styles.listContainer}>
          <View style={Styles.imageContainer}>
            <Image
              style={Styles.image}
              source={{ uri: item.strDrinkThumb }}
              />
          </View>
          <Text style={ Styles.textDefinition}>{item.strDrink}</Text>
        </View>
      )}
    />
  </View>
  );
}
