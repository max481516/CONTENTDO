import styled from "styled-components";
import ReactDOM from "react-dom";
import ContactForm from "./ContactForm";
import OrderForm from "./OrderForm";

export default function Modal({ isOpen, modalType, onClose }) {
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
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {renderContent()}
      </ModalContainer>
    </Overlay>,
    document.getElementById("modal-root") // Make sure to add a div with id='modal-root' in your HTML
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #181818;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;
