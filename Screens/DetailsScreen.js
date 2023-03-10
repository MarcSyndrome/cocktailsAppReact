import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

function DetailsScreen({ id }) {
  const [cocktail, setCocktail] = useState();

  useEffect(() => {
    const fetchCocktail = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      setCocktail(data.drinks);
      console.log(data);
    };

    fetchCocktail();
  }, [id]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
      {cocktail && <Text>{cocktail[0].strDrink}</Text>}
    </View>
  );
}

export default DetailsScreen;