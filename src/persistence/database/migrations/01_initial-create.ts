import { DataTypes } from "sequelize";
import type { Migration } from "../umzug";

export const up: Migration = async ({ context: queryInterface }) => {
  await queryInterface.createTable("users", {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    level: {
      type: DataTypes.INTEGER,
    },
    stage: {
      type: DataTypes.STRING,
    },
    stats: {
      type: DataTypes.JSONB,
    },
    levels: {
      type: DataTypes.JSONB,
    },
  });

  await queryInterface.createTable("role", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data: {
      type: DataTypes.JSONB,
    },
  });

  await queryInterface.createTable("place", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data: {
      type: DataTypes.JSONB,
    },
  });

  await queryInterface.createTable("chapter", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
    },
    mainChapterId: {
      type: DataTypes.INTEGER,
    },
    userPrompt: {
      type: DataTypes.TEXT,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    generated: {
      type: DataTypes.BOOLEAN,
    },
    data: {
      type: DataTypes.JSONB,
    },
  });

  await queryInterface.createTable("decision", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    chapterFrom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "chapter", key: "id" },
    },
    chapterTo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "chapter", key: "id" },
    },
    data: {
      type: DataTypes.JSONB,
    },
  });

  await queryInterface.createTable("subscription", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
    },
    code: {
      type: DataTypes.STRING,
    },
  });
};

export const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.dropTable("users");
  await queryInterface.dropTable("role");
  await queryInterface.dropTable("place");
  await queryInterface.dropTable("decision");
  await queryInterface.dropTable("chapter");
  await queryInterface.dropTable("subscription");
};
