interface IOrdersDTO {
  order_id?: number;
  user_id: number;
  description: string;
  customerReport: string;
  diagnosis?: string;
  warrantyAndNotes?: string;
  serviceValue?: number;
  sparePartsValue?: number;
  status: number;
  finishedAt?: string;
  createdAt: string;
  UpdatedAt: string;
}

export { IOrdersDTO };
