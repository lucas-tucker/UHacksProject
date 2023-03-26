import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Home from "../screens/Home";
import Harper from "../screens/Harper";
import Crerar from "../screens/Crerar";
import Quad from "../screens/Quad";
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
      <Stack.Screen name="Crerar" component={Crerar} />
      <Stack.Screen name="Quad" component={Quad} />
      <Stack.Screen name="Cobb" component={Cobb} />
    </Stack.Navigator>
  );
};

export default MainNav;
