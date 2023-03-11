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

  const fetchCocktails = async () => {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    return response.data.drinks[0];
  };

  const fetchAllCocktails = async () => {
    const cocktailsData = [];
    for (let i = 0; i < 10; i++) {
      const cocktail = await fetchCocktails();
      cocktailsData.push(cocktail);
    }
    setCocktails(cocktailsData);
  };

  useEffect(() => {
    fetchAllCocktails();
  }, []);

  const renderCocktail = ({ item }) => {
    const { idDrink, strDrink, strDrinkThumb, strCategory } = item;

    const handlePress = () => {
      navigation.navigate("Detail", { id: idDrink });
    };

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

  return (
    <View style={Styles.container}>
      <FlatList
        data={cocktails}
        keyExtractor={(item) => item.idDrink}
        renderItem={renderCocktail}
      />
    </View>
  );
}

export default CocktailList;