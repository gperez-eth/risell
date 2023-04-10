// export base
export * from './shared.module';
export * from './shared.service';

// export middlewares
export * from './middlewares/correlation-id.middleware';

// export modules
export * from './modules/logger.module';
export * from './modules/postgresdb.module';

//export entities
export * from './entities/product.entity';
export * from './entities/product-images.entity';
export * from './entities/currency.entity';
export * from './entities/bid.entity';
export * from './entities/auction.entity';
export * from './entities/user.entinty';

//export repositories
export * from './repositories/products.repository';
export * from './repositories/users.repository';
export * from './repositories/bids.repository';
export * from './repositories/auctions.repository';

// export interfaces
export * from './interfaces/products.repository.interface';
export * from './interfaces/users.repository.interface';
export * from './interfaces/bid.repository.interface';
export * from './interfaces/auction.repository.interface';

// export dto
export * from './dto/pagination-query.dto';
export * from './dto/nearestProducts-query.dto';
export * from './dto/productInfo-query.dto';
export * from './dto/newBid-query.dto';
