import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function TimerCmp() {
    const [seconds, setSeconds] = useState(3600);
    const [num, setNum] = useState(0);


    useEffect(() => {
        console.log({ seconds });
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds('BOOOOM!');
        }
    });

    function click() {
        setNum(num)
    }
    return (
        <View style={styles.timer}>
            <Button
                title="click"
                onPress={click}
            />
            {seconds}

        </View>
    );

}
const styles = StyleSheet.create({
    timer: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: "bold"
    },
});



