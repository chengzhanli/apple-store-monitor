/**
 * 应用常量定义
 */

// API 状态码
export const API_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
} as const;

// 产品分类
export const PRODUCT_CATEGORIES = {
  IPHONE: 'iPhone',
  IPAD: 'iPad',
  MAC: 'Mac',
  APPLE_WATCH: 'Apple Watch',
  AIRPODS: 'AirPods',
  ACCESSORIES: 'Accessories',
} as const;

// 通知类型
export const NOTIFICATION_TYPES = {
  AVAILABILITY: 'availability',
  PRICE_CHANGE: 'price_change',
  SYSTEM: 'system',
} as const;

// 用户角色
export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin',
} as const;

// 监控状态
export const MONITOR_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PAUSED: 'paused',
} as const;
