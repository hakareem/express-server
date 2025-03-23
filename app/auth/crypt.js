import { genSalt, hash as genHash, compare } from "bcrypt";

export const hash = async (input) => {
    const salt = await genSalt(10);
    return genHash(input, salt);
}

export const compareHash = async (input, hash) => {
    return await compare(input, hash);
}