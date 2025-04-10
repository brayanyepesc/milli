import Crypto from "@/models/Crypto";
import axios from "axios";

class CryptoService {
  async getCryptos(): Promise<Crypto[]> {
    try {
      const response = await axios.get(`${process.env.API_URL}/tickers/`);
      if (!response.data?.data)
        throw new Error("Estructura de respuesta inválida");
      return response.data.data.map(Crypto.fromJson);
    } catch (error) {
      throw new Error("Error al obtener criptomonedas");
    }
  }
  async getCryptoDetail(id: string): Promise<Crypto> {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/ticker/?id=${id}`
      );
      if (!response.data[0])
        throw new Error("Estructura de respuesta inválida");
      return Crypto.fromJson(response.data[0]);
    } catch (error) {
      throw new Error("Error al obtener criptomonedas");
    }
  }
}

export default new CryptoService();
