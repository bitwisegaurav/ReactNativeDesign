import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Design1 from "./designs/design1/App";
import Design2 from "./designs/design2/Design2";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Design2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
