import { createContext, ReactNode, useState } from "react";
import { DetailsContextType } from "@/types/types";

export const DetailsContext = createContext<DetailsContextType>(
  {} as DetailsContextType
);

type Props = {
  children: ReactNode;
};

export const DetailsProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState<string[]>([]);

  const openModal = (data: string[]) => {
    setDetails(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setDetails([]);
    setIsOpen(false);
  };

  return (
    <DetailsContext.Provider value={{ isOpen, openModal, closeModal, details }}>
      {children}
    </DetailsContext.Provider>
  );
};
