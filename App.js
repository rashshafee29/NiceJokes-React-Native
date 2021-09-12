/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {StyleSheet, View, Text, FlatList, TouchableHighlight} from 'react-native'

class App extends React.Component {
  constructor() {
    super();
    this.state={
      data:[]
    }
  }
  componentDidMount() {
    this.apiCall();
  }

  async apiCall(){
    let resp = await fetch("https://v2.jokeapi.dev/joke/Any?type=twopart&amount=10")
    let respJson = await resp.json()
    this.setState({data:respJson.jokes})
  }
  render() {
    return(
      <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Trying JokeAPI in React-Native</Text>
      </View>
        <FlatList
        data={this.state.data}
        renderItem = {({item, separators})=>
        (
            <View style={styles.items}>
              <Text style={styles.item_Setup}>{item.setup}</Text>
              <Text style={styles.item_Delivery}>{item.delivery}</Text>
            </View>
        )
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#34495e',
    padding: 10
  },
  items: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    margin: 10
  },
  item_Setup: {
    fontSize: 15,
    padding: 5,
    flexDirection: 'row',
    color: '#16a085'
  },
  item_Delivery: {
    fontSize: 15,
    padding: 5,
    flexDirection: 'row',
    color: '#c0392b'
  }
});

export default App;