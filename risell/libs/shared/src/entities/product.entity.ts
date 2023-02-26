import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('char', { length: 36 })
  categoryId: string;

  @CreateDateColumn()
  createdAt: string;

  @Column()
  editedAt: string;

  @Column()
  isShippable: boolean;

  @Column()
  isAuction: boolean;

  @Column({ type: 'money' })
  price: bigint;

  @Column('char', { length: 36 })
  currencyId: string;

  @Column('smallint')
  views: number;

  @Column('smallint')
  likes: number;
}