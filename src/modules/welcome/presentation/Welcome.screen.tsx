import React from 'react';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Body from "./components/body/Body";


const WelcomeScreen = ({navigation}) => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView>
        <Body/>
        </SafeAreaView>
    );
};

export default WelcomeScreen;

