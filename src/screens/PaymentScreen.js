import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from "react-native";
import colors from "../config/colors";
import ImageIcon from "../components/ImageIcon";
import Header from "../components/Header";
import PaymentTopTabNavigation from "../navigaton/PaymentTopTabNavigation";
import SubmitButton from "../components/SubmitButton";

export default function PaymentScreen({navigation:{ navigate, goback }}) {

  const [balance, onChangeBalance] = React.useState("12000.00");
  


  return (
    <ScrollView style={styles.container}>
      <Header topic=" "/>
      
      
      <View style={{flex:1,height:310}}>
        <Text style={styles.title}>Deposit Funds</Text>
        <Text style={{position: 'relative', top:90,left:20,fontSize: 16,color:"gray" }}>Available Balance</Text>
        <TextInput
        style={styles.input}
        value={balance}
        editable={false}
        /> 

        <Text style={{position: 'relative', top:25,left:310,fontSize: 26 }}>₦</Text>
        <Text style={{position: 'relative', top:65,left:20,width:"50%",fontSize: 20,color:"gray",borderBottomWidth: 2,borderBottomColor: 'green'}}>Payment Method</Text>

      </View>
      <PaymentTopTabNavigation/>
      <SubmitButton title="12600.00 Naira" borderRadius={5} textColor={"white"} onPress={() => navigate("App")} />
      
      
      
      

    </ScrollView>

  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"

    
  },
  
  title: {
    fontSize: 30,
    color: "black",
    marginVertical: 5,   
    position: "relative",
    left: 80,
    top: 27,
  },

  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 15,
    paddingLeft: 24,
    borderRadius: 10,
    position:'relative', 
    top:90,
    color: "black", 
    fontSize: 25,
    borderColor: 'gray',
  },

  

});