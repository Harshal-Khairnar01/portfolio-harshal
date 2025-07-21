"use server";

import { revalidatePath } from "next/cache";
import { connectDb } from "./connectDb";
import { Message } from "./models";
import { sendMail } from "./sendMail";

export const contact = async (previousState, formdata) => {
  const name = formdata.get("name")?.trim();
  const email = formdata.get("email")?.trim();
  const message = formdata.get("message")?.trim();

  if (!name || !email || !message) {
    return { error: "All fields are required." };
  }

  try {
    connectDb();
    const newMessage = new Message({
      name: name,
      email: email,
      message: message,
    });

    const res = await newMessage.save();

    await sendMail({
      to: "harshalkhairnar7244@gmail.com",
      subject: `New Contact Message from ${name}`,
      html: `
    <div style="font-family: 'Segoe UI', sans-serif; background-color: #f9fafb; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #dc2626;">📩 New Contact Message</h2>
        <p style="font-size: 16px; color: #111827;"><strong>Name:</strong> ${name}</p>
        <p style="font-size: 16px; color: #111827;"><strong>Email:</strong> ${email}</p>
        <div style="margin-top: 20px; padding: 15px 20px; background-color: #f3f4f6; border-left: 4px solid #dc2626; border-radius: 5px;">
          <p style="margin: 0; font-size: 15px; color: #1f2937;"><strong>Message:</strong> "${message}"</p>
        </div>
        <p style="font-size: 14px; color: #9ca3af; margin-top: 30px;">Sent from Portfolio Contact Form</p>
      </div>
    </div>
  `,
    });

    await sendMail({
      to: email,
      subject: "Thanks for Contacting Harshal Khairnar!",
      html: `
    <div style="font-family: 'Segoe UI', sans-serif; background-color: #f9fafb; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #dc2626;">Hello ${name},</h2>
        <p style="font-size: 16px; color: #111827;">
          Thank you for reaching out to me!<br/>
          Your message has been received and I’ll get back to you soon.
        </p>
        <div style="background-color: #f3f4f6; padding: 15px 20px; margin: 20px 0; border-left: 4px solid #dc2626; border-radius: 5px;">
          <p style="margin: 0; font-style: italic; color: #1f2937;">"${message}"</p>
        </div>
        <p style="font-size: 16px; color: #1f2937;">
          In the meantime, feel free to explore my portfolio and connect with me.
        </p>
        <a href="https://harshal-khairnar.vercel.app/" target="_blank" style="display: inline-block; margin-top: 15px; padding: 10px 20px; background-color: #111827; color: #ffffff; text-decoration: none; border-radius: 5px;">Visit My Portfolio</a>
        <p style="font-size: 14px; color: #6b7280; margin-top: 10px;">
          Warm regards,<br/>
          <strong style="color: #111827;">Harshal Khairnar</strong><br/>
          <span style="color: #6b7280;">Full Stack Developer</span>
        </p>
      </div>
    </div>
  `,
    });

    return { success: true, name: name };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

export const deleteMessage = async (id) => {
  try {
    connectDb();
    await Message.findByIdAndDelete(id);
    revalidatePath("/admin/harshal/buddy");
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
