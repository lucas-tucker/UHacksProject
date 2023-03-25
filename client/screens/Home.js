import React from "react";
import {
  Button,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.quadrant}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Wood")}
        >
          <Image
            style={styles.image}
            source={require("../assets/wood.webp")}
            resizeMode={"contain"}
          />
          <Text style={styles.text}>Wood</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.quadrant}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Paper")}
        >
          <Image
            style={styles.image}
            source={require("../assets/paper.webp")}
            resizeMode={"contain"}
          />
          <Text style={styles.text}>Paper</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.quadrant}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Metal")}
        >
          <Image
            style={styles.image}
            source={require("../assets/metal.webp")}
            resizeMode={"contain"}
          />
          <Text style={styles.text}>Metal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.quadrant}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Leather")}
        >
          <Image
            style={styles.image}
            source={require("../assets/leather.webp")}
            resizeMode={"contain"}
          />
          <Text style={styles.text}>Leather</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection: "reverse-row",
    backgroundColor: "transparent",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "bottom",
    marginBottom: "20%",
  },
  quadrant: {
    width: "50%",
    height: "50%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "85%",
    height: "90%",
    backgroundColor: "white",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgray",
  },
  image: {
    width: "80%",
    height: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text: {
    fontSize: 30,
    color: "gray",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 0,
  },
});