import { ProductEntity } from '../entities/product.entity';
import { BaseInterfaceRepository } from '../repositories/base/base.interface.repository';

export type ProductRepositoryInterface = BaseInterfaceRepository<ProductEntity>;
