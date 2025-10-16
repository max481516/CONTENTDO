import { useState, useCallback } from "react";

// TypeScript: Define what modal types are allowed
// This ensures we can't accidentally pass wrong modal types
type ModalType = "contact" | "order" | null;

// TypeScript: Define the return type of our custom hook
interface UseModalReturn {
  isOpen: boolean;
  modalType: ModalType;
  openModal: (type: "contact" | "order") => void;
  closeModal: () => void;
}

export function useModal(): UseModalReturn {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = useCallback((type: "contact" | "order") => {
    setModalType(type);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalType(null);
  }, []);

  return { isOpen, modalType, openModal, closeModal };
}
