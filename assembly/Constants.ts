import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Koincity Moon Boys"
  export const SYMBOL: string = "KCMB";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 75;
  export const URI: string = "https://bafybeididpafbao4s4xwaljndgtjc5it7kzxboftxm47vnrnwokfinlklq.ipfs.nftstorage.link/";
  export const OWNER: Uint8Array = Base58.decode("1AhGbSHUVaTWV1oqJRSTihsi2ofEvvYevg");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("");
}
