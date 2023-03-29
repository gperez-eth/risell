import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bid } from './bid.entity';
import { Product } from './product.entity';

@ObjectType()
@Entity('user')
export class User {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  username: string;

  @Field(() => String)
  @Column({
    default:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAolBMVEVWHj8BAfs3+qkAAP9ZHycQBvFYHzZBF5NXHjxZHytSHVMhC9w17683+6hKGnZXHjk5/6QVX+tWGT5YADVXCzs58KNMiGxUO0lXEzxXADhDwIkqvshQZlsNAPQ2/6o4FK1AFpddIAAy5LUz97NNYmtTE1FTAE5AuJNTak5ZFCdaACEUW+wfJt8gAN4wvrxEGItBCJVIaXtbIBpPHGImDdRTI1GELHSgAAACnklEQVR4nO3d21LiQBSF4UhAwOEo4kQkEcWzIh7f/9XmCfaaqkXoisX/3/emv9Irmq7Osrh25+h31GkLhQphY0KIsPkhRNj8ECJsfggRNj+ECJsfQoTNDyHC5ocQYfPTwnbcdZn/jsprocg6ceXNIGx9e3cSdf+wjheK1g/34cy7WzHzphSKTPzx80E1jKqWRS9qtojXqarFLJxZLMVeBrlQaOGwFTVcFuE//sWiCtepqsVFOLNYir0gRIgQIUKECBEiRIgQIUKECBEiRIgQIcJdhfNJWPX41I96toXP4cynxyrezNwVHr1M417/hG3eTOHbJh76KvbyohBSqFJnQZcTSzi5VEPdjdpC0Q7CPewGoRNChPWG0AkhwnpD6IQQYb0hdEKIsN4QOiFEWG8InRAirLfM/ZpZfuddednfeat1WTduW4qZV/G6949zr4/3eOiVIJZbociO4z7FraB81I8XFmdeRTyyPxLCzqdQhAd2mb73lI/GamntjaVwHze7ENYdQi+EKUPohTBlCL0QpgyhF8KUIfRCmDKEXghThtALYcoQeiFMGUIvhClD6IUwZQi9EKYMoRfClCH0QpgyhF4IU4bQC2HKEHohTBlCr0MXit/q98wP7Lm/1d+LUNy3WH15xN7XyrtvsZ9XWNQ1lZW85BB2vDLvzCR/ZybvmsKuee8JIUKECBEiRIgQIUKECBEiRIgQIUKECBHuKnTf5faFXqUr7H/Hz02oNlvvXGq8Fe9bqL77pjALXwz5T+7B29j9QBdIRERERERERERERAfTqaiXOrUZG/hX9HOSth+1GZc4a7WGUdXUPCdym1bhXlqtmSucizdhpt5Rn91UvF0zR4gQIUKECBEiRIgQIUKECBEiRIgQIUKECA9B+A9kkyupqTa+1QAAAABJRU5ErkJggg==',
  })
  avatar: string;

  @Field(() => [Product])
  @OneToMany(() => Product, (product) => product.user)
  product?: Product[];

  @Field(() => [Bid])
  @OneToMany(() => Bid, (bid) => bid.user)
  bids?: Bid[];

  @Field(() => String)
  @Column()
  location: string;
}
