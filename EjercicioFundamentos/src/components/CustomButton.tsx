//Se agregan lo que se va a importar

import { TouchableOpacity, View, StyleSheet, Text } from "react-native"



//Tipo de datos de las propiedades del Boton
type CustomButtonProps = {
  title: string;
  onPressButton: () => void;
  //Tipo union de Literales, Personalizados , el ejemplo lleva Primario, Secundario y Terciario 
  variant?: "Primary" | "Secondary" | "Tertiary";
}


//Implementacion de la Funcion que recibe las propiedades
export default function CustomButton({ title, onPressButton, variant='Primary'}: CustomButtonProps) {
  const styles = getStyles(variant);
  return (
    <TouchableOpacity style={styles.button} onPress={onPressButton}>
      <Text style={styles.buttonText}>  {title}  </Text>
    </TouchableOpacity>)
}

//Este es el Estilo del Boton 
//Ojo es variant no es el mismo de arriba 
const getStyles = (variant: "Primary" | "Secondary" | "Tertiary") => StyleSheet.create({
  button: {
    borderRadius: 9,
    //Operador ternario Aplicado a variante,  
    backgroundColor: variant === "Primary" ? 'navy' : 
             variant === "Secondary" ? 'green' : '#fff',
    padding: 25,
    width: 200,

  },
  buttonText: {
    color: variant === "Tertiary" ? 'black' : '#fff',
  }
});
