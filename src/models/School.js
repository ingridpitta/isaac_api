import mongoose from "mongoose";

const { Schema } = mongoose;

const schoolSchema = new Schema({
  nome: { type: String, required: true }
});

const School = mongoose.model("School", schoolSchema);

export default School;