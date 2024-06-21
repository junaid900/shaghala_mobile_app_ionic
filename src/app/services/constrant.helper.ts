import { Device } from "@capacitor/device";
import { getUser, setUser } from "./session.helper";

export const generateLocalUser = () => {
    var data =  {type:"local",session_id: "SESSIONID1218239137LOCALUSER"};
    setUser(data);
}
export const getUserId = async () => {
    let id = '';
    if(getUser().type == 'local'){
        id = (await Device.getId()).uuid;
    }else{
        id = getUser().user_id;
    }
    return id;
}
const SALT = "mjcoders.com(motor)";
const crypt = (text) => {
    const salt = SALT;
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return text
        .split("")
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join("");
};
const decrypt = (encoded) => {
    const salt = SALT;
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded
        .match(/.{1,2}/g)
        .map((hex) => parseInt(hex, 16))
        .map(applySaltToChar)
        .map((charCode) => String.fromCharCode(charCode))
        .join("");
};
export function convertToBase64(str) {
    try {
        let encode = window.btoa(unescape(encodeURIComponent(crypt(str))));
        return encode;
    } catch (e) {
        console.log(e);
        return null;
    }
}
export function convertFromBase64(str) {
    try {
        let decode = decrypt(decodeURIComponent(escape(window.atob((str)))));
        return decode;
    } catch (e) {
        return null;
    }
}