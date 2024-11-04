import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import signUpBg from "@/assets/background/login-bg.png";
import userIcon from "@/assets/images/user-icon.png";
import passIcon from "@/assets/images/lock-icon.png";
import passIconIO from "@/assets/images/lock-icon-io.png";
import eyeIcon from "@/assets/images/eye-icon.png";
import emailIcon from "@/assets/images/email-icon.png";
import { LinearGradient } from "expo-linear-gradient";

export default function SignUp() {
  const [visibility, setVisibility] = useState(true);
  const [cvisibility, setCVisibility] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("");
  const router = useRouter();
  const [errors, setErrors] = useState({});

  function handleUsername(text) {
    setUsername((u) => text);
  }

  function handleEmail(text) {
    setEmail((e) => text);
  }

  function handlePass(text) {
    setPass((p) => text);
  }

  function handleCPass(text) {
    setCPass((c) => text);
  }

  function handleVisibility() {
    setVisibility((v) => !visibility);
  }

  function handleCVisibility() {
    setCVisibility((c) => !cvisibility);
  }

  function handleLogIn() {
    setUsername("");
    setEmail("");
    setPass("");
    setCPass("");
    setErrors({});
    router.back();
  }

  function validateForm() {
    let errors = {};

    if (!username) errors.username = "Username is required";
    if (!email) errors.email = "Email is required";
    if (!pass) errors.pass = "Password is required";
    if (!cpass || cpass !== pass) errors.cpass = "Password is not the same";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  function handleSignUp() {
    if (validateForm()) {
      router.push("/home-screen");
      setUsername("");
      setEmail("");
      setPass("");
      setCPass("");
      setErrors({});
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={signUpBg}
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
                Discover Your Dream Recipes,{"\n"}Sign Up Today!
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
                  source={emailIcon}
                  style={styles.emailIcon}
                  resizeMode="cover"
                />
                <TextInput
                  placeholder="Email"
                  style={styles.textInput}
                  onChangeText={handleEmail}
                  value={email}
                />
              </View>
              {errors.email ? (
                <Text style={styles.errorText}>{errors.email}</Text>
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

              <View style={{ marginTop: 16 }} />

              <View style={styles.inputContainer}>
                <Image
                  source={passIconIO}
                  style={styles.lockIcon}
                  resizeMode="cover"
                />
                <TextInput
                  placeholder="Confirm password"
                  style={styles.textInput}
                  secureTextEntry={cvisibility}
                  onChangeText={handleCPass}
                  value={cpass}
                />
                <TouchableOpacity onPress={handleCVisibility}>
                  <Image source={eyeIcon} style={styles.eyeIcon} />
                </TouchableOpacity>
              </View>
              {errors.cpass ? (
                <Text style={styles.errorText}>{errors.cpass}</Text>
              ) : null}

              <View style={{ marginTop: 44 }} />

              <View style={styles.signContainer}>
                <Text style={styles.signInText}>Don't have an account?</Text>
                <TouchableOpacity onPress={handleLogIn}>
                  <Text style={styles.touchableSignIn}> Sign up here</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => {
                  handleSignUp();
                }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>SIGN UP</Text>
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

  emailIcon: {
    width: 20,
    height: 14,
    marginHorizontal: 12,
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
    width: "50%",
  },
});
