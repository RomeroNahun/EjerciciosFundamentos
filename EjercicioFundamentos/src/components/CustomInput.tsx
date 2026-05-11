import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


type Props = {
    type: "text" | "email" | "password" | "number";
    placeholder: string;
    value: string;
    onChange: (text: string) => void;
}

export default function CustoInput({ type = "text", placeholder, value, onChange }: Props) {

    const [isSecureText, setIsSecureText] = useState(type === 'password');
    const ispasswordFiel = type === 'password';

    const keyboardType: KeyboardTypeOptions =
        type === "email" ? 'email-address' :
            type === "number" ? 'phone-pad' :
                'default';


    const getError = () => {
        if (type === 'email' && !value.includes('@')) {
            return 'Correo Invalido'
        };
        if (type === 'password' && value.length < 4) {
            return 'La contraseña es muy debil'
        }
        if (type === 'number' && (Number(value) >=100)) {
            return 'Edad Invalida'
        }
    }

    const error = getError();

    //El  Ionicons["name"] se refiere al nombre del Icono 
    const icon: typeof MaterialIcons["name"] | undefined =
        type === "email" ? 'alternate-email' :
            type === "password" ? 'lock' :
                undefined
    return (
        //*Esta es una Forma de comentar parrafos 
        //  Al <View> que tenemos abajo 👇👇👇👇 se le llama Container
        <View style={styles.wrapper}>
            <View style={[styles.inputContainer, error && styles.inputError]}>

                <MaterialIcons name={icon as any} size={22} color="#000000" />

                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChange}
                    style={styles.input}
                    secureTextEntry={isSecureText}
                    keyboardType={keyboardType}
                />
                {ispasswordFiel && <TouchableOpacity
                    onPress={
                        () => {
                            //El ! se usa para Negacion
                            setIsSecureText(!isSecureText)
                        }}>
                    <Ionicons name={isSecureText ? "eye" : "eye-off"} size={22} />
                </TouchableOpacity>}
            </View>
            {
                error
                &&
                <Text style={styles.inputError}>{error}</Text>}
        </View>

    );
}

const styles = StyleSheet.create({

    wrapper: {
        marginBottom: 10,

    },
    //Distribucion de componentes con Flexbox(Solo permite alineacion Horizontal y Vertical)
    //Variable de estilizacion del TextInput
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        //marginTop:10, --->Separa del Componente anterior 10px
        //Estilizacion del Input
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#f0f0f0",
        //Agrega espacio en la parte interna del componente
        paddingLeft: 20,
    },
    input: {
        width: '80%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        //Ojo como Tip Colocarle color de fondo para ver el espacio que ocupa cada elemento 
        // backgroundColor: "#0019aa",
    },
    inputError: {
        color: 'red',
        borderColor: 'red',
    }
})