import React from 'react';
import { Image } from "expo-image";
import Background from "../background/Background";
import { Text, useWindowDimensions, View } from "react-native";

import styles from "./body.styles";
import { ImagesAssets } from "../../../../../../assets/images/images";
import { FadeInView } from "../../../../../commons/velocity/atoms/VelocityFadeIn";

/**
 * TODO: Ajustar estilo del texto de bienvenidos
 * @constructor
 */
const Body = () => {
    const {width, height} = useWindowDimensions()
    return (
        <Background>
            <View style={styles.container}>
                <Text style={styles.containerTextElement}>
                    Bienvenidos
                </Text>
                <View style={styles.containerImageElement}>
                    <FadeInView duration={2000}>
                        <Image
                            source={ImagesAssets.logoOsmeChiquis}
                            style={{width: width * 0.9, height: height * 0.5, borderRadius: 100}}
                        />
                    </FadeInView>
                </View>
            </View>
        </Background>
    );
};

export default Body;
