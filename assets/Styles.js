import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  imageContainer: {
    width: 170,
    height: 170,
    margin: 15,
    marginBottom: 40,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 15,
    },
    elevation: 9,
  },
  imageContainerDetails: {
    width: 220,
    height: 250,
    margin: 15,
    marginBottom: 40,
  },
  image: {
    width: "100%",
    height: 170,
    borderRadius: 10,
  },
  imageDetails: {
    width: "100%",
    height: 280,
    borderRadius: 4,
  },
  textDefinition: {
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  ingredientsContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  ingredient: {
    marginBottom: 5,
  },
  ingredientText: {
    fontSize: 16,
  },
  card: {
    width: 220,
    backgroundColor: "#fff",
    marginTop: 35,
    marginBottom: 10,
    borderRadius: 7,
    elevation: 6,
  },
  category: {
    fontSize: 16,
    color: "grey",
  },
  cardDetails: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    flex: 1,
  },
  subtitle: {
    fontSize: 25,
    color: "#666",
    fontStyle: "italic",
    fontWeight: "bold",
    marginTop: 10,
  },
  subSubtitle: {
    fontSize: 20,
    color: "#666",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  detailsContainer: {
    alignItems: "center",
  },
  titleCocktail: {
    fontSize: 39,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  instructions: {
    fontSize: 16,
    width: 300,
    margin: 10,
    fontStyle: "italic",
  },
  recipeItem: {
    padding: 15,
    backgroundColor: "black",
    alignItems: "center",
    margin: 10,
    opacity: 0.8,
    borderRadius: 5,
  },
  measure:{
    fontSize: 16,
    color: "white",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  ingredient:{
    fontSize: 16,
    color: "white",
    fontStyle: "italic",
    fontWeight: "bold",
  }
});

export default styles;
