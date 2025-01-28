import styled from "styled-components";
import ReactDOM from "react-dom";
import ContactForm from "./ContactForm";
import OrderForm from "./OrderForm";
import { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { QUERIES } from "../constants";

export default function Modal({ isOpen, modalType, onClose }) {
  // Ref to store the scroll position
  const scrollRef = useRef(0);
  // To lock scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      // Capture the scroll position
      scrollRef.current = window.scrollY;

      // Lock body scroll
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollRef.current}px`;
      document.body.style.width = "100%";
    } else {
      // If modal is closing, remove the fixed position and restore scroll
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      // Return user to where they were scrolled
      window.scrollTo({
        top: scrollRef.current,
        left: 0,
        behavior: "instant",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const renderContent = () => {
    switch (modalType) {
      case "contact":
        return <ContactForm />;
      case "order":
        return <OrderForm />;
      default:
        return null;
    }
  };

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <IoCloseOutline />
        </CloseButton>
        <ScrollableFormContainer>{renderContent()}</ScrollableFormContainer>
        <GoogleLegal>
          This site is protected by reCAPTCHA and the Google{" "}
          <GoogleLink href="https://policies.google.com/privacy">
            Privacy Policy
          </GoogleLink>{" "}
          and{" "}
          <GoogleLink href="https://policies.google.com/terms">
            Terms of Service
          </GoogleLink>{" "}
          apply.
        </GoogleLegal>
      </ModalContainer>
    </Overlay>,
    document.getElementById("modal-root")
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
  padding: 62px 96px;
  border-radius: 8px;
  width: min(90vw, 700px);

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

const GoogleLegal = styled.small`
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  bottom: -10px;
  padding: 1rem;
  text-align: center;
  font-size: calc(8rem / 16);

  @media ${QUERIES.mobile} {
    font-size: calc(6rem / 16);
  }

  @media (max-width: 358px) {
    font-size: calc(4rem / 16);
  }
`;

const GoogleLink = styled.a`
  color: inherit;
`;
