import mongoose, {Schema, Document} from "mongoose";

export interface Message extends Document{
content:string;
CreatedAt: Date

}

const MessageSchema: Schema<Message> = new Schema({
content: {
    type: String,
    required: true
},
createdAt : {
    type:Date,
    required:true,
    default: Date.now
}

})

export interface Message extends Document{
    username:string;
    email:  string;
    password:string;
    verifyCode: string;
    

    
    }