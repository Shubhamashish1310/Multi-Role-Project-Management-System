// src/models/Company.js
import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    domain: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model('Company', companySchema);
