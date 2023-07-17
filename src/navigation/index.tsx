import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import { ConstantsNavigation } from "./constants";
import CustomTheme from "./theme";
import Create from "../screens/create";
import { Size } from "../theme/Layout";
import Colors from "../theme/Colors";
import { Text } from "react-native";
import { Button } from "../components/button";

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={CustomTheme}>
      <Stack.Navigator
        initialRouteName={ConstantsNavigation.NAME_HOME}
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        }}
      >
        <Stack.Screen
          name={ConstantsNavigation.NAME_HOME}
          component={Home}
          options={{
            headerTitle: "",
            headerRight: () => <Button.Add />,
            headerLeft: () => (
              <Text
                style={{
                  fontSize: Size.s24,
                  fontWeight: "bold",
                  color: Colors.white,
                }}
              >
                {ConstantsNavigation.TITLE_HOME}
              </Text>
            ),
          }}
        />
        <Stack.Screen
          name={ConstantsNavigation.NAME_CREATE}
          component={Create}
          options={{
            headerShown: false,
            headerTitle: "",
            headerLeft: () => (
              <Button.Back title={ConstantsNavigation.TITLE_CREATE} />
            ),
            headerRight: () => <Button.Save />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
