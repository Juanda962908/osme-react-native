import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "../modules/auth/screens/login/login.screen";
import ProductsScreen from "../modules/products/Presentation/products/Products.screen";
import WelcomeScreen from "../modules/welcome/presentation/Welcome.screen";
import RegisterScreen from "../modules/auth/screens/register/register.screen";
import { RecoilRoot } from "recoil";


// Presentation

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();




function MyTabs() {
    const isAuth = true
    return (
        <Tab.Navigator initialRouteName="Products">
            <Tab.Screen name="Products" component={ProductsScreen} options={{headerShown:false}}/>
            <Tab.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
            <Tab.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}


export default function Navigation() {
    const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsWelcomeVisible(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaProvider>
            <RecoilRoot>
            <NavigationContainer>
                <Stack.Navigator>
                    {isWelcomeVisible ? (
                        <Stack.Screen
                            name="Welcome"
                            component={WelcomeScreen}
                            options={{ headerShown: false }}
                        />
                    ) : (
                        <Stack.Screen name="Auth" component={MyTabs}  options={{headerShown:false}}/>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
            </RecoilRoot>
        </SafeAreaProvider>
    )
}
