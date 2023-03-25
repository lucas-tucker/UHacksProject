import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNav from "./navigators/Navigator";

export default function App() {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
}