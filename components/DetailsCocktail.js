import { View, Text, Image, FlatList, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Styles from "../assets/Styles";

// Définition du composant
const Detail = () => {
  // Récupération des paramètres de la route
  const route = useRoute();
  const id = route.params.id;

  // Initialisation des états avec useState()
  const [cocktail, setCocktail] = useState(null);
  const [recipe, setRecipe] = useState(null);

  // Utilisation de useEffect() pour lancer une requête HTTP
  useEffect(() => {
    const fetchCocktail = async () => {
      // Requête pour récupérer les informations du cocktail à partir de son ID
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();

      // Extraction des ingrédients et quantités à partir des données récupérées
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

      // Mise à jour des états avec les données récupérées
      setRecipe(newIngredients);
      setCocktail(data.drinks[0]);
    };
    // Lancement de la requête au chargement du composant
    fetchCocktail().then().catch();
  }, [id]);

  // Affichage du contenu à l'utilisateur
  return (
    <ScrollView>
      <View style={Styles.container}>
        {cocktail && (
          <>
            <View style={Styles.imageContainerDetails}>
              <Image
                style={Styles.imageDetails}
                source={{ uri: `${cocktail.strDrinkThumb}` }}
              />
            </View>

            <View style={Styles.detailsContainer}>
              <Text style={Styles.titleCocktail}>{cocktail.strDrink}</Text>
              <Text style={Styles.subtitle}>Instructions</Text>
              <Text style={Styles.instructions}>
                {cocktail.strInstructions}
              </Text>
              <Text style={Styles.subtitle}>Comment faire ce cocktail ?</Text>
              <Text style={Styles.subSubtitle}>(Ingrédients et quantité)</Text>
              <FlatList
                data={recipe}
                keyExtractor={(item, index) => `${index}${cocktail.idDrink}`}
                renderItem={({ item }) => (
                  <View style={Styles.recipeItem}>
                    <Text style={Styles.ingredient}>
                      Ingredient : {item.ingredient}
                    </Text>
                    <Text style={Styles.measure}>
                      Quantity : {item.measure}
                    </Text>
                  </View>
                )}
              />
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Detail;
