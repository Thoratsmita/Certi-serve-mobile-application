import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import SubmitButton from "../SubmitButton";

export default function DetailScreen({item}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Title :{" "}
          <Text style={{ color: "#000" }}>{item.job_title}</Text>
        </Text>
        {/* End of Header Text */}

        <View style={styles.category}>
          <Text style={[styles.headerText, { color: "#000" }]}>Category</Text>
          <Text style={[styles.headerText, { color: "#000" }]}>
            Sub-category
          </Text>
          <Text style={[styles.headerText, { color: "#000" }]}>
            {item.job_location}
          </Text>
        </View>
        {/* End of Category */}

        <View style={{ marginVertical: 10 }}>
          <Text style={[styles.headerText]}>Details</Text>
          <View style={styles.detailContainer}>
            <Text>
              {item.job_description}
            </Text>
            <Text>
              Minimum Experience: {item.minimum_experience} Years.
            </Text>
            <Text>
              Job Incentives: {item.job_incentives} Naira.
            </Text>
            <Text>
              Language Required: {item.language}
            </Text>
            <Text>
              Job Duration: {item.job_duration}
            </Text>
          </View>
        </View>
        {/* End of Details */}

        <View style={{ marginVertical: 10 }}>
          <Text style={styles.headerText}>Attachments</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.doc}>
              <View style={styles.docFooter}>
                <Text>{item.job_docs}</Text>
              </View>
            </View>
            
          </View>
        </View>
        {/* End of Details */}
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            alignSelf: "center",
          }}
        >
          <View style={styles.box}>
            <Text style={styles.headerText}>Avg. Bid : ₦{item.job_incentives}</Text>
          </View>
          <View style={styles.box}>
            <Text style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>
              120{" "}
              <Text style={[styles.headerText, { fontWeight: "normal" }]}>
                Bids
              </Text>
            </Text>
          </View>
        </View>
        {/* End of Box */}
        <SubmitButton title="Place Bid" textColor="#fff" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    color: colors.primary,
    fontSize: 18,
    marginVertical: 3,
  },
  category: {
    paddingVertical: 10,
  },
  detailContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#a9a9a9",
    borderRadius: 10,
  },
  doc: {
    borderWidth: 1,
    borderColor: "#a9a9a9",
    paddingTop: 30,
    width: 120,
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 10,
    backgroundColor:"#fff"
  },
  docFooter: {
    padding: 10,
    borderTopWidth: 1,
    backgroundColor: "#68B921",
  },
  box: {
    elevation: 5,
    padding: 10,
    // borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 10,
  },
});
