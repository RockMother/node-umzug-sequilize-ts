import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "users",
})
export class User extends Model {
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.UUID,
    unique: true,
  })
  uuid!: string;

  @Column({
    type: DataType.STRING,
  })
  name?: string | null;

  @Column({
    type: DataType.INTEGER,
  })
  level?: number | null;

  @Column({
    type: DataType.STRING,
  })
  stage?: string | null;

  @Column({
    type: DataType.JSONB,
  })
  stats?: any;

  @Column({
    type: DataType.JSONB,
  })
  levels?: any;
}
