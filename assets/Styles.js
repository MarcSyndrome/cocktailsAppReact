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
      width: 170,
      height:170,
      margin: 15,
      marginBottom: 40,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 2,
        height:15,
      },
      elevation: 9,
    },
    image: {
      width: 170,
      height: 170,
      borderRadius: 10,
    },
    textDefinition: {
      fontWeight: 'bold',
      color: '#000',
    },
  })

  export default styles;