import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  PanResponder,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Button,
  Animated,
  ImageBackground,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import Entypo from "@expo/vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";

const ModalSteps = ({ visible, onClose, data, sendData }) => {
  const steps = Number(data.steps.length);
  const [currentStep, setCurrentStep] = useState(0);
  const progress = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);

  // Aktif ketika modal visible dan bekerja untuk men-scroll ke state scroll sebelumnya
  useEffect(() => {
    if (visible && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: scrollPos, animated: false });
    }
  }, [visible]);

  // Aktif ketika terjadi perubahan pada currentSteps dan steps. Berfungsi untuk memberikan animasi pada progress bar
  useEffect(() => {
    Animated.timing(progress, {
      toValue: (currentStep + 1) / steps,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [currentStep, steps]);

  // Berfungsi untuk mengatur scroll serta memperbarui step
  function handleScroll(event) {
    const newScrollPos = event.nativeEvent.contentOffset.x;
    setScrollPos((s) => newScrollPos);
    setCurrentStep((s) =>
      Math.round(newScrollPos / (Dimensions.get("window").width - 48))
    );
  }

  function handleDone() {
    if (currentStep === steps - 1) {
      setScrollPos((s) => 0);
      setCurrentStep((c) => 0);
      sendData("Not cooking");
    }
    onClose();
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        <TouchableOpacity onPress={onClose} style={styles.back}>
          <Entypo name="cross" size={40} color="black" />
        </TouchableOpacity>

        <View style={styles.container}>
          <Text style={styles.title}>PROGRESS</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.barContainer}>
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          ></Animated.View>
        </View>

        <View style={styles.progressCont}>
          <Text style={styles.progress}>Number of steps: {steps}</Text>

          <Text style={styles.progress}>Current step: {currentStep + 1}</Text>
        </View>

        <View style={styles.recipeCont}>
          <Text style={styles.title}>RECIPE</Text>
        </View>

        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {data.steps.map((item, index) => (
            <View key={index} style={styles.stepsCont}>
              <Text style={styles.steps}>{item}</Text>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => handleDone()}
        >
          <Text style={styles.doneText}>DONE</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalSteps;

const styles = StyleSheet.create({
  modalView: {
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    flex: 1,
    marginTop: 200,
    padding: 24,
    backgroundColor: "white",
  },

  back: {
    position: "absolute",
    top: "2%",
    left: "4%",
  },

  container: {
    marginTop: 40,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  progressCont: {
    marginTop: 8,
  },

  progress: {
    fontWeight: "medium",
  },

  recipeCont: {
    marginTop: 20,
  },

  barContainer: {
    height: 20,
    borderRadius: 4,
    backgroundColor: "#E5E5E5",
    overflow: "hidden",
  },

  progressBar: {
    backgroundColor: "#23BDFF",
    height: "100%",
  },

  stepsCont: {
    height: Dimensions.get("window").width - 120,
    width: Dimensions.get("window").width - 48,
    justifyContent: "center",
    alignItems: "center",
  },

  steps: {
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 16,
    height: 260,
    width: 330,
    textAlignVertical: "center",
    elevation: 4,
    padding: 16,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  doneButton: {
    backgroundColor: "#F5B01C",
    borderRadius: 8,
    marginBottom: 12,
  },

  doneText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 8,
  },
});
