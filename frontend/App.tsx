import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Layout from "./src/Components/LayoutArea/Layout";
import store from "./src/Redux/Store";
import authService from "./src/Service/AuthService";
import interceptorService from "./src/Service/InterceptorService";

export default function App() {

    const [isLogin, setIsLogin] = useState<string>();

    useEffect(() => {

        // Default login when component starts: 
        authService.login({ password: "1234", userName: "lior" })
        .then(() => {
          setIsLogin(store.getState().authState.token)
      })
      .catch(err => alert(err.message));
      

    }, []);

    // Create interceptors:
    interceptorService.createInterceptors()

  return (
      <SafeAreaProvider style={styles.container}>

        {isLogin&&
        
        <Layout/>

        }

      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
