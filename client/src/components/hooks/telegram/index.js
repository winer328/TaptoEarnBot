"use client";

import { useInitData } from "@tma.js/sdk-react";
import { useMemo } from "react";

export const useWebAppChat = () => {
  const initData = useInitData(true);

  const chat = useMemo(() => {
    return initData && initData.chat ? initData.chat : undefined;
  }, [initData]);

  return chat;
};

export const useWebAppUser = () => {
  const initData = useInitData(true);

  const user = useMemo(() => {
    return initData && initData.user ? initData.user : undefined;
  }, [initData]);

  return user;
};
