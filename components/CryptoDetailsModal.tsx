import { Button, Modal, StyleSheet, Text, View } from "react-native";
import Crypto from "@/models/Crypto";

interface Props {
  visible: boolean;
  crypto: Crypto | null;
  onClose: () => void;
}

export default function CryptoDetailsModal({ visible, crypto, onClose }: Props) {
  if (!crypto) return null;

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{crypto.name}</Text>
        <Text>Symbol: {crypto.symbol}</Text>
        <Text>Price: {crypto.formattedPrice}</Text>
        <Text>Change (24h): {crypto.percent_change_24h}%</Text>
        <Button title="Cerrar" onPress={onClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
