import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';

import AppError from '../errors/AppError';

interface RequestDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: RequestDTO): Promise<User> {
    const userRepository = getRepository(User);

    const chekUserExist = await userRepository.findOne({
      where: {
        email,
      },
    });

    if (chekUserExist) {
      throw new AppError('Email address already used by another user');
    }

    const hashedPassord = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassord,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
