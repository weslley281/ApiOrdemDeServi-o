interface ICreateUserDTO {
  user_id?: number;
  name: string;
  phone: string;
  email: string;
  birthday: string;
  admin: boolean;
  encryptedpassword: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export { ICreateUserDTO };
