import React from "react";
import {
  Button,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";

const Home = ({ navigation }) => {
  const imageWidth = 500;
  const imageHeight = 375;

  return (
    <View style={styles.container}>
        <Text
            style={styles.header}
            >Student Hub
        </Text>
      <ImageBackground
        style={[styles.image]}
        source={require("../assets/UChicagoMap.webp")}
        resizeMode={"contain"}
      >
        <TouchableOpacity
          style={[styles.button, { left: imageWidth * 0.3, top: imageHeight * 0.3 }]}
          onPress={() => navigation.navigate("Cobb")}
        >
          <Text style={styles.text}>Cobb</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { left: imageWidth * 0.5, top: imageHeight * 0.85 }]}
          onPress={() => navigation.navigate("Harper")}
        >
          <Text style={styles.text}>Harper</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { left: imageWidth * 0.07, top: imageHeight * 0.7 }]}
          onPress={() => navigation.navigate("Crerar")}
        >
          <Text style={styles.text}>Crerar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { left: imageWidth * 0.45, top: imageHeight * 0.5 }]}
          onPress={() => navigation.navigate("Quad")}
        >
          <Text style={styles.text}>Quad</Text>
        </TouchableOpacity>
        
        {/* Add more buttons here */}
        
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    color: "maroon",
    fontWeight: "bold",
    fontSize: 40,
    marginLeft: "7%",
    fontFamily: "Lobster"
  },
  container: {
    flex: 1,
    height: "100%",
    width: "130%",
  },
  image: {
    flex: 1,
    width: 500,
    height: 375,
  },
  button: {
    backgroundColor: "white",
    width: 100,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute'
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Serif"
  },
});


   // <View style={styles.container}>
    //   <View style={styles.quadrant}>
    //     <TouchableOpacity
    //       style={styles.button}
    //       onPress={() => navigation.navigate("Cobb")}
    //     >
    //       <Image
    //         style={styles.image}
    //         source={require("../assets/Cobb.webp")}
    //         resizeMode={"contain"}
    //       />
    //       <Text style={styles.text}>Regenstein</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={styles.quadrant}>
    //     <TouchableOpacity
    //       style={styles.button}
    //       onPress={() => navigation.navigate("Quad")}
    //     >
    //       <Image
    //         style={styles.image}
    //         source={require("../assets/Quad.webp")}
    //         resizeMode={"contain"}
    //       />
    //       <Text style={styles.text}>Crerar</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={styles.quadrant}>
    //     <TouchableOpacity
    //       style={styles.button}
    //       onPress={() => navigation.navigate("Crerar")}
    //     >
    //       <Image
    //         style={styles.image}
    //         source={require("../assets/Crerar.webp")}
    //         resizeMode={"contain"}
    //       />
    //       <Text style={styles.text}>Baker</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={styles.quadrant}>
    //     <TouchableOpacity
    //       style={styles.button}
    //       onPress={() => navigation.navigate("Leather")}
    //     >
    //       <Image
    //         style={styles.image}
    //         source={require("../assets/leather.webp")}
    //         resizeMode={"contain"}
    //       />
    //       <Text style={styles.text}>Grounds of Being</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>

    