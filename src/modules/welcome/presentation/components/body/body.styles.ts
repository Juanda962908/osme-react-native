import { StyleSheet } from "react-native";

// Estandat BEM CSS => B=bloque, E=elemento, M=modificador(como botones que cambian el color de la page, etc)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerTextElement:{
        color:'#9933FF',
        fontWeight:"bold",
    },
    containerImageElement:{
       marginTop:'10%',
        borderRadius: 8,
        elevation: 5, // Propiedad para sombra en Android
        shadowColor: '#9933FF', // Propiedad para sombra en iOS
        shadowOffset: { width: 5, height: 10 }, // Propiedad para sombra en iOS
        shadowOpacity: 0.9, // Propiedad para sombra en iOS
        shadowRadius: 2, // Propiedad para sombra en iOS
    }

})

export default styles
