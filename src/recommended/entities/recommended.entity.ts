import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('recommendations')
export class recommended {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'int' })
  foodTastes: number;

  @Column({ type: 'int' })
  preferences: number;

  @Column({ type: 'varchar', length: 255 })
  typeResponse: string;

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;
}
