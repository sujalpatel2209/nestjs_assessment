import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { FormEntity } from '../../form/entity/form.entity';
import { BaseEntity } from '../../../base/base.entity';
import { FormFilledDataEntity } from '../../form-filled-data/entiry/form-filled-data.entity';

@Entity('form_filled')
export class FormFilledEntity extends BaseEntity {
  @ManyToOne(() => FormEntity, (form) => form.form_filled)
  @JoinColumn({ name: 'form_id' })
  form: FormEntity;

  @OneToMany(
    () => FormFilledDataEntity,
    (form_filled_data) => form_filled_data.form_filled,
  )
  @JoinColumn({ name: 'id' })
  form_filled_data: FormFilledDataEntity[];

  @Column()
  form_id: number;

  @Column({
    type: 'timestamp',
    name: 'filled_date',
    default: (): string => 'CURRENT_TIMESTAMP(6)',
  })
  filled_date: Date;
}
