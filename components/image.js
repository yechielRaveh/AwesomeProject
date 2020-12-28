import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 100,
        height: 100,
    },

});

const DisplayAnImage = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
        </View>
    );
}

export default DisplayAnImage;