import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import Layout from "./src/Components/LayoutArea/Layout";
import store from "./src/Redux/Store";
import authService from "./src/Service/AuthService";
import interceptorService from "./src/Service/InterceptorService";

export default function App() {

    const [isLogin, setIsLogin] = useState<string>();

    useEffect(() => {

        // Default login when component starts: 
        const login = async()=> await authService.login({password:'1234',userName:'lior'})
        login().then(()=>setIsLogin(store.getState().authState.token))
        
    }, []);

    // Create interceptors:
    interceptorService.createInterceptors()

  return (
      <SafeAreaView style={styles.container}>
        {isLogin&&
        
        <Layout/>
        }
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
