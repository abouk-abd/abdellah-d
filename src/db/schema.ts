import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Define the 'users' table linked to Firebase Auth UID
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(), // Firebase Auth UID
  email: text('email').notNull(),
  displayName: text('display_name'),
  role: text('role').default('customer').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Define the 'orders' table for Moroccan Cash-on-Delivery orders
export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  fullName: text('full_name').notNull(),
  phone: text('phone').notNull(),
  city: text('city').notNull(),
  address: text('address'),
  packId: text('pack_id').notNull(),
  packName: text('pack_name').notNull(),
  totalPrice: integer('total_price').notNull(),
  status: text('status').default('pending').notNull(), // pending | confirmed | shipped | delivered | cancelled
  notes: text('notes'),
  userId: integer('user_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
});

// Relationships
export const usersRelations = relations(users, ({ many }) => ({
  orders: many(orders),
}));

export const ordersRelations = relations(orders, ({ one }) => ({
  user: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
}));
