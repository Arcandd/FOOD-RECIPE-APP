import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Button,
  Image,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList } from "react-native";
import { useContext } from "react";

import ModalSteps from "../../components/modal-steps";
import { FOOD_DATA } from "@/constants/recipe-data";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { StatusContext } from "../../context/FoodContext";

export default function Detail() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { foodData, updateFoodStatus } = useContext(StatusContext);
  const data = foodData[Number(id) - 1];
  const [isModalVisible, setModalVisible] = useState(false);

  function handleCooking() {
    updateFoodStatus(Number(id), "Cooking");
    setModalVisible(!isModalVisible);
  }

  function handleData(value) {
    updateFoodStatus(Number(id), value);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={data.imageDetail}
        style={styles.background}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["transparent", "white"]}
          style={styles.linearGradient}
        />

        <LinearGradient
          colors={["rgba(0, 0, 0, 0.4)", "transparent", "transparent"]}
          style={{ flex: 1 }}
        >
          <SafeAreaView style={styles.safeArea}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <AntDesign name="arrowleft" size={40} color="white" />
            </TouchableOpacity>

            <FlatList
              ListHeaderComponent={
                <View>
                  <View style={styles.header}>
                    <Text style={styles.title}>{data.name}</Text>

                    <View style={{ alignItems: "flex-end" }}>
                      <View
                        style={{ flexDirection: "row", alignItems: "baseline" }}
                      >
                        <Entypo name="back-in-time" size={12} color="gray" />
                        <Text style={styles.duration}>{data.duration}</Text>
                      </View>

                      <Text style={styles.status}>{data.status}</Text>
                    </View>
                  </View>

                  <Text style={styles.description}>{data.desc}</Text>

                  <Text style={styles.ingredients}>Ingredients:</Text>
                </View>
              }
              data={data.materials}
              keyExtractor={(index) => index.toString()}
              showVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Text style={styles.ingredientsList}> • {item}</Text>
              )}
              style={{ maxHeight: 240 }}
            />

            <View>
              <TouchableOpacity
                style={styles.cookButton}
                onPress={() => handleCooking()}
              >
                <Text style={styles.cookText}>START COOKING</Text>
              </TouchableOpacity>

              <ModalSteps
                visible={isModalVisible}
                onClose={() => setModalVisible(!isModalVisible)}
                data={data}
                sendData={handleData}
              />
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  background: {
    flex: 1,
    height: 500,
  },

  safeArea: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
  },

  backButton: {
    position: "absolute",
    top: "6%",
    left: "4%",
  },

  linearGradient: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: 400,
    bottom: "39%",
  },

  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 15,
    width: "90%",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#515151",
    marginBottom: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  duration: {
    fontWeight: "medium",
    marginLeft: 4,
    color: "gray",
  },

  status: {
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
    marginBottom: 12,
  },

  ingredients: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 4,
  },

  ingredientsList: {
    fontSize: 14,
    fontWeight: "normal",
    lineHeight: 20,
  },

  cookButton: {
    backgroundColor: "#F5B01C",
    marginTop: 24,
    padding: 12,
    alignItems: "center",
    borderRadius: 4,
  },

  cookText: {
    color: "white",
    fontWeight: "800",
    fontSize: 16,
  },
});
