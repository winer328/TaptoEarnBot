import BlackPage from "../blackpage/blackpage";
import Itemview from "@/components/components/componentEarn/Itemview";
import { PiUserCirclePlusBold } from "react-icons/pi";
import { TfiReload } from "react-icons/tfi";
import { PiCopySimple } from "react-icons/pi";
import bonus1 from "../../assets/images/bonus1.png";
import bonus2 from "../../assets/images/bonus2.png";
import coin from "../../assets/images/bonus-coin.png";
import { useInitData } from "@tma.js/sdk-react";
import { useEffect, useMemo, useState } from "react";

import "./invite.css";
import ListComponent from "@/components/components/Listcomponent";
import ReactModal from "@/components/components/ReactModal";
import { users } from "../../api/loadaxiosFunc";

const Invite = () => {
  const initData = useInitData();
  const [referral, setReferral] = useState([]);
  const user = useMemo(() => {
    return initData && initData.user ? initData.user : "unknown";
  });
  const hash = useMemo(() =>
    initData && initData.hash ? initData.hash : "unknown"
  );

  const inviteUrl = `https://t.me/amarna_shell_game_bot?start=r_${user.id}`;
  const contactUrl = `https://web.telegram.org/a/#${user.id}`;
  const testUrl = `https://t.me/share/${user.username}?url=${inviteUrl}&text=dhjg`; //&url=${inviteUrl}&text=${"Please visit this funnest mini app. You will get the big profit and pleasure from here"}`;
  // const testUrl = `tg://resolve?domain=${user.username}`;
  // const shotenUrl = "https://bit.ly/3xzKDs8";http://t.me/${user.username}/${user.id}
  const copyUrl = async (url) => {
    if (navigator.clipboard) {
      const data = [
        new ClipboardItem({
          "text/plain": new Blob([url], { type: "text/plain" }),
          "text/html": new Blob([url], { type: "text/html" }),
        }),
      ];
      navigator.clipboard.write(data);
      console.log();
    } else {
      document.execCommand("copy", true, url);
    }
    // console.log(WebAppChat);
    // console.log(Clipboard);
    // navigator.clipboard.writeText(url).then((txt) => {
    //   console.log("copied : ", txt);
    // });
  };
  useEffect(() => {
    const fetchedFunc = async () => {
      if (user.id && user.firstName) {
        const res = await users({
          tgid: user.id || "",
          username: user.username || "",
          firstName: user.firstName || "",
          lastName: user.lastName || "",
        });
        console.log("response user:", res);
        setReferral([...res.referral]);
      }
    };
    fetchedFunc();
  }, []);
  return (
    <BlackPage
      bigDes="Invite friends!"
      smallDes="You and your friends will be receive bonuses"
    >
      <Itemview
        header={bonus1}
        //   footer={}
        backgroundColor="rgb(39, 42, 47)"
      >
        <div className="invite-itemview">
          <div>Invite a friend</div>
          <div className="invite-itemview-bottom">
            <div></div>
            <div className="invite-itemview-bottom-coin">
              <img className="invite-itemview-bottom-coin-img" src={coin} />
            </div>
            <div className="invite-itemview-bottom-score">+5,000</div>
            <div>for you and your friend</div>
          </div>
        </div>
      </Itemview>
      <Itemview
        header={bonus2}
        //   footer={}
        backgroundColor="rgb(39, 42, 47)"
      >
        <div className="invite-itemview">
          <div>Invite a friend with Telegram Premium</div>
          <div className="invite-itemview-bottom">
            <div></div>
            <div className="invite-itemview-bottom-coin">
              <img className="invite-itemview-bottom-coin-img" src={coin} />
            </div>
            <div className="invite-itemview-bottom-score">+25,000</div>
            <div>for you and your friend</div>
          </div>
        </div>
      </Itemview>
      <div className="invite-bonustext">More bonuses</div>
      <ListComponent refIcon={<TfiReload />} listContent={referral} />

      <div className="invite-btn-pack">
        {/* <div className="invite-btn-pack-btn"> */}
        <a className="invite-btn-pack-btn" href={testUrl}>
          <div className="invite-btn-pack-btn-text">Invite a friend</div>
          <div className="invite-btn-pack-btn-img">
            <PiUserCirclePlusBold />
          </div>
        </a>
        {/* </div> */}

        <div
          className="invite-btn-pack-right"
          onClick={() => copyUrl(inviteUrl)}
        >
          <PiCopySimple size="50%" />
        </div>
      </div>

      {/* <Popup></Popup> */}
    </BlackPage>
  );
};

export default Invite;
