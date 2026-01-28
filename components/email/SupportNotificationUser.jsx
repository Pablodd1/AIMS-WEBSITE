import { Container, Text, Section, Link } from "@react-email/components";
import * as React from "react";
import EmailLayout from "./main";

export const SupportRequestEmailUser = ({
  userEmail,
  userPhone,
  userClinic,
  userMessage,
}) => {
  return (
    <EmailLayout>
      <Container style={container}>
        <Section style={headerSection}>
          <Text style={heading}>Thank You for Reaching Out to Us! 🙏</Text>
          <Text style={subHeading}>
            We have received your support request and will get back to you as
            soon as possible.
          </Text>
        </Section>

        <Section style={contentSection}>
          <Text style={paragraph}>Here are the details of your request:</Text>
          <ul style={infoList}>
            <li>
              <strong>Email:</strong> {userEmail}
            </li>
            <li>
              <strong>Phone:</strong> {userPhone}
            </li>
            <li>
              <strong>Clinic:</strong> {userClinic}
            </li>
            <li>
              <strong>Message:</strong> {userMessage}
            </li>
          </ul>

          <Text style={paragraph}>
            If you have any further questions or need immediate assistance, feel
            free to reply to this email.
          </Text>

          <Link href="mailto:support@aimedicalscriber.com" style={ctaLink}>
            Contact Support
          </Link>
        </Section>

        <Section style={footerSection}>
          <Text style={footerText}>– The Support Team</Text>
          <Text style={footerText}>
            AI Medical Scriber | Miami, USA |{" "}
            <Link href="https://aimedicalscriber.com">
              www.aimedicalscriber.com
            </Link>
          </Text>
        </Section>
      </Container>
    </EmailLayout>
  );
};

export default SupportRequestEmailUser;

const container = {
  margin: "0 auto",
  padding: "20px 40px",
  borderRadius: "8px",
  maxWidth: "600px",
  backgroundColor: "#f9f9f9",
  fontFamily: "Arial, sans-serif",
  color: "#333",
};

const headerSection = {
  textAlign: "center",
  paddingBottom: "20px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#007bff",
  marginBottom: "10px",
};

const subHeading = {
  fontSize: "16px",
  fontWeight: "normal",
  color: "#555",
};

const contentSection = {
  display: "block",
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  marginBottom: "20px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#333",
  marginBottom: "15px",
};

const infoList = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
};

const ctaLink = {
  display: "inline-block",
  padding: "12px 24px",
  backgroundColor: "#007bff",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "5px",
  fontWeight: "bold",
  marginTop: "20px",
  textAlign: "center",
};

const footerSection = {
  textAlign: "center",
  paddingTop: "10px",
  fontSize: "12px",
  color: "#777",
};

const footerText = {
  marginBottom: "5px",
};
