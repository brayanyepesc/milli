import { StyleSheet, Linking, Button } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function TabTwoScreen() {
  const handleDownloadCV = () => {
    Linking.openURL(
      "https://drive.google.com/file/d/1RksSl13KPS_UQ8FhFKvnxuXrhXq_6RXw/view?usp=sharing"
    );
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Brayan Yepes</ThemedText>
      </ThemedView>
      <ThemedText>Acá puedes ver mi información</ThemedText>
      <Collapsible title="LinkedIn">
        <ThemedText>Visita mi perfil profesional:</ThemedText>
        <ExternalLink href="https://www.linkedin.com/in/brayan-yepes/">
          {" "}
          {/* 🔁 Cambia al tuyo */}
          <ThemedText type="link">linkedin.com/in/brayan-yepes</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Mi cv">
        <Button title="Descargar CV" onPress={handleDownloadCV} />
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
