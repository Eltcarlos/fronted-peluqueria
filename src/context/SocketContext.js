import React, { useEffect } from "react";
import { createContext } from "react";
import { useSelector } from "react-redux";
import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const url = process.env.REACT_APP_BACKEND_CORE;
  const { socket, online, conectarSocket, desconectarSocket } = useSocket(`${url}`);
  const { status } = useSelector((state) => state.authState);

  useEffect(() => {
    if (status === "authenticated") {
      conectarSocket();
    }
  }, [status, conectarSocket]);

  useEffect(() => {
    if (status !== "authenticated") {
      desconectarSocket();
    }
  }, [status, desconectarSocket]);

  return <SocketContext.Provider value={{ socket, online }}>{children}</SocketContext.Provider>;
};
