import { connectDb } from "./connectDb";
import { Message } from "./models";

export const getContactDetails=async()=>{
    try {
        connectDb();
        const queries=await Message.find();
        return queries;
    } catch (error) {
        throw new Error("Failed to fetch Contacts!");
    }
}