import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { ethers, utils } from "ethers";
import MetamaskWallet from "./components/Home";
import Start from "./components/StartWallet";
import ConfirmCreate from "./components/ConfirmCreate";
import CreatePassword from "./components/CreatePassword";
import ShowSecretKey from "./components/ShowSecretKey";
import EnterSecretKey from "./components/EnterSecretKey";
import Success from "./components/Success";
import Transfer from "./components/TransferInfo";
import ConfirmTran from "./components/TransferConfirm";
import "./components/css/index.css";
import ABI from "./abi.json";

function App() {
  const [state, setState] = useState({});

  const effect = async () => {
    let wallet = ethers.Wallet.fromMnemonic(
      "lounge alone high round response smart present symbol narrow twelve cabbage smart"
    );

    let provider2 = window.ethereum;
    let res2 = await provider2.request({
      method: "eth_requestAccounts",
      // params: [{ chainId: "0x61" }],
    });
    // await provider2.enable();
    console.log(provider2, res2, "res???");
    let web3Provider = new ethers.providers.Web3Provider(provider2);

    let signer = web3Provider.getSigner();

    let contracts = new ethers.Contract(
      "0x009eC8014598e02Cc936ed0F897642d92fa3890F",
      ABI,
      web3Provider
    );

    let address = await web3Provider.getSigner().getAddress();

    let erc20 = contracts.connect(signer);

    // console.log(erc20, "erc20?");
    contracts.balanceOf(address).then((res) => {
      console.log("balance=", ethers.utils.formatUnits(res));
      // console.log("res=", res);
    });

    // let signer = provider.getSigner();
    // signer.getAddress().then((res) => {
    //   console.log(signer, "signer???");
    // });
    signer.signMessage("abcde").then((res) => {
      console.log("signature=", res);
    });

    console.log(
      signer,
      web3Provider,
      "provider...",
      web3Provider.getSigner(),
      provider2

      // address
      // provider.getSigner().getAddress()
    );
    web3Provider.getBalance(address).then((res) => {
      setState({
        balance: Number(ethers.utils.formatUnits(res, "ether")).toFixed(5),
      });
    });

    // return () => {};
  };

  useEffect(() => {
    effect();
  }, []);

  return (
    <div className="App">
      <MetamaskWallet balance={state.balance} />
      {/* <Start /> */}
      {/* <ConfirmCreate></ConfirmCreate> */}
      {/* <CreatePassword></CreatePassword>
      <ShowSecretKey></ShowSecretKey>
      <EnterSecretKey></EnterSecretKey>
      <Success></Success>
      <Transfer></Transfer>
      <ConfirmTran></ConfirmTran> */}
    </div>
  );
}

export default App;
