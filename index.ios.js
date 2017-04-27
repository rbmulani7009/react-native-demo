/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text style={styles.greeting} >Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text style={styles.welcome}>{display}</Text>
    );
  }
}


export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
        </View>        
        <ScrollView style={styles.details}>
          <Text style={styles.welcome}>
            Welcome to Micra Solution!!!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js

          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <Greeting name="Darshak" />
          <Greeting name="Rahul"  />
          <Greeting name="Dhaval" />
        </ScrollView>
        <View style={styles.container_inner}>
          <Blink text="Blinking" /> 
        </View>
        <View style={styles.bottom}>
          <PizzaTranslator />       
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    flex: 1, 
    backgroundColor: 'powderblue',
  }, 
  details: {
    flex: 4,
    backgroundColor: 'skyblue',
  },
  container_inner: {
    flex: 1,
    backgroundColor: 'steelblue',    
  },
  bottom: {
    flex: 1,
    // backgroundColor: 'steelblue',    
  },
  welcome: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  greeting: {
    textAlign: 'center',
    color: '#000',
  }
});

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);



/*import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

AppRegistry.registerComponent('LotsOfGreetings', () => LotsOfGreetings);*/