import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Button, Alert } from 'react-native'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { COLORS } from "../constants/colors"
import { useDispatch } from 'react-redux'
import { signUp } from '../store/actions/auth.actions'
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE"

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const inputValues = {
            ...state.inputValues,
            [action.input]: action.isValid
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isvalid
        };
        let updatedFormIsValid = true 
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updateValues,
        }
    }
}

const AuthScreen = () => {
    const dispatch = useDispatch();
    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues: {
            email: "",
            password: "",
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: finalPropsSelectorFactory,
    });

    useEffect(() => {
        if(error){
            Alert.alert("Ha ocurrido un error", error, [{text: "OK"}])
        }
    }, [error])

    const handleSignup = () => {
        dispatch(signUp(email, password));
    };

    const onInputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            })
        },
        [formDispatch]
    )

  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} style={styles.screen}>
        <View style={styles.container}>
            <Text  style={styles.title}>Tu Panadería: login</Text>
            <View>
                <Input
                id= "email"
                label="email"
                placeholder="email"
                keyboardType="email-address"
                required
                email
                autoCapitalize="none"
                errorText="Por favor ingrese un email valido"
                onInputChange={onInputChangeHandler}
                initialValue=""/>
                <TextInput
                style={styles.input}
                id= "password"
                placeholder="password"
                keyboardType="default"
                secureTextEntry
                minlength={6}
                autoCapitalize="none"
                //onChangeText={setPassword}
                initialValue=""/>
            </View>
            <View>
                <Button title="Registrarme"
                color={COLORS.primary}
                onPress={handleSignup}/>
            </View>
        </View>
    </KeyboardAvoidingView>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        width: "80%",
        maxWidth: 400,
        backgroundColor: "#fff",
        height: "50%",
        padding: 12
    },
    title: {
        fontSize: 24,
        marginBottom: 18
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
})