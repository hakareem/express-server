import mongoose from "mongoose";
import dotenv from "dotenv";
import readline from "readline";
import { stdin as input, stdout as output } from "process";
import { User } from "./app/auth/model.js";
import { hash } from "./app/auth/crypt.js";

dotenv.config();

const rl = readline.createInterface({
  input,
  output
});

await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kylri.mongodb.net/`)

rl.question("Enter email: ", async (email) => {
  rl.question("Enter password: ", async (password) => {
    const hashedPw = await hash(password);

    await User.create({
        email: email.toLowerCase(),
        password: hashedPw
    })

    rl.close();
  });
});