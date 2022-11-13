import crypto from 'crypto';

const datas = {
  algorithm: 'aes256',
  secret: 'chaves',
  type: 'hex',
};

function decryptPassword(password: string) {
  const decipher: any = crypto.createDecipher(datas.algorithm, datas.secret);
  decipher.update(password, datas.type);
  return decipher.final();
}

export { decryptPassword };
