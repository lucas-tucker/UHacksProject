import React, { useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
} from "react-native";

/* Tutorial from this link: 

https://aboutreact.com/react-native-get-clicked-location-of-touchscreen-using-panresponder/#:~:text=React%20Native%20App-,PanResponder,application%20development%20in%20React%20Native

*/

const Name = ({ navigation }) => {
  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);
  const [serverMessage, setServerMessage] = useState("ready to talk to server");
  

  //panResponder initialization
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
    onPanResponderGrant: (event, gestureState) => false,
    onPanResponderMove: (event, gestureState) => false,

    onPanResponderRelease: (event, gestureState) => {
      //After the change in the location
      //state will be upated to re-render the screen and show the location in view
      setLocationX(event.nativeEvent.locationX.toFixed(2));
      setLocationY(event.nativeEvent.locationY.toFixed(2));
    },
  });

  return (
    <View style={styles.container}>
      {/*View to show green dot where user touched*/}
      <View
        style={[
          styles.tapAnimation,
          {
            top: parseFloat(locationY - 0.45 * styles.tapAnimation.height),
            left: parseFloat(locationX - 0.5 * styles.tapAnimation.width),
          },
        ]}
      />
      {/*Text to show the screen location we get*/}
      <Text
        style={[
          styles.text,
          {
            top: parseFloat(locationY - 75),
            left: parseFloat(locationX - 15),
          },
        ]}
      >
        X: {Math.round(locationX)}, Y: {Math.round(locationY)} {"\n"}
        {serverMessage}
      </Text>
      {/*We will get the position of the touch on below View*/}
      <View style={styles.handler} {...panResponder.panHandlers} />
    </View>
  );
};

export default Name;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    height: "100%",
    width: "100%",
    backgroundColor: "black",
  },
  tapAnimation: {
    height: 100,
    width: 100,
    borderRadius: 200,
    position: "absolute",
    backgroundColor: "#deb887",
  },
  text: {
    fontSize: 10,
    position: "absolute",
    color: "white",
  },
  handler: {
    flex: 1,
    backgroundColor: "transparent",
  },
});
