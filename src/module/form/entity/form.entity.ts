import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { FormFieldEntity } from '../../form-field/entiry/form-field.entity';
import { BaseEntity } from '../../../base/base.entity';
import { FormFilledEntity } from '../../form-filled/entity/form-filled.entiry';

@Entity('form')
export class FormEntity extends BaseEntity {
  @Column({ unique: true })
  title: string;

  @OneToMany(() => FormFieldEntity, (form_fields) => form_fields.form)
  @JoinColumn({ name: 'id' })
  form_fields: FormFieldEntity[];

  @OneToMany(() => FormFilledEntity, (form_filled) => form_filled.form)
  @JoinColumn({ name: 'id' })
  form_filled: FormFilledEntity[];
}
