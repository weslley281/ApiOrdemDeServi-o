interface IOrdersDTO {
  order_id?: number;
  user_id: number;
  client_id: number;
  description: string;
  customerReport: string;
  diagnosis?: string;
  warrantyAndNotes?: string;
  serviceValue?: number;
  sparePartsValue?: number;
  status: number;
  finisheAt?: string;
  finished: boolean;
  finishedAt?: boolean;
  createdAt?: string;
  UpdatedAt?: string;
}

export { IOrdersDTO };
