/**
 * 通用类型定义
 */

import { z } from 'zod';

// API 响应基础结构
export const ApiResponseSchema = z.object({
  code: z.number(),
  message: z.string(),
  data: z.any().optional(),
  timestamp: z.string(),
});

export type ApiResponse<T = any> = {
  code: number;
  message: string;
  data?: T;
  timestamp: string;
};

// 用户信息类型
export const UserSchema = z.object({
  id: z.string(),
  openid: z.string(),
  nickname: z.string().optional(),
  avatar: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof UserSchema>;

// Apple Store 产品信息
export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  model: z.string(),
  category: z.string(),
  price: z.number(),
  availability: z.boolean(),
  storeUrl: z.string(),
  imageUrl: z.string().optional(),
});

export type Product = z.infer<typeof ProductSchema>;

// 监控任务
export const MonitorTaskSchema = z.object({
  id: z.string(),
  userId: z.string(),
  productId: z.string(),
  isActive: z.boolean(),
  notifyOnAvailable: z.boolean(),
  notifyOnPriceChange: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type MonitorTask = z.infer<typeof MonitorTaskSchema>;
