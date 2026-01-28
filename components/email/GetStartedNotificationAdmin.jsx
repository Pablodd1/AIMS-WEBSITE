// emails/AdminNotification.email.jsx
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Hr } from "@react-email/hr";
import EmailLayout from "./main";

export default function AdminNotificationEmailGS({ data = {} }) {
  const {
    firstName,
    lastName,
    email,
    organization,
    phoneNumber,
    subscription,
    HaveMS,
    ExperiancedUser,
    billing,
    referal,
  } = data;

  return (
    <EmailLayout>
      <Section style={{ marginBottom: "16px" }}>
        <Text style={{ fontSize: "20px", fontWeight: "600" }}>
          🧾 New AI Medical Scribe Request Received
        </Text>
        <Text style={{ fontSize: "14px", color: "#555" }}>
          A new user has submitted the “Get Started” form. Below are the
          submitted details:
        </Text>
      </Section>

      <Hr style={{ margin: "20px 0" }} />

      <Section>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td>
                <strong>Name:</strong>
              </td>
              <td>
                {firstName} {lastName}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Email:</strong>
              </td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>
                <strong>Phone:</strong>
              </td>
              <td>{phoneNumber}</td>
            </tr>
            <tr>
              <td>
                <strong>Organization:</strong>
              </td>
              <td>{organization}</td>
            </tr>
            <tr>
              <td>
                <strong>Billing Plan:</strong>
              </td>
              <td>{billing}</td>
            </tr>
            <tr>
              <td>
                <strong>Subscribed to Updates:</strong>
              </td>
              <td>{subscription ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <td>
                <strong>Have Medical Scribe Experience:</strong>
              </td>
              <td>{HaveMS}</td>
            </tr>
            <tr>
              <td>
                <strong>Experienced User:</strong>
              </td>
              <td>{ExperiancedUser}</td>
            </tr>
            <tr>
              <td>
                <strong>Referral:</strong>
              </td>
              <td>{referal}</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Hr style={{ margin: "24px 0" }} />

      <Section>
        <Text style={{ fontSize: "14px", color: "#777" }}>
          Received automatically via Get Started form on AI Medical Scribe.
          Please follow up accordingly.
        </Text>
      </Section>
    </EmailLayout>
  );
}
