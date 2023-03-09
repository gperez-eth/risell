import { User } from '../entities/user.entinty';
import { BaseInterfaceRepository } from '../repositories/base/base.interface.repository';

export type UserRepositoryInterface = BaseInterfaceRepository<User>;
