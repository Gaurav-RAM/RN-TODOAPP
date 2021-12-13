import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';

export class Header extends Component {
   render() {
      return (
         <View style ={styles.header}>
            <Text style = {styles.heading}>{this.props.name}</Text>
         </View>
      )
   }
}

const styles = StyleSheet.create({
header:{
   justifyContent:'center',
   alignItems:'center',
   height:60,
   backgroundColor:"#113CFC"
},
heading:{
   fontSize:35,
   fontWeight:"bold",
   color:"#32E0C4"
}
})

export default Header

