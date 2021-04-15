import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const studentSchema = new Schema({
  escola: { type: Types.ObjectId, ref: "School", required: true },
  matricula: {type: Types.ObjectId, required: true, unique: true },
  nome: { type: String, required: true },
  datanascimento: {type: Date, required: true},
  usuario: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  cpf:{type: String, required: true, unique: true},
  sexo:{type: String},
  telefone:{type: String},
  celular:{type: String},
  cep:{type: String},
  endereco:{type: String}
});

const Student = mongoose.model("Student", studentSchema);

export default Student;