import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      height: '100%'
    },
    listContainer:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      width:'100%'
    },
    imageContainer: {
      width: 100,
      height: 100,
      margin: 15,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 2,
        height: 5,
      },
      shadowRadius: 5,
      elevation: 6,
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
  })