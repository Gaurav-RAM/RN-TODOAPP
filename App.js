/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import AddTask from './src/components/AddTask';
import Header from './src/components/Header';
import TaskList from './src/components/TaskList';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       taskList :[]
    }
  }

  addNewTask = (e) =>{
      let id = Math.floor(Math.random() * 10);
     let taskobj = {id:id, task:e}
    this.setState(prevState => ({
      taskList: [...prevState.taskList, taskobj]
 }));
   }

    removeHandleDelete = (element) =>{
      this.setState(prevState => ({
        taskList: prevState.taskList.filter((el) => el.id != element.id )
        // taskList : [...prevState.taskList,element]
      }))
    }
  
  render() {
    return (
      <View style = {styles.container}>
       <Header name ="Todo Task"/>
       <AddTask addTask={this.addNewTask}/> 
        <TaskList
            handleDelete = {this.removeHandleDelete}
            taskList= {this.state.taskList} 
        /> 
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
container:{
  
  
}
})
export default App
