import React, { useState } from "react";
const axios = require('axios')
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
} from "react-native";

// When testing locally, use the local machine IP address instead of localhost (which is used for postman)! Spent me 3 hours to figure out the issue...
const serverLink = 'http://10.150.56.48:3414/predict/';

const logEvent = (consoleLogMessage) => {
  console.log("-".repeat(60));
  console.log(new Date().toUTCString());
  console.log(consoleLogMessage);
}

/* Tutorial from this link: 

https://aboutreact.com/react-native-get-clicked-location-of-touchscreen-using-panresponder/#:~:text=React%20Native%20App-,PanResponder,application%20development%20in%20React%20Native

*/

const Leather = ({ navigation }) => {
  const [locationX, setLocationX] = useState(0);
  const [locationY, setLocationY] = useState(0);
  const [serverMessage, setServerMessage] = useState("ready to talk to server");
  const [loading, setLoading] = useState(false);


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
      sendRequest();
    }
  });

  const sendRequest = async () => {

    // The state loading tells us when we are in the midst of a request
    // prevents any potential deadlock scenearios or meaningless requests
    if (loading) {
      return;
    }

    setLoading(true);
    setServerMessage("Loading...");

    const requestString = JSON.stringify({ arg1: Math.round(locationX), arg2: Math.round(locationY) });
    logEvent("Request to Server: X=" + locationX.toString() + ", Y=" + locationY.toString());

    const instance = axios.create({
      baseURL: serverLink,
      timeout: 2000,
      headers: { 'Content-Type': 'application/json' }
    });

    try {
      // Send the request arguments to the server in the form of a JSON string
      // If the next line runs properly, everything in this block should run
      result = await instance.post('/', requestString);
      logEvent("Success: " + result.data.toString())
      setServerMessage(result.data.toString());
      setLoading(false);
    }
    catch (err) {
      // Else we have an error, which we will log in console
      // Note that we set loading to False in either case
      logEvent("Failed: ", err.stack)
      setServerMessage("Request failed... Try again later!");
      setLoading(false);
    }
  }

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

export default Leather;

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
    backgroundColor: "#624a2e",
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
