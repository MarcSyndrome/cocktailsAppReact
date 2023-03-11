import { View, Text, Image, FlatList} from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Styles from "../assets/Styles";

const Detail = () => {
  const route = useRoute();
  const id = route.params.id;
  const [cocktail, setCocktail] = useState(null);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();

      const ingredients = Object.keys(data.drinks[0])
        .filter((key) => key.includes("strIngredient"))
        .map((key) => data.drinks[0][key]);
      const measures = Object.keys(data.drinks[0])
        .filter((key) => key.includes("strMeasure"))
        .map((key) => data.drinks[0][key]);
      const newIngredients = ingredients
        .map((ingredient, index) => ({
          ingredient,
          measure: measures[index],
        }))
        .filter(({ ingredient, measure }) => ingredient && measure);
      setRecipe(newIngredients);

      setCocktail(data.drinks[0]);
    };
    fetchCocktail().then().catch();
  }, [id]);
  return (
    <View style={Styles.container}>
      {cocktail && (
        <>
          <View style={Styles.imageContainer}>
            <Image
              style={Styles.image}
              source={{ uri: `${cocktail.strDrinkThumb}` }}
            />
          </View>

          <View style={Styles.detailsContainer}>
            <Text style={Styles.title}>{cocktail.strDrink}</Text>
            <Text style={Styles.subtitle}>Instructions</Text>
            <Text style={Styles.instructions}>{cocktail.strInstructions}</Text>
            <Text style={Styles.subtitle}>Recette</Text>
            <FlatList
              data={recipe}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={Styles.recipeItem}>
                  <Text style={Styles.measure}>{item.strCategory}</Text>
                  <Text style={Styles.ingredient}>{item.ingredient}</Text>
                  <Text style={Styles.measure}>{item.measure}</Text>
                  <Text style={Styles.measure}>{item.strAlcoholic}</Text>
                  <Text style={Styles.measure}>{item.strDrinkThumb}</Text>
                </View>
              )}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Detail;