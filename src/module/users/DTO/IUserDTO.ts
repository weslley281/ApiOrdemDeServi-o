interface ICreateUserDTO {
  user_id?: number;
  name: string;
  phone: string;
  email: string;
  admin: boolean;
  created_at: string;
}

export { ICreateUserDTO };
