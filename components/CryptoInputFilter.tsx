import { StyleSheet, TextInput } from "react-native";

interface Props {
  value: string;
  onChange: (text: string) => void;
}

export default function CryptoFilter({ value, onChange }: Props) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Filtrar criptomonedas"
      value={value}
      onChangeText={onChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 0,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
});
