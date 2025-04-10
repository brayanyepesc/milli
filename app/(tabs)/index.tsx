import { Image, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useCallback, useEffect, useMemo, useState } from "react";
import CryptoService from "@/services/CryptoService";
import Crypto from "@/models/Crypto";
import CryptoFilter from "@/components/CryptoInputFilter";
import CryptoList from "@/components/CryptoList";
import CryptoDetailsModal from "@/components/CryptoDetailsModal";

export default function HomeScreen() {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [filter, setFilter] = useState("");
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    CryptoService.getCryptos().then(setCryptos);
  }, []);

  const filteredCryptos = useMemo(() => {
    return cryptos.filter((c) =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [cryptos, filter]);

  const handleCryptoPress = useCallback(async (id: string) => {
    try {
      const cryptoDetail = await CryptoService.getCryptoDetail(id);
      setSelectedCrypto(cryptoDetail);
      setModalVisible(true);
    } catch (error) {
      console.error("Error al obtener detalle:", error);
    }
  }, []);

  const closeModal = useCallback(() => {
    setModalVisible(false);
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
    >
      <CryptoFilter value={filter} onChange={setFilter} />
      <CryptoList data={filteredCryptos} onPressItem={handleCryptoPress} />
      <CryptoDetailsModal
        visible={modalVisible}
        crypto={selectedCrypto}
        onClose={closeModal}
      />
    </ParallaxScrollView>
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
