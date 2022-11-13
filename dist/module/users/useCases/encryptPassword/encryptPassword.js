"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPassword = void 0;
const crypto_1 = __importDefault(require("crypto"));
const datas = {
    algorithm: 'aes256',
    secret: 'chaves',
    type: 'hex',
};
function encryptPassword(password) {
    const cipher = crypto_1.default.createCipher(datas.algorithm, datas.secret);
    cipher.update(password);
    return cipher.final(datas.type);
}
exports.encryptPassword = encryptPassword;
