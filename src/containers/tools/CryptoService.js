import * as bigInt from "big-integer";
import sodium from "libsodium-wrappers";
import { keccak256 } from "ethers/lib/utils.js";

import * as secp from "@noble/secp256k1";
import { hmac } from "@noble/hashes/hmac";
import { sha256 } from "@noble/hashes/sha256";
import { ethers } from "ethers";

class CryptoService {
  constructor() {
    // this.secp256k1 = new EC('secp256k1');
  }

  static async init() {
    let instance = new CryptoService();
    await sodium.ready;
    return instance;
  }
  hashKeccak256(data = String) {
    data = sodium.from_hex(data);
    return ethers.utils.keccak256(data).slice(2);
  }
  byteArrayToHex(bytesArray = Uint8Array) {
    return sodium.to_hex(bytesArray);
  }
  encode(m = String, k = String) {
    let len = m.length >= k.length ? m.length : k.length;
    m = BigInt("0x" + m);
    k = BigInt("0x" + k);
    return (m ^ k).toString(16).padStart(len, "0");
  }
}

export default CryptoService;
