import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import axios from "axios";
import Styles from "../assets/Styles";

function CocktailList({ navigation }) {
  const [cocktails, setCocktails] = useState([]);

  // fonction qui renvoie un cocktail aléatoire de l'API thecocktaildb
  const fetchCocktails = async () => {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    return response.data.drinks[0];
  };

  // fonction qui récupère 10 cocktails aléatoires et les stocke dans l'état
  const fetchAllCocktails = async () => {
    const cocktailsData = [];
    for (let i = 0; i < 10; i++) {
      const cocktail = await fetchCocktails();
      cocktailsData.push(cocktail);
    }
    setCocktails(cocktailsData);
  };

  const fetchMoreCocktails = async () => {
    const cocktailsData = [];
    for (let i = 0; i < 10; i++) {
      const cocktail = await fetchCocktails();
      cocktailsData.push(cocktail);
    }
    setCocktails([...cocktails,...cocktailsData]);
  }

  // effet qui appelle fetchAllCocktails() une seule fois au chargement de la liste des cocktails
  useEffect(() => {
    fetchAllCocktails();
  }, []);

  // fonction qui rend chaque élément de la FlatList des cocktails
  const renderCocktail = ({ item }) => {
    const { idDrink, strDrink, strDrinkThumb, strCategory } = item;

    // fonction qui navigue vers la page de détails du cocktail correspondant au clic de l'utilisateur
    const handlePress = () => {
      navigation.navigate("Detail", { id: idDrink });
    };

    // rendu de chaque élément de la liste des cocktails
    return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={Styles.card}>
          <Image
            source={{ uri: strDrinkThumb }}
            style={Styles.image}
            resizeMode="cover"
          />
          <View style={Styles.cardDetails}>
            <Text style={Styles.title}>{strDrink}</Text>
            <Text style={Styles.category}>{strCategory}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  // rendu du composant CocktailList
  return (
    <View style={Styles.container}>
      <FlatList
        data={cocktails}
        keyExtractor={(item) => item.idDrink}
        renderItem={renderCocktail}
        onEndReached={fetchMoreCocktails}
        onEndReachedThreshold={0.8}
      />
    </View>
  );
}

export default CocktailList;
