import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from './base/base.abstract.repository';
import { User } from '../entities/user.entinty';
import { UserRepositoryInterface } from '../interfaces/users.repository.interface';

@Injectable()
export class UsersRepository
  extends BaseAbstractRepository<User>
  implements UserRepositoryInterface
{
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {
    super(UserRepository);
  }
}
