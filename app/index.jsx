import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useRouter } from "expo-router";

import loginBg from "@/assets/background/login-bg.png";
import userIcon from "@/assets/images/user-icon.png";
import passIcon from "@/assets/images/lock-icon.png";
import eyeIcon from "@/assets/images/eye-icon.png";
import { LinearGradient } from "expo-linear-gradient";

export default function index() {
  const [visibility, setVisibility] = useState(true);
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();
  const [errors, setErrors] = useState({});

  function handleUsername(text) {
    setUsername((u) => text);
  }

  function handlePass(text) {
    setPass((p) => text);
  }

  function handleVisibility() {
    setVisibility((v) => !visibility);
  }

  function validateForm() {
    let errors = {};

    if (!username) errors.username = "Username is required";
    if (!pass) errors.pass = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  function handleLogin() {
    if (validateForm()) {
      router.push("/home-screen");
      setUsername("");
      setPass("");
      setErrors({});
    }
  }

  function handleSignUp() {
    setUsername("");
    setPass("");
    setErrors({});
    router.push("/sign-up");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={loginBg}
        resizeMode="cover"
        style={styles.container}
      >
        <SafeAreaView style={styles.safeArea}>
          <LinearGradient
            style={styles.linearGradient}
            colors={[
              "rgba(0, 0, 0, 0.0)",
              "rgba(0, 0, 0, 0.2)",
              "rgba(0, 0, 0, 0.8)",
              "rgba(0, 0, 0, 0.8)",
            ]}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Welcome Back,{"\n"}Let's Start Cooking!
              </Text>
            </View>

            <View>
              <View style={styles.inputContainer}>
                <Image
                  source={userIcon}
                  style={styles.userIcon}
                  resizeMode="cover"
                />
                <TextInput
                  placeholder="Username"
                  style={styles.textInput}
                  onChangeText={handleUsername}
                  value={username}
                />
              </View>
              {errors.username ? (
                <Text style={styles.errorText}>{errors.username}</Text>
              ) : null}

              <View style={{ marginTop: 16 }} />

              <View style={styles.inputContainer}>
                <Image
                  source={passIcon}
                  style={styles.lockIcon}
                  resizeMode="cover"
                />
                <TextInput
                  placeholder="Password"
                  style={styles.textInput}
                  secureTextEntry={visibility}
                  onChangeText={handlePass}
                  value={pass}
                />
                <TouchableOpacity onPress={handleVisibility}>
                  <Image source={eyeIcon} style={styles.eyeIcon} />
                </TouchableOpacity>
              </View>
              {errors.pass ? (
                <Text style={styles.errorText}>{errors.pass}</Text>
              ) : null}

              <View style={{ marginTop: 44 }} />

              <View style={styles.signContainer}>
                <Text style={styles.signInText}>Don't have an account?</Text>
                <TouchableOpacity onPress={handleSignUp}>
                  <Text style={styles.touchableSignIn}> Sign up here</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => handleLogin()}
                style={styles.button}
              >
                <Text style={styles.buttonText}>LOG IN</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
  },

  linearGradient: {
    flex: 1,
    justifyContent: "space-between",
    padding: 24,
  },

  titleContainer: {
    marginTop: 24,
    flex: 1,
  },

  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 48,
    textShadowColor: "black",
    textShadowRadius: 20,
    textShadowOffset: { width: 4, height: 4 },
    flex: 1,
  },

  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    shadowColor: "black",
    elevation: 4,
    shadowOpacity: 0.36,
    borderRadius: 25,
    minHeight: 50,
    padding: 8,
    alignItems: "center",
  },

  userIcon: {
    marginHorizontal: 12,
    width: 20,
    height: 25,
  },

  lockIcon: {
    marginHorizontal: 12,
    width: 20,
    height: 26,
  },

  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#545454",
    fontWeight: "medium",
  },

  eyeIcon: {
    marginRight: 12,
    width: 25,
    height: 20,
  },

  signContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  signInText: {
    alignSelf: "center",
    marginBottom: 16,
    fontSize: 14,
    color: "white",
  },

  touchableSignIn: {
    fontSize: 14,
    color: "white",
  },

  button: {
    backgroundColor: "#F5B01C",
    borderRadius: 25,
    shadowColor: "black",
    elevation: 4,
    shadowOpacity: 0.36,
  },

  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    padding: 8,
  },

  errorText: {
    color: "#FF3131",
    marginLeft: 20,
    marginTop: 4,
    width: "40%",
  },
});
