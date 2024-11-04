import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import React, { createContext, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";

import searchIcon from "@/assets/images/search-icon.png";

import { FOOD_DATA } from "@/constants/recipe-data";
import { CATEGORY_DATA } from "@/constants/category";
import { StatusContext } from "@/context/FoodContext";

export default function HomeScreen() {
  const router = useRouter();
  const { foodData } = useContext(StatusContext);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Hello, User!{"\n"}What are we cooking today?
          </Text>

          <View style={styles.searchBar}>
            <Image source={searchIcon} style={styles.searchIcon} />
            <TextInput
              placeholder="Search recipes..."
              style={styles.searchInput}
            />
          </View>

          {/* Category section */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {CATEGORY_DATA.map((category) => (
              <TouchableOpacity style={styles.categoryButton} key={category.id}>
                <View style={styles.categoryImgCont}>
                  <Image source={category.icon} style={styles.categoryImage} />
                </View>

                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Food section */}
        <View style={styles.container}>
          <FlatList
            data={foodData}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                onPress={() => router.push(`/detail/${item.id}`)}
              >
                <ImageBackground source={item.image} style={styles.foodImages}>
                  <LinearGradient
                    style={styles.foodDescCont}
                    colors={[
                      "rgba(0, 0, 0, 0.4)",
                      "transparent",
                      "rgba(0, 0, 0, 0.6)",
                    ]}
                  >
                    <View style={styles.foodDesc}>
                      <Text style={styles.foodHeader}>{item.category}</Text>

                      <View style={styles.foodHeaderStatus}>
                        <Text style={styles.foodHeader}>
                          Status: {item.status}
                        </Text>

                        <Text style={styles.foodHeader}>{item.duration}</Text>
                      </View>
                    </View>

                    <Text style={styles.foodName}>{item.name}</Text>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            )}
          ></FlatList>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    margin: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "black",
  },

  searchBar: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 8,
    alignItems: "center",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#F5B01C",
  },

  searchIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },

  searchInput: {
    fontSize: 16,
    flex: 1,
  },

  categoryButton: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },

  categoryImgCont: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 100,
    borderColor: "#F5B01C",
    borderWidth: 1,
  },

  categoryImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  categoryName: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "400",
    marginTop: 4,
  },

  card: {
    borderRadius: 20,
    elevation: 8,
    backgroundColor: "white",
    shadowColor: "black",
    flex: 1,
    marginHorizontal: 24,
    overflow: "hidden",
    marginBottom: 24,
  },

  foodImages: {
    width: "100%",
    height: 450,
    resizeMode: "cover",
  },

  foodDescCont: {
    flex: 1,
    justifyContent: "space-between",
    padding: 24,
  },

  foodDesc: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: -4,
  },

  foodHeader: {
    fontSize: 16,
    fontWeight: "medium",
    color: "white",
  },

  foodHeaderStatus: {
    alignItems: "flex-end",
  },

  foodDuration: {
    color: "white",
    fontWeight: "medium",
    fontSize: 14,
  },

  foodName: {
    fontWeight: "600",
    fontSize: 32,
    color: "white",
    width: "50%",
  },
});
