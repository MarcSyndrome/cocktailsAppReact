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
  image: {
    width: "100%",
    height: 170,
    borderRadius: 10,
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
    fontSize: 16,
    color: "#666",
    marginTop: 10,
  },
});

export default styles;