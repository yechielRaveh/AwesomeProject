import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header'
import ListCmp from './components/sectionList'
import SwitchCmp from './components/switch'
import DisplayAnImage from './components/image'
import BottonCmp from './components/bottons'
import TimerCmp from './components/timer'

export default function App() {
  const renderItem = ({ item }) => (
    <Text>{item.title}</Text>
  )

  return (
    <View>
      <View>
        <Header />
      </View>
      <View style={styles.container}>
        <Text style={styles.container}>
          שיעור ב React Native
        </Text>
        <Text style={styles.p}>
          נושאים:
        {"\n"}
        </Text>
      </View>
      <View>
        <ListCmp />
        <View style={styles.container}>
          <Text style={styles.p}>
            חוזרים לשיעור בעוד:
        {"\n"}
          </Text>
        </View>
        <TimerCmp />
        <SwitchCmp />
        <DisplayAnImage />
        {/* <BottonCmp /> */}
      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: "bold"
  },

  p: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: "bold"
  },
});
