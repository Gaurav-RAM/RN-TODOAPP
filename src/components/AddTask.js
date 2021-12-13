import React, { Component } from 'react'
import { View ,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'

class AddTask extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            task:""
        }
        
    }

    handleChange = (event) => {
    this.setState({task: event.target.value})
    }

    taskAdd = () =>{
      this.props.addTask(this.state.task);
       this.setState({
           task:""
       });
    }
    
    render() {
        return (
            <View style ={styles.container1}>
                <View style = {styles.input}>
                <TextInput
                
                value ={this.state.task}
                onChange={this.handleChange}
                 />
                </View>
                <TouchableOpacity onPress={this.taskAdd}>
                <View style = {styles.AddTask}>
                <Text style = {styles.AddTask1}>AddTask</Text>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container1:{
        flexDirection:'row'
    },
    input:{
        borderRadius:10,
        marginVertical:10,
        marginHorizontal:10,
        width:"70%",
        height:50,
        backgroundColor:"#F0A500",
    

    },
    AddTask:{
        justifyContent:'center',
        marginVertical:10,
        borderRadius:10,
        width:60,
        height:50,
        backgroundColor:"#0D7377"
    },
    AddTask1:{
      marginLeft:2,
      fontWeight:'bold',
      fontSize:14,
      color:'white'

    }


})


export default AddTask;