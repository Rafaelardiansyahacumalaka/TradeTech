import {
    mysqlTable,
    int,
    varchar,
    timestamp
} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
    id: int("id").autoincrement().primaryKey(),

    username: varchar("username", { length: 100 }).notNull(),

    email: varchar("email", { length: 100 }).notNull().unique(),

    password: varchar("password", { length: 255 }).notNull(),

    createdAt: timestamp("created_at").defaultNow(),
});