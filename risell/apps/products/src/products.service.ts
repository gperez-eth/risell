import { HttpStatus, Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { RsGetProductsDto } from './dto/rs-get-products.dto';
import {
  IRqRsFactory,
  RQ_RS_FACTORY_SERVICE,
} from './interfaces/rq-rs.interface';

@Injectable()
export class ProductsService {
  constructor(
    private prisma: PrismaService,

    @Inject(RQ_RS_FACTORY_SERVICE)
    private readonly rqRsFactoryService: IRqRsFactory,
  ) {}

  async getProductsHomeList({ skip, take }: PaginationQueryDto) {
    let rsGetProductsDto: RsGetProductsDto;

    try {
      const res = await this.prisma.products.findMany({
        skip: skip,
        take: take,
      });
      if (res && res.length) {
        rsGetProductsDto =
          this.rqRsFactoryService.ProductEntitiestoGetProductsDTOResponse(
            HttpStatus.OK,
            '',
            res,
          );
      } else {
        rsGetProductsDto =
          this.rqRsFactoryService.ProductEntitiestoGetProductsDTOResponse(
            HttpStatus.NOT_FOUND,
            'Failed to get products',
            null,
          );
      }
    } catch (e) {
      rsGetProductsDto =
        this.rqRsFactoryService.ProductEntitiestoGetProductsDTOResponse(
          HttpStatus.INTERNAL_SERVER_ERROR,
          'Failed to get products',
          null,
        );
    }
    console.log('[ms-get-products][service] - get(', rsGetProductsDto, ')');
    return rsGetProductsDto;
  }
}
