export default class Crypto {
  constructor(
    public id: string,
    public symbol: string,
    public name: string,
    public nameid: string,
    public rank: number,
    public price_usd: string,
    public percent_change_24h: string,
    public percent_change_1h: string,
    public percent_change_7d: string,
    public price_btc: string,
    public market_cap_usd: string,
    public volume24: number,
    public volume24a: number,
    public csupply: string,
    public tsupply: string,
    public msupply: string
  ) {}
}
