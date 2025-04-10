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
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.symbol}>{item.symbol}</Text>
        <Text style={styles.price}>${item.price_usd}</Text>
        <Text style={styles.change}>{item.percent_change_24h}% (24h)</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
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
