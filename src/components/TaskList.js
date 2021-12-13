import React, { Component } from 'react';
import {View,Text, TouchableOpacity,ScrollView,Button,StyleSheet} from 'react-native';

class TaskList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }

    handleDelete (e){
     this.props.handleDelete(e)
    }
    
    render() {
        return (
          
           <View style = {styles.box1}>
             <ScrollView>
            {this.props.taskList.map((element,i)=>{
              console.log("index", i);
              console.log("element", element);
            
            return(
              
            <View key={i} >
             
            
            <Text  style={styles.box2}>{element.task} <TouchableOpacity style={styles.button}  onPress={() => this.handleDelete(element)}><Text style ={styles.btn}>x</Text></TouchableOpacity></Text>
          
              </View>
              
             )
          })}
           </ScrollView>
           </View>
           )
          }
         }

const styles = StyleSheet.create({
  box1:{
    marginHorizontal:11,
    width:'93%',
    height:'70%',
    backgroundColor:'#EEB76B'
  },

  box2:{
    backgroundColor:'#B3541E',
    margin:10,
    width:"92%",
    height:50
  },

  button:{
    
    width:40,
    height:50,
    backgroundColor:"#000000",
    marginVertical:60
  },

  btn:{
   marginHorizontal:10,
   color:'red',
   fontSize:30
  }
 
})

export default TaskList


