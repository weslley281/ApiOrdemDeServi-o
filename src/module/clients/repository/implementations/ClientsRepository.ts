import { clientModel } from '../../../../database/models/clients';
import { IClientsDTO } from '../../DTO/IClientsDTO';
import { Clients } from '../../models/Clients';
import { IClientsRepository } from '../IClientsRepository';

class ClientsRepository implements IClientsRepository {
  private static INSTANCE: ClientsRepository;

  public static getInstance() {
    if (!ClientsRepository.INSTANCE) {
      ClientsRepository.INSTANCE = new ClientsRepository();
    }

    return ClientsRepository.INSTANCE;
  }

  async create({
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
  }: IClientsDTO): Promise<Clients> {
    const [client, created]: any = await clientModel.findOrCreate({
      where: { email: email },
      defaults: {
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
      },
    });

    return client;
  }

  async findyById(client_id: number): Promise<Clients> {
    const client: any = await clientModel.findOne({
      where: { client_id: client_id },
    });

    return client;
  }

  async findyByEmail(email: string): Promise<Clients> {
    const client: any = await clientModel.findOne({
      where: { email: email },
    });

    return client;
  }

  async findyByDocument(document: string): Promise<Clients> {
    const client: any = await clientModel.findOne({
      where: { document: document },
    });

    return client;
  }

  async listClients(): Promise<Clients[]> {
    const client: any = await clientModel.findAll();

    return client;
  }
}

export { ClientsRepository };
