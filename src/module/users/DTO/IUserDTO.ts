interface ICreateUserDTO {
  user_id?: number;
  name: string;
  phone: string;
  email: string;
  birthday: string;
  admin: boolean;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export { ICreateUserDTO };
