import {
  Container,
  Button,
  Content,
  Form,
  Input,
  Label,
  TextArea,
  Title,
  Close,
  Tel,
  TelContent,
} from "./styles";
import Modal from "react-modal";
import { X } from "phosphor-react";
import { useState } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ContactModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ddd, setDdd] = useState("");
  const [textarea, setTextArea] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
          <Form
            action="https://formsubmit.co/gustavohenri316@icloud.com"
            method="POST"
          >
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Tel>
              <TelContent className="DDD">
                <Label htmlFor="ddd">DDD</Label>
                <Input
                  type="text"
                  id="ddd"
                  name="ddd"
                  value={ddd}
                  onChange={(e) => setDdd(e.target.value)}
                />
              </TelContent>
              <TelContent>
                <Label htmlFor="phone">Telephone</Label>
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </TelContent>
            </Tel>
            <Label htmlFor="message">Message </Label>
            <TextArea
              id="message"
              name="message"
              value={textarea}
              onChange={(e) => setTextArea(e.target.value)}
            />
            <input type="hidden" name="_captcha" value="false"></input>
            <input
              type="hidden"
              name="_next"
              value="https://gustavoh-jpg.vercel.app/"
            ></input>
            <Button
              disabled={
                name === "" ||
                email === "" ||
                textarea === "" ||
                phone === "" ||
                ddd === ""
              }
              type="submit"
              onClick={handleClick}
            >
              Submit
            </Button>
          </Form>
          <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              E-mail enviado com sucesso!!
            </Alert>
          </Snackbar>
        </Content>
      </Modal>
    </Container>
  );
}
