import { Clients } from '../../models/Clients';
import { IClientsRepository } from '../../repository/IClientsRepository';

interface IRequest {
  name: string;
  phone: string;
  email: string;
  birthday: string;
  country: string;
  state: string;
  city: string;
  district: string;
  address: string;
  cep: number;
  document: string;
}

class CreateClientsUseCase {
  constructor(private clientsRepository: IClientsRepository) {}

  async execute({
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
  }: IRequest): Promise<Clients> {
    const clientAlreadyExistsEmail = await this.clientsRepository.findyByEmail(
      email
    );
    const clientAlreadyExistsDocument =
      await this.clientsRepository.findyByDocument(document);

    if (clientAlreadyExistsDocument) {
      throw new Error('Client already exists');
    }

    if (clientAlreadyExistsEmail) {
      throw new Error('Client already exists');
    }

    return this.clientsRepository.create({
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
    });
  }
}

export { CreateClientsUseCase };
