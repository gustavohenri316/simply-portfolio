import {
  Container,
  Button,
  Content,
  Form,
  Input,
  Label,
  TextArea,
  Title,
  Close
} from "./styles";
import Modal from 'react-modal'
import { X } from "phosphor-react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export function ContactModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Close onClick={onRequestClose}>
          <X size={32} />
        </Close>

        <Content>
          <Title>CONTACT ME!!</Title>
          <Form>
            <Label>Name</Label>
            <Input />
            <Label>E-mail</Label>
            <Input />
            <Label>Message </Label>
            <TextArea />
            <Button>Submit</Button>
          </Form>
        </Content>

      </Modal>

    </Container>
  )
}