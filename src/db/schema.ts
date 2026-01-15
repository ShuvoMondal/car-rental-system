import { pgTable, serial, text, timestamp, integer, date, decimal, pgEnum } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
    role: text("role").default("user"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
});

export const bookingStatusEnum = pgEnum("booking_status", ["booked", "completed", "cancelled"]);

export const bookings = pgTable("bookings", {
    id: serial("id").primaryKey(),
    userId: integer("user_id").notNull(),
    vehicleId: integer("vehicle_id").notNull(),
    days: integer("days").notNull(),
    status: bookingStatusEnum("status").default("booked"),
    totalRent: decimal("total_rent").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
});

export const vehicles = pgTable("vehicles", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description").notNull(),
    rentPerDay: decimal("rent_per_day").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
});