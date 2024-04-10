import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  status: boolean;

  @CreateDateColumn({
    select: false,
    type: 'timestamp',
    name: 'created_at',
    default: (): string => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    select: false,
    type: 'timestamp',
    name: 'updated_at',
    default: (): string => 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
