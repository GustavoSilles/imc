import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      entrada:{
        flexDirection:'row',
      },
      input:{
        height:80,
        textAlign:"center",
        width:"50%",
        fontSize:50,
        marginTop:34,
      },
      button:{
       backgroundColor:"#9ACD32",
       width:'100%'
      },
      buttontext:{
        textAlign:"center",
        padding:30,
        fontSize:25,
        fontWeight:'bold',
        color:"green",
      },
      resultado:{
        alignSelf:"center",
        color:"lightgray",
        fontSize:45,
        fontWeight:'bold',
        padding: 6,
      },
    });
export default styles;