import Crypto from "@/models/Crypto";
import axios from "axios";

class CryptoService {
  private API_URL = process.env.API_URL;
  async getCryptos(): Promise<Crypto[]> {
    const response = await axios.get(`${this.API_URL}/tickers/`);
    return response.data.data;
  }
  //   async getCryptoDetail(id: string): Promise<Crypto> {
  //     const response = await axios.get(`${this.API_URL}/ticker/?id=${id}`);
  //     return new Crypto(response.data[0]);
  //   }
}

export default new CryptoService();
