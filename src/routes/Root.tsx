import React from "react";
import { NativeBaseProvider } from "native-base";
import RootNavigator from "./RootNavigator";
import theme from "./Theme";

export default function Root() {
  return (
    <NativeBaseProvider theme={theme}>
      <RootNavigator />
    </NativeBaseProvider>
  );
}
