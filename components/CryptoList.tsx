import Crypto from "@/models/Crypto";
import CryptoItem from "./CryptoItem";
import { View } from "react-native";

interface Props {
  data: Crypto[];
  onPressItem: (id: string) => void;
}

export default function CryptoList({ data, onPressItem }: Props) {
  return (
    <View>
      {data.map((crypto) => (
        <CryptoItem key={crypto.id} item={crypto} onPress={onPressItem} />
      ))}
    </View>
  );
}
