import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("students")
export class Student {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 100, nullable: true })
  standard?: string;

  @Column({ type: "text" })
  rollNo: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(name: string, standard: string, rollNo: string) {
    this.name = name;
    this.standard = standard;
    this.rollNo = rollNo;
  }
}
