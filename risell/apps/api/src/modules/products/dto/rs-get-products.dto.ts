import { RsGenericHeaderDto } from 'apps/api/src/dto/rs-generic-header.dto';

export class RsGetProductsDataDto {
  description: string;
}

export class RsGetProductsDto {
  rsGenericHeaderDto: RsGenericHeaderDto;
  rsGetProductsDataDto: RsGetProductsDataDto;
}
