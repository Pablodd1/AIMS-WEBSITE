import { NextResponse } from "next/server";
import { sendEmailNotification } from "@utils/sendEmail";

export async function POST(request) {
  try {
    const body = await request.json();
    
    const { name, email, phone, message, type = "Chatbot Lead", lang = "en" } = body;

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 },
      );
    }

    // Create email HTML for admin
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #0ea5e9; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0ea5e9; }
            .value { margin-top: 5px; }
            .conversation { background: white; padding: 15px; border-radius: 5px; margin-top: 15px; border-left: 4px solid #0ea5e9; }
            .footer { margin-top: 20px; text-align: center; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">🤖 New Chatbot Lead</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">AI Medical Scriber (AIMS)</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Lead Type:</div>
                <div class="value">${type}</div>
              </div>
              
              <div class="field">
                <div class="label">Language:</div>
                <div class="value">${lang.toUpperCase()}</div>
              </div>
              
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone || "Not provided"}</div>
              </div>
              
              <div class="field">
                <div class="label">Submission Time:</div>
                <div class="value">${new Date().toLocaleString()}</div>
              </div>
              
              ${message ? `
              <div class="conversation">
                <div class="label">Conversation History:</div>
                <pre style="white-space: pre-wrap; font-family: Arial, sans-serif; margin-top: 10px;">${message}</pre>
              </div>
              ` : ''}
              
              <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 5px;">
                <p style="margin: 0; font-size: 14px;">
                  <strong>Action Required:</strong> Contact this lead within 24 hours for best conversion rates.
                </p>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the AIMS Chatbot System</p>
              <p>© 2025 AI Medical Scriber. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to jasmelacosta@gmail.com
    await sendEmailNotification(
      ["jasmelacosta@gmail.com"],
      `🤖 New Chatbot Lead: ${name} from ${email}`,
      adminEmailHtml
    );

    // Also send to additional admin if configured
    if (process.env.CHATBOT_ADMIN_EMAIL) {
      await sendEmailNotification(
        [process.env.CHATBOT_ADMIN_EMAIL],
        `🤖 New Chatbot Lead: ${name}`,
        adminEmailHtml
      );
    }

    return NextResponse.json({ 
      success: true, 
      status: "success",
      message: "Lead submitted successfully"
    });
  } catch (error) {
    console.error("Error in chatbot API route:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 },
    );
  }
}