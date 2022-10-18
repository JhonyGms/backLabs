import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('foodTastes')
export class foodTastes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'int' })
  recomenda: number;

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;
}
