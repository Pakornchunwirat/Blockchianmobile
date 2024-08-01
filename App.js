import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./app/Navigation/Navigation.jsx"; // Import Navigation

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
