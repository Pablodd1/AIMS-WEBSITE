// emails/UserConfirmation.email.jsx
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Button } from "@react-email/button";
import { Hr } from "@react-email/hr";
import EmailLayout from "./main";

export default function UserConfirmationEmail({ data = {} }) {
  const { firstName, organization, billing } = data;

  return (
    <EmailLayout>
      <Section style={{ textAlign: "center" }}>
        <Text
          style={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px" }}
        >
          Thank you, {firstName}!
        </Text>
        <Text style={{ color: "#555", fontSize: "14px" }}>
          We’ve received your request to get started with our AI Medical Scribe.
          Our team will review your information and get back to you shortly.
        </Text>
      </Section>

      <Hr style={{ margin: "20px 0" }} />

      <Section>
        <Text style={{ fontSize: "14px", color: "#333", fontWeight: "500" }}>
          Your Submitted Details:
        </Text>
        <ul style={{ paddingLeft: "16px", color: "#555", fontSize: "14px" }}>
          <li>
            <strong>Organization:</strong> {organization}
          </li>
          <li>
            <strong>Billing Type:</strong> {billing}
          </li>
        </ul>
      </Section>

      <Section style={{ textAlign: "center", marginTop: "24px" }}>
        <Button
          href="https://www.myababeel.com/"
          style={{
            backgroundColor: "#1A73E8",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Visit Our Website
        </Button>
      </Section>

      <Text
        style={{
          fontSize: "12px",
          color: "#777",
          textAlign: "center",
          marginTop: "24px",
        }}
      >
        You’re receiving this email because you submitted a request at AI
        Medical Scribe.
      </Text>
    </EmailLayout>
  );
}
