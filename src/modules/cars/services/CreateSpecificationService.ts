import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  private specificationsRepository: ISpecificationsRepository;

  constructor(specificationsRepository: ISpecificationsRepository) {
    this.specificationsRepository = specificationsRepository;
  }

  execute({ name, description }: IRequest): void {
    const specificationsAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationsAlreadyExists) {
      throw new Error('Specification already exists');
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
