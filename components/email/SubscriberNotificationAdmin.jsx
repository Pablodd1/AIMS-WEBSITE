// emails/AdminNotificationEmail.jsx
import { Container, Text, Hr } from "@react-email/components";
import * as React from "react";
import EmailLayout from "./main";

export const AdminNotificationEmail = ({ userName, email }) => {
  return (
    <EmailLayout>
      <Container style={container}>
        <Text style={heading}>📬 New Subscription Notification</Text>
        <Text style={subheading}>
          A new user has just subscribed to the{" "}
          <strong>AI Medical Scribe</strong> web app.
        </Text>

        <Hr style={divider} />

        <Text style={label}>👤 Subscriber Details:</Text>
        <Text>
          <strong>Name:</strong> {userName || "N/A"}
        </Text>
        <Text>
          <strong>Email:</strong> {email}
        </Text>

        <Hr style={divider} />

        <Text style={footer}>
          You can view full subscriber data and manage accounts in the admin
          dashboard.
        </Text>
      </Container>
    </EmailLayout>
  );
};

export default AdminNotificationEmail;

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
  marginBottom: "10px",
  color: "#111827",
};

const subheading = {
  fontSize: "16px",
  color: "#374151",
  marginBottom: "20px",
};

const label = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#1f2937",
  marginBottom: "8px",
};

const footer = {
  fontSize: "14px",
  color: "#6b7280",
  marginTop: "20px",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "20px 0",
};
