import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AppTextInput from "../components/AppTextInput";
import Header from "../components/Header";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";
import RadioButton from "../components/RadioButton";

export default function PostJobScreen({ navigation: { goBack }, route }) {
  const [jobDesc, setJobDesc] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobCat, setJobCat] = useState("");
  const [exp, setExp] = useState("");
  const [duration, setDuration] = useState("");
  const [incentive, setIncentive] = useState("");
  const [lang, setLang] = useState("");
  const [hours, setHours] = useState("");
  const { user } = route.params;
  const postJobButton = () => {
    if (!jobDesc) {
      alert("Please Enter Description!");
      return;
    }
    if (!jobTitle) {
      alert("Please fill Job Title");
      return;
    }

    if (jobCat) {
      alert("Please fill Category!");
      return;
    }

    var dataToSend = {
      job_description: jobDesc,
      job_location: "Mumbai",
      job_title: jobTitle,
      servee_id: user.id,
      skill_id: 1,
      subcategory_id: 4,
      job_incentives: incentive,
      status: "active",
      minimum_experience: exp,
      job_duration: duration,
      //job_docs: "DxtBgHwVW1sDceBQ4JBh1pYI47zK5cQxRcGpyLKO.jpg",
      language: lang,
      working_hours: hours,
      status: "active",
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch("http://radiant-bastion-14577.herokuapp.com/api/jobscreate", {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        alert("Success");
        goBack();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const ModalCell = ({ placeholder, endIcon, title, editable, onPress }) => {
    return (
      <View style={[styles.cell, { marginVertical: 8 }]}>
        <Text style={styles.cellText}>{title}</Text>
        <TouchableOpacity onPress={onPress} style={styles.category}>
          <Text style={{ color: "#a9a9a9" }}>{placeholder}</Text>
          <MaterialCommunityIcons
            name="chevron-down"
            color={colors.primary}
            size={25}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const ModalView = () => (
    <Modal
      transparent
      animationType="slide"
      visible={modalVisible}
      style={styles.modal}
      inputs={false}
    >
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        activeOpacity={0.9}
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,.3)",
          justifyContent: "flex-end",
        }}
      >
        {/* <ScrollView style={{ maxHeight: "70%" }}> */}
        <TouchableOpacity
          onPress={() => null}
          activeOpacity={1}
          style={styles.modalContainer}
        >
          <Text style={styles.text}>Select a category</Text>

          <RadioButton />
          <RadioButton />
          <RadioButton />
          <RadioButton />
          <RadioButton />
          <RadioButton />
          <RadioButton />
          <RadioButton />
          <RadioButton />
          <RadioButton />
        </TouchableOpacity>
        {/* </ScrollView> */}
      </TouchableOpacity>
    </Modal>
  );
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <ModalView />

      <Header postJob onBack={() => goBack()} />

      <View style={styles.bottomHeader}>
        <Text style={[styles.text]}>Post Job</Text>
      </View>
      <View style={styles.cellContainer}>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Title</Text>
          <AppTextInput
            placeholder=""
            width="70%"
            onChangeText={(jobTitle) => setJobTitle(jobTitle)}
            end="0/50"
          />
        </View>
        <ModalCell
          title="Category "
          placeholder="e.g Software  "
          onPress={() => setModalVisible(!modalVisible)}
        />
        <ModalCell
          title="Sub-Category "
          placeholder="e.g. App Dev  "
          onPress={() => setModalVisible(!modalVisible)}
        />
        <ModalCell
          title="Location "
          placeholder="e.g. Bauchi  "
          onPress={() => setModalVisible(!modalVisible)}
        />
        <View style={styles.cell}>
          <Text style={styles.cellText}>Experience</Text>
          <AppTextInput
            placeholder="Years"
            width="25%"
            onChangeText={(exp) => setExp(exp)}
          />
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Duration</Text>
          <AppTextInput
            placeholder="Days"
            width="25%"
            onChangeText={(duration) => setDuration(duration)}
          />
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Incentive</Text>
          <AppTextInput
            placeholder="Naira"
            width="25%"
            onChangeText={(incentive) => setIncentive(incentive)}
          />
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Working Hours</Text>
          <AppTextInput
            placeholder="Hours"
            width="25%"
            onChangeText={(hours) => setHours(hours)}
          />
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Language</Text>
          <AppTextInput
            placeholder="e.g English"
            width="35%"
            onChangeText={(lang) => setLang(lang)}
          />
        </View>
        <View>
          <Text style={styles.cellText}>Details</Text>
          <View style={styles.detailInput}>
            <TextInput
              placeholder="Details"
              multiline={true}
              numberOfLines={10}
              style={{ textAlignVertical: "top" }}
              onChangeText={(jobDesc) => setJobDesc(jobDesc)}
              defaultValue="ation duis ea fugiat laborum eiusmod dolore sunt pariatur irure. Ex qui non nostrud eiusmod laboris in."
            />
          </View>
        </View>
      </View>
      <View style={{ margin: 10 }}>
        <View style={[styles.cell, { marginVertical: 5 }]}>
          <Text style={styles.text}>Attachments</Text>
          <View style={styles.cell}>
            {/* <View></View> */}
            <MaterialCommunityIcons
              name="paperclip"
              color={colors.primary}
              size={25}
              style={{ transform: [{ rotate: "90deg" }] }}
            />
            <Text style={{ fontSize: 16 }}>Upload a document</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.doc}>
            <View style={styles.docFooter}>
              <Text>xyz.pdf</Text>
            </View>
          </View>
          <View style={styles.doc}>
            <View style={styles.docFooter}>
              <Text>ABC.docx</Text>
            </View>
          </View>
        </View>
      </View>
      <SubmitButton
        title="Post job"
        textColor="#fff"
        onPress={() => postJobButton()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  text: { fontSize: 20, color: colors.primary, fontWeight: "bold" },
  bottomHeader: {
    elevation: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#f7f7f7",
  },
  cell: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: "10",
  },
  cellContainer: {
    padding: 10,
  },
  cellText: {
    fontSize: 20,
    color: "#a9a9a9",
    fontWeight: "bold",
  },
  category: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 1,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  detailInput: {
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 2,
    padding: 10,
    marginTop: 10,
  },
  doc: {
    borderWidth: 1,
    borderColor: "#a9a9a9",
    paddingTop: 30,
    width: 120,
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 10,
  },
  docFooter: {
    padding: 10,
    borderTopWidth: 1,
    backgroundColor: "#68B921",
  },
  modal: {
    // marginTop: 50,/
  },
  modalContainer: {
    paddingHorizontal: 25,
    paddingTop: 20,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // maxHeight: "50%",
    // alignSelf: "flex-end",
    // bottom: 0,
  },
});
