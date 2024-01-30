import React from 'react';
import { useWindowDimensions, View } from 'react-native';


const Background = ({ children }) => {
  const {width, height} =  useWindowDimensions()

    return (
        <View style={{ height, width, backgroundColor:'#f4f4f5' }}>
            {/*
            Acás cualquier cosa que quiera ir de fondo, cómo un svg en las esquinas o cosas así
            */}
            {children}
        </View>
    );
};

export default Background;
