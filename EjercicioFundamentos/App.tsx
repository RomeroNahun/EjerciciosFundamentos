import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';
import { useState } from 'react';
import CustoInput from './src/components/CustomInput';
import CustomButton from './src/components/CustomButton';
export default function App() {


  //Definicion de una variable de estado en ReacNative
  //parte 1
  const [name, setname] = useState("");
  const [saludo, setSaludo] = useState("");

  //parte 2 
  const [edad, setEdad] = useState("");
  const [mensajeEdad, setMensajeEdad] = useState("");
  const valorEdad = parseInt(edad);

  // Función que recibe el nombre y genera el saludo
  const generandoSaludo = (userName: string) => {
    if (userName.trim() === "") return "¡Hola, invitado!";
    return `¡Hola, ${userName}! 😎 Bienvenido a mi Primer App.`;
  };

  const cuandoPresione = () => {
    // Al presionar, ejecutamos la función y guardamos el resultado en el estado
    const message = generandoSaludo(name);
    setSaludo(message);
  };

  const manejarValidacionEdad = () => {
    const numEdad = parseInt(edad);
    // Aplicacion del operador ternario para determinar el mensaje
    const resultado = numEdad >= 18 ? "Eres Mayor de edad" : "Eres Menor de edad";
    // Si el input está vacío o no es un número, enviamos un aviso
    setMensajeEdad(isNaN(numEdad) ? "Ingresa una edad válida" : resultado);
  };



  //Parte3
  type ProductoSupermercado = {
    id: number;
    nombre: string;
    cantidad: number;
    precio: number;
  };


  const listaSupermercado: ProductoSupermercado[] = [
    { id: 1, nombre: "Arroz", cantidad: 2, precio: 35 },
    { id: 2, nombre: "Frijoles", cantidad: 1, precio: 45 },
    { id: 3, nombre: "Leche", cantidad: 3, precio: 28 },
    { id: 4, nombre: "Huevos", cantidad: 1, precio: 90 },
    { id: 5, nombre: "Pan", cantidad: 2, precio: 25 },
    { id: 6, nombre: "Azúcar", cantidad: 1, precio: 32 },
    { id: 7, nombre: "Café", cantidad: 1, precio: 75 },
    { id: 8, nombre: "Aceite", cantidad: 1, precio: 95 },
    { id: 9, nombre: "Sal", cantidad: 1, precio: 12 },
    { id: 10, nombre: "Pasta", cantidad: 2, precio: 22 },
    { id: 11, nombre: "Pollo", cantidad: 1, precio: 150 },
    { id: 12, nombre: "Carne molida", cantidad: 1, precio: 180 },
    { id: 13, nombre: "Queso", cantidad: 1, precio: 65 },
    { id: 14, nombre: "Jamón", cantidad: 1, precio: 70 },
    { id: 15, nombre: "Yogurt", cantidad: 4, precio: 18 },
    { id: 16, nombre: "Manzanas", cantidad: 6, precio: 10 },
    { id: 17, nombre: "Bananos", cantidad: 8, precio: 5 },
    { id: 18, nombre: "Tomates", cantidad: 5, precio: 8 },
    { id: 19, nombre: "Cebollas", cantidad: 4, precio: 7 },
    { id: 20, nombre: "Papel higiénico", cantidad: 1, precio: 120 },
  ];


  return (
    <ScrollView contentContainerStyle={styles.container}>


      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text></Text>
        <Text style={{ marginTop: 50 }}>Uso de funciones y variables</Text>
        <CustoInput
          type={"text"}
          placeholder={'Ingrese su Nombre de Usuario'}
          value={name}
          onChange={setname} />

        <CustomButton
          title={"Mostrar Saludo"}
          onPressButton={cuandoPresione}
        />

        {saludo !== "" && (
          <Text style={styles.mensajeText}>{saludo}</Text>
        )}

        <Text></Text>
        <Text>Estructuras condicionales</Text>
        <Text></Text>

        <CustoInput
          type={"number"}
          placeholder={'Ingrese su Edad'}
          value={edad}
          onChange={setEdad} />


        <CustomButton
          title="Validar Edad"
          onPressButton={manejarValidacionEdad}
        />

        {mensajeEdad !== "" && (<Text style={styles.mensajeText}>{mensajeEdad}</Text>
        )}
        <Text></Text>
        <Text>Uso de bucles</Text>
        <Text></Text>

        <ScrollView>
          <View style={styles.container2}>
            <Text style={styles.titulo}>Lista de Supermercado</Text>

            {listaSupermercado.map((producto) => (
              <Text key={producto.id} style={styles.texto}>
                Cant: {producto.cantidad} -{producto.nombre}  - Precio: L.{" "}
                {producto.precio}
              </Text>
            ))}
          </View>
        </ScrollView>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mensajeText: {
    marginTop: 20,
    fontSize: 18,
    color: 'red',
    fontWeight: '600',
  },
  listadePrecios: {
    fontSize: 18,
    marginBottom: 10,
  },

  container2: {
    padding: 20,
    marginTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
  },



});
