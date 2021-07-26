import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import OnBoardingTab from "../components/OnBoardingTab";
import SubmitButton from "../components/SubmitButton";
import colors from "../config/colors";

export default function OnBoardingScreen({ navigation: { navigate } }) {
  const { width, height } = Dimensions.get("window");
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const [endReached, setEndReached] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slider = useRef(null);
  const card = [
    {
      id: 1,
      title: "A robust network\nof skilled workmen",
      subtitle: "Find the right fit\nfor your hiring needs.",
      image: require("../../assets/onBoarding1.png"),
    },
    {
      id: 2,
      title: "Post your jobs and\nget proposals",
      subtitle: "Carefully select the\nbest man for your job",
      image: require("../../assets/onBoarding2.png"),
    },
    {
      id: 3,
      title: "Take advantage of\nour escrow platform",
      subtitle: "Release your payments\nonly for a job well-done",
      image: require("../../assets/onBoarding3.png"),
    },
    {
      id: 4,
      title: "Make & Receive\nPayments Easily",
      subtitle: "Take advantage of our\nreliable gateways.",
      image: require("../../assets/onBoarding4.png"),
    },
  ];
  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const val = Math.round(value / width);
      setCurrentIndex(val);
    });

    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  //   console.log(index);

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={{ width: "85%", height: "85%", resizeMode: "contain" }}
          source={card[currentIndex].image}
        />
      </View>
      <View style={styles.bottomSheet}>
        <Animated.FlatList
          ref={slider}
          showsHorizontalScrollIndicator={false}
          data={card}
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          //   scrollEnabled={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          keyExtractor={(data) => data.id.toString()}
          renderItem={({ item }) => (
            <OnBoardingTab title={item.title} subTitle={item.subtitle} />
          )}
        />
      </View>
      {currentIndex < card.length - 1 && (
        <View style={{ position: "absolute", bottom: 20, alignSelf: "center" }}>
          <FlatList
            data={card}
            horizontal
            keyExtractor={(data) => data.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      index === currentIndex ? colors.secondary : "#fff",
                  },
                ]}
              />
            )}
          />
        </View>
      )}
      <View style={{ position: "absolute", bottom: 10 }}>
        <Text onPress={() => navigate("Welcome")}></Text>
      </View>
      {currentIndex === card.length - 1 && (
        <View
          style={{
            position: "absolute",
            bottom: 15,
            width: "100%",
            alignItems: "center",
          }}
        >
          <SubmitButton
            title="Enter"
            fontSize={25}
            onPress={() => navigate("Welcome")}
            textColor="#ffffff"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    backgroundColor: "#F6F6F6",
    justifyContent: "flex-end",
  },
  image: {
    height: "55%",
    // backgroundColor: "red",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomSheet: {
    backgroundColor: colors.primary,
    height: "40%",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  indicator: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    flexDirection: "row",
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: colors.secondary,
    margin: 3,
  },
});
