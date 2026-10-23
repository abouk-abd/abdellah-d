import { db } from './index.ts';
import { orders } from './schema.ts';
import { desc, eq } from 'drizzle-orm';

export interface CreateOrderInput {
  fullName: string;
  phone: string;
  city: string;
  address?: string;
  packId: string;
  packName: string;
  totalPrice: number;
  notes?: string;
  userId?: number;
}

export async function createOrder(data: CreateOrderInput) {
  try {
    const result = await db.insert(orders)
      .values({
        fullName: data.fullName,
        phone: data.phone,
        city: data.city,
        address: data.address || null,
        packId: data.packId,
        packName: data.packName,
        totalPrice: data.totalPrice,
        notes: data.notes || null,
        userId: data.userId || null,
      })
      .returning();

    return result[0];
  } catch (error) {
    console.error('Database query failed in createOrder:', error);
    throw new Error('Failed to record order. Please try again later.', { cause: error });
  }
}

export async function getOrders(limit = 50) {
  try {
    return await db.select().from(orders).orderBy(desc(orders.createdAt)).limit(limit);
  } catch (error) {
    console.error('Database query failed in getOrders:', error);
    throw new Error('Failed to fetch orders. Please try again later.', { cause: error });
  }
}

export async function getOrdersByUserId(userId: number) {
  try {
    return await db.select().from(orders).where(eq(orders.userId, userId)).orderBy(desc(orders.createdAt));
  } catch (error) {
    console.error('Database query failed in getOrdersByUserId:', error);
    throw new Error('Failed to fetch user orders. Please try again later.', { cause: error });
  }
}
