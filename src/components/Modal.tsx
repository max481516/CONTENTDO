"use client";

import styled from "styled-components";
import ReactDOM from "react-dom";
import ContactForm from "./ContactForm";
import OrderForm from "./OrderForm";
import { useEffect, useRef, useCallback } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { QUERIES } from "@/constants";
import { useOverlayScrollbars } from "overlayscrollbars-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// TypeScript: Define the props interface
interface ModalProps {
  isOpen: boolean; // Can only be true or false
  modalType: "contact" | "order" | null; // Can only be these specific strings or null
  onClose: () => void; // Function that takes no parameters and returns nothing
}

export default function Modal({ isOpen, modalType, onClose }: ModalProps) {
  // TypeScript: Ref must be typed with number since we store scrollY
  const scrollRef = useRef<number>(0);

  // get the ref callback (and instance if you ever need it)
  const [osRef /*, osInstance*/] = useOverlayScrollbars({
    options: {
      scrollbars: {
        autoHide: "scroll",
        clickScroll: true,
        theme: "os-theme-light",
      },
    },
    defer: true,
    events: {
      initialized: () =>
        console.log("OverlayScrollbars initialized on form container"),
    },
  });

  // Next router tools for clearing query params on close
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClose = useCallback(() => {
    // Remove success/error flags so forms render fresh next time
    const params = new URLSearchParams(searchParams.toString());
    params.delete("success");
    params.delete("error");
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    onClose();
  }, [onClose, router, pathname, searchParams]);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      scrollRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollRef.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo({ top: scrollRef.current, left: 0, behavior: "instant" });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const renderContent = () =>
    modalType === "contact" ? (
      <ContactForm />
    ) : modalType === "order" ? (
      <OrderForm />
    ) : null;

  return ReactDOM.createPortal(
    <Overlay onClick={handleClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>
          <IoCloseOutline />
        </CloseButton>
        <ScrollableFormContainer ref={osRef as any}>
          {renderContent()}
        </ScrollableFormContainer>
      </ModalContainer>
    </Overlay>,
    document.getElementById("modal-root")!
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: relative;
  background: var(--color-details-tertiary);
  padding: 42px 54px;
  border-radius: 8px;
  width: min(90vw, 500px);

  @media ${QUERIES.mobile} {
    padding: 24px 32px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -42px;
  right: -8px;
  background: none;
  border: none;
  color: white;
  font-size: 35px;
  cursor: pointer;

  @media (max-width: 358px) {
    font-size: 1.5rem;
    top: -28px;
    right: -4px;
  }
`;

const ScrollableFormContainer = styled.div`
  max-height: 72vh;
  overflow-y: auto;
`;
