import crypto from 'crypto';

const datas = {
  algorithm: 'aes256',
  secret: 'chaves',
  type: 'hex',
};

function encryptPassword(password: string) {
  const cipher: any = crypto.createCipher(datas.algorithm, datas.secret);
  cipher.update(password);
  return cipher.final(datas.type);
}

export { encryptPassword };
