import { v4 as uuidv4 } from 'uuid';

class Specification {
  id?: string;
  name: string;
  description: string;
  created_at?: Date;

  constructor({ name, id, description }: Specification) {
    this.id = id ?? uuidv4();
    this.name = name;
    this.description = description;
    this.created_at = new Date();
  }
}

export { Specification };
