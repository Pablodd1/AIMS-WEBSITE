// emails/UserSubscriptionEmail.jsx
import { Container, Text, Hr } from "@react-email/components";
import * as React from "react";
import EmailLayout from "./main";

export const UserSubscriptionEmail = ({ userName }) => {
  return (
    <EmailLayout>
      <Container style={container}>
        <Text style={heading}>🎉 Welcome to AI Medical Scribe!</Text>

        <Text style={greeting}>Hi {userName || "there"},</Text>

        <Text style={bodyText}>
          Thank you for subscribing to <strong>AI Medical Scribe</strong> — your
          AI-powered clinical documentation assistant.
        </Text>

        <Text style={bodyText}>
          You now have access to tools that help you document faster, reduce
          admin time, and focus more on patient care.
        </Text>

        <Hr style={divider} />

        <Text style={footerText}>
          If you need help getting started, visit our Help Center or reach out
          to our support team.
        </Text>

        <Text style={closing}>
          Best regards,
          <br />
          The AI Medical Scribe Team
        </Text>
      </Container>
    </EmailLayout>
  );
};

export default UserSubscriptionEmail;

// --- Styles ---
const container = {
  margin: "40px auto",
  padding: "30px 40px",
  borderRadius: "8px",
  // maxWidth: '520px',
};

const heading = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#111827",
  marginBottom: "16px",
};

const greeting = {
  fontSize: "16px",
  fontWeight: "500",
  color: "#374151",
  marginBottom: "12px",
};

const bodyText = {
  fontSize: "15px",
  color: "#374151",
  marginBottom: "12px",
  lineHeight: "1.5",
};

const footerText = {
  fontSize: "14px",
  color: "#6b7280",
  marginTop: "20px",
  lineHeight: "1.5",
};

const closing = {
  fontSize: "15px",
  fontWeight: "500",
  color: "#374151",
  marginTop: "24px",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};
