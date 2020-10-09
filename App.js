import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor:"pink", flex:1}} >
      
      <View  style={{flex:1}}>
      <Image source={require("./images/image.png")} style={stil.logo}/>
      </View>

      <View style = {stil.alt}>
        <TextInput keyboardType="email-address"  style={stil.inputt} />
        <TextInput keyboardType="decimal-pad"  style={stil.inputt} />
        <TouchableOpacity style={stil.buton}><Text style={stil.tex}>GirişYap</Text></TouchableOpacity>
        <TouchableOpacity style={stil.buton}><Text style={stil.tex}>Kayıt ol</Text></TouchableOpacity>
      </View>
    
      
    
     
    </SafeAreaView>
  );
};

export default App;

const stil= StyleSheet.create({

  logo:{
    flex:1,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
    width:100,
    height:50,
    resizeMode: "center"
  },

  alt:{
    margin:50,
    padding:5,
    
    flex:1,
    

  },


  inputt:{
    height: 40,
    borderColor: 'black',
    borderWidth: 2 ,
    marginBottom:15,
    backgroundColor: "grey",

  },

  buton:{

    alignItems:"center",
    borderRadius:15,
    backgroundColor:"black",
    width:200,
    margin:5,
    
  },

  tex:{
    color:"white",
    textAlign:"center",
  }



  
})