import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ImagesListComponent from "../Shared/ImagesList";
import NavigationButton from "../Shared/Elements/Buttons/NavigationButton";
import SelectButton from "../Shared/Elements/Buttons/SelectButton";

export default function Layout(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.header}>
        {[
          <NavigationButton key={"next"} title="next" />,
          <SelectButton key={"SelectButton"} />,
          <NavigationButton key={"prev"} title="prev" />,
        ]}
      </SafeAreaView>

      <SafeAreaView style={styles.main}>
        <ImagesListComponent />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    position: "relative",
  },
  header: {
    flex: 3,
    flexDirection: "row",
    position: "relative",
    zIndex: 3,
  },
  main: {
    flex: 5,
    position: "relative",
    zIndex: -1,
  },
});
