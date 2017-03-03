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
} from 'react-native';

import {Button, Form, Input } from 'native-base'; 


export default class Main extends Component {
  constructor() {
    super()

    this.state = {
      todos: []
    }

    this.addToDo = this.addToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
  }

  addToDo(text) {
    console.log(this.refs.todo.value);
    console.log(text);
  console.log(this.refs.todo.value);
  

    this.setState({ todos:text });
  }

deleteToDo(todoId) {
    const todos = this.state.todos.filter(todo => todo.id !== todoId);

    this.setState({ todos });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          TO DO:
        </Text>
        <Text style={styles.instructions}>
          To get started tap on the form and enter a thing that needs done
        </Text>
      
        <Text style={styles.instructions}>
         {this.state.todos};
        </Text>
        <Form>
        <Input   ref="todo" placeholder="Get groceries" id="task"/>
        <Button onPress={ () => this.addToDo("okay") }>
          <Text>Click Me! </Text>
        </Button>
        </Form>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color:'green'
  },
  instructions: {
    color: 'grey',
    marginBottom: 5,
    fontSize: 20,
  },
  input: {
    width:150,
    color:'blue',

  }
});

AppRegistry.registerComponent('sorry', () => Main);
