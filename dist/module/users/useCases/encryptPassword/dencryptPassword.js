"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptPassword = void 0;
const crypto_1 = __importDefault(require("crypto"));
const datas = {
    algorithm: 'aes256',
    secret: 'chaves',
    type: 'hex',
};
function decryptPassword(password) {
    const decipher = crypto_1.default.createDecipher(datas.algorithm, datas.secret);
    decipher.update(password, datas.type);
    return decipher.final();
}
exports.decryptPassword = decryptPassword;
