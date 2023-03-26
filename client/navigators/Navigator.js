import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Home from "../screens/Home";
import Harper from "../screens/Harper";
import Metal from "../screens/Metal";
import Paper from "../screens/Paper";
import Cobb from "../screens/Cobb";

const Stack = createNativeStackNavigator();

const MainNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Harper" component={Harper} />
      <Stack.Screen name="Metal" component={Metal} />
      <Stack.Screen name="Paper" component={Paper} />
      <Stack.Screen name="Cobb" component={Cobb} />
    </Stack.Navigator>
  );
};

export default MainNav;
