"use client";

import { Toaster as ToasterProvider } from "react-hot-toast";

export const Toaster = () => {
  return (
    <ToasterProvider
      position="bottom-center"
      toastOptions={{
        success: {
          style: {
            background: "#121214",
            color: "white",
            border: "2px",
            borderColor: "#323238",
          },
          iconTheme: {
            primary: "#00B37E",
            secondary: "#121214",
          },
        },
        error: {
          style: {
            background: "#121214",
            color: "white",
          },
          iconTheme: {
            primary: "#ef4444",
            secondary: "#121214",
          },
        },
      }}
    />
  );
};
