import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/system";
import "@/styles/contactStyle.css";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const Contact = ({ id = "" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  /* ------- HANDLE FUNCTIONS -------- */
  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  /* --------RESET FORM ------------ */
  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id={id} className="contact-container">
      <div className="contact-background">
        <div className="contact-wrapper">
          <div className="contact-about-section">
            <p
              style={{
                fontFamily: "Times New Roman",
                fontSize: "34px",
                padding: 0,
                margin: 0,
                lineHeight: 1,
              }}>
              CONTACT
            </p>
            <p
              style={{
                fontFamily: "Arial Narrow",
                fontSize: "54px",
                padding: 0,
                margin: 0,
                lineHeight: 1,
              }}>
              {`Let's Get In Touch`}
            </p>
            <div>
              <p style={{ textAlign: "center", textWrap: "wrap" }}>
                I'd love to hear from you! Just fill out the form, and I'll get
                back to you as soon as I can. Looking forward to chatting!
              </p>
              {/* <p>We can also connect through:</p> */}
            </div>
          </div>
          <div className="contact-form-container">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                textAlign: "center",
                borderRadius: 10,
                height: "390px",
                padding: "20px",
                gap: 8,
              }}>
              {/* ============= FORM ============= */}
              <p className="contact-form-title">Contact Form</p>
              <div
                style={{
                  color: "#000000",
                }}>
                <form
                  id="myForm"
                  target="_blank"
                  action={`https://formsubmit.co/${
                    import.meta.env.VITE_FORM_API_KEY
                  }`}
                  method="POST"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}>
                  <FormGrid>
                    <TextField
                      fullWidth
                      id="customer-name"
                      name="customerName"
                      type="name"
                      placeholder="Enter your name"
                      autoComplete="customer name"
                      required
                      onChange={handleName}
                      value={name}
                    />
                  </FormGrid>
                  <FormGrid>
                    <TextField
                      fullWidth
                      id="customer-email"
                      name="customerEmail"
                      type="email"
                      placeholder="Enter your email"
                      autoComplete="customer email"
                      onChange={handleEmail}
                      value={email}
                    />
                  </FormGrid>
                  <FormGrid>
                    <TextField
                      fullWidth
                      id="customer-message"
                      name="customerMessage"
                      placeholder="Type your message here..."
                      multiline
                      rows={3}
                      onChange={handleMessage}
                      value={message}
                      // onChange={handleCustomerData}
                    />
                  </FormGrid>
                  {/* ============= BUTTONS ============= */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}>
                    <Button variant="contained" size="small" type="submit">
                      <p style={{ display: "block", padding: 5, margin: 0 }}>
                        SEND
                      </p>
                      <SendIcon sx={{ fontSize: "14px" }} />
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                      type="reset"
                      onClick={() => resetForm()}>
                      CLEAR
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
