"use server";

import { revalidatePath } from "next/cache";
import { connectDb } from "./connectDb";
import { Message } from "./models";

export const contact = async (previousState, formdata) => {
  const name = formdata.get("name");
  const email = formdata.get("email");
  const message = formdata.get("message");

  //   console.log(name, email, message, "contact detail");

  try {
    connectDb();
    const newMessage = new Message({
      name: name,
      email: email,
      message: message,
    });
    // console.log(newMessage, "now it is not saved db for testing only");
    const res = await newMessage.save();
    // console.log("msg saved to Db", res);

    return { success: true, name: name };
  } catch (error) {
    // console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const deleteMessage=async (id)=>{
  
  try {
    connectDb();
    await Message.findByIdAndDelete(id);
    revalidatePath("/admin/harshal/buddy");
  } catch (error) {
    return { error: "Something went wrong" };
  }
}
