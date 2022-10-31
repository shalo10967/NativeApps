import { encode, decode } from "base-64";

/**
 * Metodo encargado de encriptar datos
 * @memberof Helper
 * @function hashEncrypt
 * @return {String} datos encriptado
 */
export const hashEncrypt = (str) => {
  return (str ? str : this)
    .split("")
    .map(function (_) {
      if (!_.match(/[A-Za-z]/)) return _;
      const c = Math.floor(_.charCodeAt(0) / 97);
      const k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
      return String.fromCharCode(k + (c == 0 ? 64 : 96));
    })
    .join("");
};

/**
 * Metodo encargado de desencriptar datos
 * @memberof Helper
 * @function hashDecrypt
 * @return {String} datos desencriptado
 */
export const hashDecrypt = (str) => {
  return (str ? str : this)
    .split("")
    .map(function (_) {
      if (!_.match(/[A-Za-z]/)) return _;
      const c = Math.floor(_.charCodeAt(0) / 97);
      const k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
      return String.fromCharCode(k + (c == 0 ? 64 : 96));
    })
    .join("");
};

/**
 * Metodo encargado de encriptar datos en
 * base64
 * @memberof Helper
 * @function encodeHash
 * @return {String} datos encriptado
 */
export const encodeHash = (str) => {
  return encode(str);
};

/**
 * Metodo encargado de desencriptar datos
 * en base64
 * @memberof Helper
 * @function decodeHash
 * @return {String} datos desencriptado
 */
export const decodeHash = (str) => {
  return decode(str);
};

export const maskMoney = str => {
  if (str.length > 3) {
    let mask = '';
    for (i = 3; i < str.length; i += 3) {
      mask = '.' + str.substr(i * -1, 3) + mask;
    }

    if (str.length % 3 === 0) {
      mask = str.substr(0, 3) + mask;
    } else {
      mask = str.substr(0, str.length % 3) + mask;
    }

    return mask;
  }

  return str;
};