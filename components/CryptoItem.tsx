// components/CryptoList.tsx
import Crypto from "@/models/Crypto";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface CryptoListProps {
  item: Crypto;
  onPress?: (id: string) => void;
}

const CryptoItem: React.FC<CryptoListProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress && onPress(item.id)}>
      <View style={styles.container}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price_usd} USD</Text>
        </View>
        <View style={styles.symbolContainer}>
          <Text style={styles.symbol}>{item.symbol}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    gap: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  symbolContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 8,
    alignItems: "center",
  },
  symbol: {
    fontSize: 14,
    color: "gray",
  },
  price: {
    fontSize: 16,
    color: "green",
  },
  change: {
    fontSize: 14,
    color: "blue",
  },
});

export default React.memo(CryptoItem);
