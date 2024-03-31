import { pgTable, serial, varchar, timestamp, foreignKey, primaryKey, integer } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const pgmigrations = pgTable("pgmigrations", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	runOn: timestamp("run_on", { mode: 'string' }).notNull(),
});

export const users = pgTable("users", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
});

export const follows = pgTable("follows", {
	to: integer("to_").notNull().references(() => users.id),
	from: integer("from_").notNull().references(() => users.id),
},
(table) => {
	return {
		followsPkey: primaryKey({ columns: [table.to, table.from], name: "follows_pkey"})
	}
});