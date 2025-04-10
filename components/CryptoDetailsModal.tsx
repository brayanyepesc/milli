import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Crypto from "@/models/Crypto";

interface Props {
  visible: boolean;
  crypto: Crypto | null;
  onClose: () => void;
}

export default function CryptoDetailsModal({
  visible,
  crypto,
  onClose,
}: Props) {
  if (!crypto) return null;

  const isPositive = parseFloat(crypto.price_usd) >= 0;

  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
      transparent
    >
      <SafeAreaView style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.title}>{crypto.name}</Text>
          <Text style={styles.symbol}>({crypto.symbol})</Text>
          <Text style={styles.price}>{crypto.formattedPrice}</Text>
          <Text
            style={[
              styles.change,
              isPositive ? styles.positive : styles.negative,
            ]}
          >
            {crypto.price_usd} USD
          </Text>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 24,
    width: "100%",
    maxWidth: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 4,
  },
  symbol: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 20,
  },
  change: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },
  positive: {
    color: "green",
  },
  negative: {
    color: "red",
  },
  closeButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
