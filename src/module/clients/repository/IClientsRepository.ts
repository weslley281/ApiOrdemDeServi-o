import { IClientsDTO } from '../DTO/IClientsDTO';
import { Clients } from '../models/Clients';

interface IClientsRepository {
  create({
    name,
    phone,
    email,
    birthday,
    country,
    state,
    city,
    district,
    address,
    cep,
    document,
  }: IClientsDTO): Promise<Clients>;
  findyById(client_id: number): Promise<Clients>;
  findyByEmail(email: string): Promise<Clients>;
  findyByDocument(document: string): Promise<Clients>;
  listClients(): Promise<Clients[]>;
}

export { IClientsRepository };
