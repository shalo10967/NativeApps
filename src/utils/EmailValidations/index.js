import publicEmail from "./publicEmail";

import { hashEncrypt, encodeHash } from '../Helpers'

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;


export const  isValidEmail = value => {
    if (value === "") return false;
    return emailRegex.test(value);
}

export const isPublicEmail = value => {
    if (!isValidEmail(value.trim())) return false;
    return !(publicEmail.indexOf(hashEncrypt(encodeHash(value.trim().replace(/.*@/, "")))) > -1);
}
