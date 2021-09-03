import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, TextInput } from "react-native";
import CircleAvatar from "../CircleAvatar";
import { transHistory } from "../../data";
import colors from "../../config/colors";
import TransHistory from "./TransHistory";

export default function WalletScreen() {
  const [balance, setBalance] = useState("120.60");

  return (
    <View style={styles.container}>
      <Text style={{ top: 20, left: 25, fontSize: 19, color: "gray" }}>
        Current Balance
      </Text>
      <Text style={{ top: 23, left: 25, fontSize: 31, color: "green" }}>₦</Text>
      <Text style={{ left: 65, fontSize: 28, bottom: 18 }}>{balance}</Text>
      <View style={{ left: 250, bottom: 80 }}>
        <CircleAvatar
          icon={require("../../../assets/appIcon.jpg")}
          radius={40}
          title={" "}
          subtitle={" "}
          borderColor={colors.primary}
          inline
          outline
        />
      </View>
      <View
        style={{
          backgroundColor: colors.primary,
          width: "80%",
          left: 30,
          borderRadius: 10,
          height: "23%",
          bottom: 75,
          padding: 20,
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "white", fontSize: 30, top: 10 }}>
          ₦{balance}
        </Text>
        <Text style={{ color: "white", fontSize: 30, left: 20, top: 10 }}>
          ₦{balance}
        </Text>
        <Text style={{ color: "white", fontSize: 14, top: 60, right: 215 }}>
          Your Balance
        </Text>
        <Text style={{ color: "white", fontSize: 14, top: 60, right: 160 }}>
          Your Spending
        </Text>
      </View>
      <Text style={{ left: 25, fontSize: 19, color: "gray", bottom: 50 }}>
        Wallet Transactions
      </Text>
      <TransHistory data={transHistory} />
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
