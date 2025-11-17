"use client";

import React from "react";
import { Letter } from "../../types/letter";
import Image from "next/image";
import close from "/public/modal_close.svg";
import { CloseButton, Container, Content, Footer, Header, Modal, Overlay, Title } from "./styles";


interface LetterModalProps {
  letter: Letter;
  onClose: () => void;
}

const LetterModal: React.FC<LetterModalProps> = ({ letter, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <Container>
        <CloseButton onClick={onClose}><Image src={close} alt="close" /></CloseButton>
        <Modal onClick={(e) => e.stopPropagation()}>
          <Header>
            <Title>{letter.title}</Title>
          </Header>
          <Content>
            <p>{letter.content}</p>
          </Content>
          <Footer>
            <p>{letter.date}</p><p>{letter.author}</p>
          </Footer>
        </Modal>
      </Container>
    </Overlay>
  );
};

export default LetterModal;

