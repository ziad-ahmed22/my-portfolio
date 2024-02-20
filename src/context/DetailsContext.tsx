import { createContext, useContext, useState } from "react";
import { DetailsContext } from "@/types/types";

const DetailsContext = createContext<DetailsContext>({} as DetailsContext);

export const useDetailsModal = () => useContext(DetailsContext);

export const DetailsProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
