import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please enter a message with at least 5 characters." },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "paulk3226@gmail.com";

    // If SMTP credentials are configured, send real email via Nodemailer
    if (emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || "gmail",
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      const mailOptions = {
        from: `"${name} (Portfolio Inquiry)" <${emailUser}>`,
        replyTo: email,
        to: recipientEmail,
        subject: `[Portfolio Inquiry] New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <h2 style="color: #4f46e5; margin-top: 0;">New Message from Portfolio Website</h2>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #06b6d4;">${email}</a></p>
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #4f46e5; margin: 20px 0;">
              <p style="margin: 0; white-space: pre-wrap; color: #1e293b;">${message}</p>
            </div>
            <p style="font-size: 12px; color: #94a3b8; margin-top: 24px;">Sent from Kunal Paul Portfolio Contact Form</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json(
        { success: true, message: "Thank you! Your message has been sent successfully." },
        { status: 200 }
      );
    }

    // Fallback mode for local development/preview when SMTP credentials are not yet set
    console.log("------------------------------------------");
    console.log("📨 [CONTACT FORM SUBMISSION - DEV MODE]");
    console.log(`From: ${name} <${email}>`);
    console.log(`Message:\n${message}`);
    console.log("To enable real email delivery, set EMAIL_USER and EMAIL_PASS in your .env.local file.");
    console.log("------------------------------------------");

    return NextResponse.json(
      {
        success: true,
        message: "Thank you, your message was received! (Simulated response: set EMAIL_USER & EMAIL_PASS in .env.local to deliver to inbox)",
        devMode: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact route:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong while processing your message. Please try again or reach out directly via email or WhatsApp." },
      { status: 500 }
    );
  }
}
