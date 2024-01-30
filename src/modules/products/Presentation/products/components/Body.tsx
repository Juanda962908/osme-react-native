import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useBodyController } from "../hook/useBody";
import { Icon } from 'react-native-elements';


const Body = ({useCases}) => {
    const {products, loadNextPageFn, handleScroll, query, handleSearch, filteredData, handleSearchEnd} = useBodyController(useCases);
    const renderItem = ({item, index}) => {
        return (
            <View style={styles.item}>
                <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={{uri: item.images[0]}}
                />
                <Text style={styles.text}>{item.title}</Text>
            </View>
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            <View>

            <TextInput
                style={styles.input}
                placeholder="Buscar el nombre de tu chiqui"
                value={query}
                onChangeText={handleSearch}
                onBlur={handleSearchEnd}
            />
                <Icon
                    name="search"
                    color="red"
                    size={24}
                    style={styles.searchIcon}
                />
            </View>
            <FlatList
                numColumns={2}
                style={styles.container}
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id + index.toString()}
                onEndReached={loadNextPageFn}
                onEndReachedThreshold={0.1}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 4,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 8,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 100,
    },
    text: {
        color: 'orange',
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderRadius: 20,
        paddingLeft: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#9c27b0',
        marginHorizontal:10
    },
    searchIcon: {
        position: 'absolute',
        right: 10,
    },
});

export default Body;

