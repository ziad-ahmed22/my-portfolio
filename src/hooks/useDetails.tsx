import { useContext } from "react";
import { DetailsContext } from "@/context/DetailsContext";

export const useDetails = () => {
  const context = useContext(DetailsContext);
  if (!context) {
    throw new Error("useDetails must be used within a DetailsProvider");
  }
  return context;
};
