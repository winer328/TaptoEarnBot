import { MainButton, useShowPopup } from "@vkruglikov/react-telegram-web-app";
import {
  WebAppProvider,
  //   MainButton,
  BackButton,
  useExpand,
} from "@vkruglikov/react-telegram-web-app";
import { useEffect } from "react";

const TelegramHolder = ({ children }) => {
  const [isExpanded, expand] = useExpand();
  useEffect(() => {
    expand();
  }, []);

  return (
    <WebAppProvider
      options={{
        smoothButtonsTransition: true,
      }}
    >
      {children}
      {/** Use components inside provider */}
      {/* <MainButton /> */}
      <BackButton />
    </WebAppProvider>
  );
};

export default TelegramHolder;
