import { useState, useCallback } from "react";

// TypeScript: Define what modal types are allowed
// This ensures we can't accidentally pass wrong modal types
export type ModalType = "contact" | "order" | null;

// TypeScript: Define the return type of our custom hook
interface UseModalReturn {
  isOpen: boolean;
  modalType: ModalType;
  openModal: (modalType: "contact" | "order") => void;
  closeModal: () => void;
}

export function useModal(): UseModalReturn {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = useCallback((modalType: "contact" | "order") => {
    setModalType(modalType);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalType(null);
  }, []);

  return { isOpen, modalType, openModal, closeModal };
}
