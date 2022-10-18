import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('suggestion')
export class suggestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'int' })
  foodTastes: number;

  @Column({ type: 'int' })
  preferences: number;

  @Column({ type: 'int' })
  typeResponse: number;

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date;
}
