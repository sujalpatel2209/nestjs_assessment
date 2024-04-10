import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { FormEntity } from '../../form/entity/form.entity';
import { BaseEntity } from '../../../base/base.entity';
import { FormFilledDataEntity } from '../../form-filled-data/entiry/form-filled-data.entity';

@Entity('form_fields')
export class FormFieldEntity extends BaseEntity {
  @ManyToOne(() => FormEntity, (form) => form.form_fields)
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

  @Column()
  field_name: string;

  @Column()
  field_type: string;
}
