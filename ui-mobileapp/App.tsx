import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";

import theme from "./src/theme/theme";
import RootStackNavigator from "./src/navigation/RootStackNavigator";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}