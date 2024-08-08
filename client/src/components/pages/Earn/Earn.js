import Itempack from "../../components/componentEarn/ItemPack.js";
import Itemview from "../../components/componentEarn/Itemview.js";
import calender from "../../assets/images/calender.png";
import yutube from "../../assets/images/yutube.png";
import telegram from "../../assets/images/yutube.png";
import tweeiter from "../../assets/images/yutube.png";
import rightArrow from "../../assets/svg/right-arrow-3094.svg";
import tokenImg from "../../assets/images/amarIcon.png";

import "./earn.css";
import BlackPage from "../blackpage/blackpage.js";
import ReactModal from "@/components/components/ReactModal.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "@/components/redux/slice.js";
import { saveEarnUrl } from "@/components/api/loadaxiosFunc.js";

const Earn = () => {
  const dispatch = useDispatch();
  const tasklist = useSelector((state) => state.tasks.tasklist);

  console.log({ tasklist });
  const imgSelection = (type) => {
    console.log({ type });
    if (type === "yutube") {
      return yutube;
    } else if (type === "telegram") {
      return telegram;
    } else if (type === "tweeiter") {
      return tweeiter;
    } else {
      return;
    }
  };
  const taskUrlLink = (url, earn) => {
    // window.location.href = url;
    console.log({ url, earn });
    saveEarnUrl({ url, earn });
    open(url);
  };
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <BlackPage mainImg={tokenImg} bigDes="Earn more coins" smallDes="">
      <Itempack title="Yutube list">
        {tasklist?.map((task) => {
          if (task.type == "yutube") {
            return (
              <ReactModal
                title={task.title}
                content={task.value}
                okFunc={() => taskUrlLink(task.url, task.earn)}
                okText="Check"
              >
                <Itemview header={imgSelection(task.type)} footer={rightArrow}>
                  <div className="itemview-body-top">{task.title}</div>
                  <div className="itemview-body-down">{task.earn}</div>
                </Itemview>
              </ReactModal>
            );
          }
        })}
      </Itempack>
      <Itempack title="Telegram list">
        {tasklist?.map((task) => {
          if (task.type == "telegram") {
            return (
              <ReactModal
                title={task.title}
                content={task.value}
                okFunc={() => taskUrlLink(task.url, task.earn)}
                okText="Check"
              >
                <Itemview header={imgSelection(task.type)} footer={rightArrow}>
                  <div className="itemview-body-top">{task.title}</div>
                  <div className="itemview-body-down">{task.earn}</div>
                </Itemview>
              </ReactModal>
            );
          }
        })}
      </Itempack>
      <Itempack title="Tweeter list">
        {tasklist?.map((task) => {
          if (task.type == "tweeter") {
            return (
              <ReactModal
                title={task.title}
                content={task.value}
                okFunc={() => taskUrlLink(task.url, task.earn)}
                okText="Check"
              >
                <Itemview header={imgSelection(task.type)} footer={rightArrow}>
                  <div className="itemview-body-top">{task.title}</div>
                  <div className="itemview-body-down">{task.earn}</div>
                </Itemview>
              </ReactModal>
            );
          }
        })}
      </Itempack>
    </BlackPage>
  );
};

export default Earn;
