import { NextResponse } from "next/server";
import { sendEmailNotification } from "@utils/sendEmail";
import { render } from "@react-email/render";
import SupportRequestEmailAdmin from "@components/email/SupportNotificationAdmin";
import SupportRequestEmailUser from "@components/email/SupportNotificationUser";

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate input
    if (!body.email || !body.phone || !body.clinic || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Generate the user email
    const user_email = await render(
      <SupportRequestEmailUser
        {...{
          userEmail: body.email,
          userPhone: body.phone,
          userClinic: body.clinic,
          userMessage: body.message,
        }}
      />,
      { pretty: true },
    );

    // Generate the admin email
    const admin_email = await render(
      <SupportRequestEmailAdmin
        {...{
          userEmail: body.email,
          userPhone: body.phone,
          userClinic: body.clinic,
          userMessage: body.message,
        }}
      />,
      { pretty: true },
    );

    // Send email to the admin
    const result_admin = await sendEmailNotification(
      [process.env.ADMIN],
      "New Support Request Submitted!",
      admin_email,
    );
    // Send email to the user
    const result_user = await sendEmailNotification(
      [body.email],
      "Support Request Submitted – Thank You for Reaching Out!",
      user_email,
    );

    console.log(result_admin, result_user);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
