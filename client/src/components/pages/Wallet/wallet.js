// import BackButton from "pages/Topbar/topbar";
import { useEffect, useState, useMemo } from "react";
import logo2 from "../../assets/images/icon1024V3.png";
import Itemview from "../../components/componentEarn/Itemview.js";
import binance from "../../assets/svg/binance.svg";
import check from "../../assets/images/check.png";
import BlackPage from "../blackpage/blackpage.js";
import Itempack from "../../components/componentEarn/ItemPack.js";
import {
  fetchAddress,
  registAddress,
  users,
} from "@/components/api/loadaxiosFunc";
import pasteImg from "../../assets/images/paste.png";
import { useInitData } from "@tma.js/sdk-react";

import "./wallet.css";
import ReactModal from "@/components/components/ReactModal";

const Wallet = () => {
  const NEEDED_COIN_THRESHOLD = 5;
  const GENERAL_TEXT = "Connect your BSC wallet";
  const ALERT_TEXT = "More coins are needed!!";
  const [text, setText] = useState(GENERAL_TEXT);
  const [totalScore, setTotalScore] = useState(0);
  const initData = useInitData();
  const user = useMemo(() => {
    return initData && initData.user ? initData.user : "unknown";
  });
  // const readText = useReadTextFromClipboard();

  // readText().then(console.log);

  const handlepaste = (e) => {
    // navigator.clipboard.readText().then((text) => {
    //   setText(text);
    // });
    // const Yahoo = useReadTextFromClipboard();
    // console.log({ Yahoo });
  };
  const connetWallet = async () => {
    try {
      const res = await registAddress({
        tgid: user.id,
        walletAddress: text,
      });
      console.log("=====", res);
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res1 = await fetchAddress();
        //
        const res = await users({
          tgid: user.id || "",
          username: user.username || "",
          firstName: user.firstName || "",
          lastName: user.lastName || "",
        });
        console.log("-------", res);
        setText(res.walletAddress);
        setTotalScore(res.totalScore);
      } catch (err) {}
    };
    fetchData();
  }, []);
  return (
    <BlackPage
      mainImg={logo2}
      bigDes="Airdrops"
      smallDes="Hello. Wellcome to here!!"
      radius={true}
    >
      {console.log({ totalScore })}
      <Itempack title="Tasks list">
        <ReactModal
          title={"Connect Wallet"}
          content={
            <div style={{ width: "100%", textAlign: "center" }}>
              <input />
            </div>
          }
          okFunc={connetWallet}
          paste={handlepaste}
          okText="Connect"
        >
          <Itemview
            header={binance}
            footer={pasteImg || check}
            backgroundColor="rgb(240, 183, 64)"
          >
            <div style={{ textAlign: "center" }}>Connect your BSC wallet</div>
          </Itemview>
        </ReactModal>
      </Itempack>
    </BlackPage>
  );
};

export default Wallet;

// window.Clipboard = (function (window, document, navigator) {
//   var textArea, copy;

//   function isOS() {
//     return navigator.userAgent.match(/ipad|iphone/i);
//   }

//   function createTextArea(text) {
//     textArea = document.createElement("textArea");
//     textArea.value = text;
//     document.body.appendChild(textArea);
//   }

//   function selectText() {
//     var range, selection;

//     if (isOS()) {
//       range = document.createRange();
//       range.selectNodeContents(textArea);
//       selection = window.getSelection();
//       selection.removeAllRanges();
//       selection.addRange(range);
//       textArea.setSelectionRange(0, 999999);
//     } else {
//       textArea.select();
//     }
//   }

//   function copyToClipboard() {
//     document.execCommand("copy");
//     // navigator.clipboard.writeText("copy");
//     document.body.removeChild(textArea);
//   }

//   copy = function (text) {
//     createTextArea(text);
//     selectText();
//     copyToClipboard();
//   };
//   return {
//     copy: copy,
//   };
// })(window, document, navigator);

// How to use
// Clipboard.copy('text to be copied');
