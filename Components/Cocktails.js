import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

// Fonction principale du composant "Cocktails"
export default function Cocktails() {
  // Le composant ne manipule pas de state ni n'a besoin de s'abonner à des effets
  // pour le moment, donc cette fonction est vide.
  useEffect(() => {}, []);

  // Le composant retourne une vue contenant un texte "Cocktails"
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Cocktails</Text>
    </View>
  );
}
