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
  private get formattedPrice(): string {
    const price = parseFloat(this.price_usd);
    return isNaN(price)
      ? "N/A"
      : new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price);
  }
  static fromJson(data: any): Crypto {
    const crypto = new Crypto(
      data.id,
      data.symbol,
      data.name,
      data.nameid,
      data.rank,
      data.price_usd,
      data.percent_change_24h,
      data.percent_change_1h,
      data.percent_change_7d,
      data.price_btc,
      data.market_cap_usd,
      data.volume24,
      data.volume24a,
      data.csupply,
      data.tsupply,
      data.msupply
    );
    crypto.price_usd = crypto.formattedPrice;
    return crypto;
  }
}
