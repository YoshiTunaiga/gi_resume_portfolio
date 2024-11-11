import React from "react";
import { Box, Button, Link, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { GitHub, LinkedIn } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/system";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const Contact = ({ id = "" }) => {
  return (
    <div
      id={id}
      style={{
        display: "flex",
        flexDirection: "column",
        // height: "100vh",
        color: "#000000",
        // background: `linear-gradient(rgba(0, 0, 0, 50%), rgba(0, 0, 0, 50%))`,
        // backgroundSize: "cover",
        // objectFit: "cover",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "cover",
        // backgroundAttachment: "fixed",
        justifyContent: "center",
        margin: 10,
      }}>
      <div
        style={{
          flexGrow: 8,
          justifyContent: "center",
          alignContent: "center",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            textAlign: "center",
            margin: 10,
          }}>
          <div
            style={{
              width: "30%",
              alignContent: "center",
            }}>
            <p
              style={{
                // color: "#C7A03B",
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
                color: "#000000",
                fontFamily: "Arial Narrow",
                fontSize: "54px",
                padding: 0,
                margin: 0,
                lineHeight: 1,
              }}>
              {`Let's Get In Touch`}
            </p>
            <div
              style={{
                color: "#000000",
              }}>
              <p style={{ textAlign: "center", textWrap: "wrap" }}>
                Send me a message by filling out the form, I will reach back as
                soon as possible!
              </p>
              <p>We can also connect through:</p>
            </div>
            <Box sx={{ color: "primary.light" }}>
              <Link
                href="https://www.linkedin.com/in/gisseldiazf/"
                underline="none"
                target="_blank"
                color="black">
                <LinkedIn fontSize="large" />
              </Link>

              <Link
                href="https://github.com/YoshiTunaiga"
                underline="none"
                target="_blank"
                color="black">
                <GitHub fontSize="large" />
              </Link>
            </Box>
          </div>
          <div
            style={{
              // background: "rgba(0,0,0, 0.1)",
              boxShadow: "-4px 4px 8px 2px #000000",
              borderRadius: "15px",
              width: "430px",
              height: "430px",
              padding: "20px",
            }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                textAlign: "center",
                borderRadius: 10,
                // border: "1px solid yellow",
                height: "390px",
                padding: "20px",
                gap: 8,
              }}>
              <p
                style={{
                  color: "#000000",
                  fontFamily: "Times New Roman",
                  fontSize: "54px",
                  padding: 0,
                  margin: 0,
                }}>
                Contact Form
              </p>
              {/* ============= FORM ============= */}
              <div style={{ color: "#000000" }}>
                <form
                  id="myForm"
                  target="_blank"
                  action={`https://formsubmit.co/${
                    import.meta.env.VITE_FORM_API_KEY
                  }`}
                  method="POST"
                  style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <FormGrid>
                    <TextField
                      fullWidth
                      id="customer-name"
                      name="customerName"
                      type="name"
                      placeholder="Enter your name"
                      autoComplete="customer name"
                      required
                      // onChange={handleCustomerData}
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
                      // onChange={handleCustomerData}
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
                      // onChange={handleCustomerData}
                    />
                  </FormGrid>
                </form>
              </div>
              {/* ============= BUTTONS ============= */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}>
                <Button
                  variant="outlined"
                  sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                  <p>SEND</p>
                  <SendIcon />
                </Button>
                <Button variant="outlined">CLEAR</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
