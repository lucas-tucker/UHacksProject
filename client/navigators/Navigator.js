import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Home from "../screens/Home";
import Leather from "../screens/Leather";
import Metal from "../screens/Metal";
import Paper from "../screens/Paper";
import Wood from "../screens/Wood";

const Stack = createNativeStackNavigator();

const MainNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Leather" component={Leather} />
      <Stack.Screen name="Metal" component={Metal} />
      <Stack.Screen name="Paper" component={Paper} />
      <Stack.Screen name="Wood" component={Wood} />
    </Stack.Navigator>
  );
};

export default MainNav;
