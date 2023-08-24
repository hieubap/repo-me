import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import ellip from "elliptic";
import CryptoService from "./CryptoService";
import createHash from "create-hash";
import QrReader from 'react-qr-scanner'
import Camera from "../Camera";
// import bigInt from "big-integer";
// import { createHash } from "crypto";

const EC = ellip.ec;

function ConvertPrivatePhrase() {
  const [state, _setState] = useState({});
  const setState = (data) => {
    _setState((pre) => ({ ...pre, ...data }));
  };

  const onConvert = () => {
    const wallet = ethers.Wallet.fromPhrase(state.privatePhrases);
    setState({
      address: wallet.address,
      privateKey: wallet.privateKey,
    });
  };

  const signature = "1234567890";

  const setup = async () => {
    let crypto = await CryptoService.init();
    let ec = new EC("secp256k1");
    //
    let keyHash = crypto.hashKeccak256(signature);
    let keypair = ec.genKeyPair({ entropy: keyHash });
    let privateKey = keypair.getPrivate().toString(16);
    let publicKey = crypto.byteArrayToHex(
      Uint8Array.from(keypair.getPublic().encode())
    );
    let x = createHash("sha256").update(Buffer.from("1", "hex")).digest("hex");
    console.log([publicKey, privateKey], "publicKey,privateKey");
    setState({
      publicKey,
      privateKey,
      cipher: crypto.encode(123, x),
    });
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <div>
      <Camera />
      {/* <QrReader
        // delay={this.state.delay}
        style={{}}
        onError={() => {}}
        onScan={() => {}}
      /> */}
      {/* <input
        value={state.privatePhrases}
        onChange={(e) => {
          setState({
            privatePhrases: e.target.value,
          });
        }}
      />
      <button onClick={onConvert}>CONVERT</button> */}
      {/* <div>ADDRESS: {state.address}</div> */}
      {/* <div>PRIVATE KEY: {state.privateKey}</div> */}
      {/* <div>PRIVATE KEY: {state.privateKey}</div>
      <div>PUBLIC KEY: {state.publicKey}</div>
      <div>CIPHER TEXT: {state.cipher}</div> */}
    </div>
  );
}

export default ConvertPrivatePhrase;
