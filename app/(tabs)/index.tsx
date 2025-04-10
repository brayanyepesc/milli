import { Image, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useEffect } from "react";
import CryptoService from "@/services/CryptoService";

export default function HomeScreen() {
  useEffect(() => {
    CryptoService.getCryptos().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/home-property-bg.webp")}
          style={styles.headerBg}
        />
      }
    ></ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerBg: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
