import React from "react";
import { FlatList, StyleSheet, Text, View, TextInput } from "react-native";

import colors from "../../config/colors";

export default function CreditCardScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "gray", top: 20, left: 25 }}>Enter Amount</Text>
      <TextInput style={styles.input} />

      <Text
        style={{
          color: colors.primary,
          position: "absolute",
          top: 47,
          left: 285,
        }}
      >
        Naira
      </Text>
      <Text style={{ color: "gray", top: 40, left: 25 }}>CardHolder Name</Text>
      <TextInput
        style={{
          top: 45,
          width: "90%",
          left: 15,
          borderBottomColor: "gray",
          borderBottomWidth: 1,
        }}
      />

      <Text style={{ color: "gray", top: 60, left: 25 }}>Card Number</Text>
      <TextInput
        style={{
          top: 65,
          width: "90%",
          left: 15,
          borderBottomColor: "gray",
          borderBottomWidth: 1,
        }}
      />

      <Text style={{ color: "gray", top: 70, left: 25 }}>MM/YY</Text>
      <TextInput
        style={{
          top: 75,
          width: "20%",
          left: 15,
          borderBottomColor: "gray",
          borderBottomWidth: 1,
        }}
      />

      <Text style={{ color: "gray", top: 30, left: 205 }}>CVV</Text>
      <TextInput
        style={{
          top: 25,
          width: "20%",
          left: 205,
          borderBottomColor: "gray",
          borderBottomWidth: 1,
        }}
      />

      <Text
        style={{
          color: "black",
          top: 50,
          left: 20,
          backgroundColor: "#EDE8E8",
          fontSize: 11,
          width: 300,
          borderRadius: 10,
          padding: 10,
        }}
      >
        You agree to Authorise the use of your credit card for this deposit and
        future payments.
      </Text>
      <Text
        style={{
          position: "relative",
          top: 65,
          left: 20,
          fontSize: 20,
          color: "gray",
          borderBottomWidth: 2,
          borderBottomColor: "green",
          width: "60%",
        }}
      >
        Payment Breakdown
      </Text>

      <View
        style={{
          borderRadius: 10,
          backgroundColor: "#EDE8E8",
          width: "80%",
          top: 90,
          left: 30,
          height: "28%",
          padding: 20,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Deposit Amount</Text>
        <Text style={{ left: 150, top: -20 }}>12300.00 Naira</Text>

        <Text style={{ fontWeight: "bold" }}>Deposit Fee</Text>
        <Text style={{ left: 150, top: -20 }}>300.00 Naira</Text>
        <Text
          style={{
            position: "relative",
            top: 15,
            left: 0,
            borderTopWidth: 2,
            borderTopColor: "black",
            width: "100%",
          }}
        ></Text>
        <Text style={{ fontWeight: "bold", top: 10 }}>Total</Text>
        <Text style={{ left: 150, top: -10 }}>12600.00 Naira</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 600,
    backgroundColor: "#fff",
  },

  input: {
    top: 25,
    width: "90%",
    left: 15,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
});
