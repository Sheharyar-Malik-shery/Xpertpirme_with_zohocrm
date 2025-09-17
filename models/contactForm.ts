// models/ContactForm.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IContactForm extends Document {
  service: string;
  First_Name: string;
  Last_Name:string;
  Email: string;
  Phone: string;
  Company: string;
  message: string;
  createdAt?: Date;
}

const ContactFormSchema: Schema<IContactForm> = new Schema(
  {
    service: { type: String, required: [true,""] },
    First_Name: { type: String, required: true },
    Email: { type: String, required: true },
    Phone: { type: String, required: true },
    Company: { type: String, required: true },
    message: { type: String, required: true },
    Last_Name:{type:String, required:true},
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

// Prevent model overwrite error in Next.js hot reload
export default mongoose.models.ContactForm ||
  mongoose.model<IContactForm>('ContactForm', ContactFormSchema);
