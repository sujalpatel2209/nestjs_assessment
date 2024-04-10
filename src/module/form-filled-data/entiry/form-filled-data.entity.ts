import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../base/base.entity';
import { FormFilledEntity } from '../../form-filled/entity/form-filled.entiry';
import { FormFieldEntity } from '../../form-field/entiry/form-field.entity';

@Entity('form_filled_data')
export class FormFilledDataEntity extends BaseEntity {
  @ManyToOne(
    () => FormFilledEntity,
    (form_filled) => form_filled.form_filled_data,
  )
  @JoinColumn({ name: 'form_filled_id' })
  form_filled: FormFilledEntity;

  @ManyToOne(() => FormFieldEntity, (form_field) => form_field.form_filled_data)
  @JoinColumn({ name: 'form_field_id' })
  form_field: FormFilledEntity;

  @Column()
  form_filled_id: number;

  @Column()
  form_field_id: number;

  @Column()
  field_value: string;
}
