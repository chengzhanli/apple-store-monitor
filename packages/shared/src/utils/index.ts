/**
 * 通用工具函数
 */

/**
 * 延迟执行函数
 * @param ms 延迟毫秒数
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * 格式化价格显示
 * @param price 价格数值
 * @param currency 货币符号
 */
export const formatPrice = (price: number, currency = '¥'): string => {
  return `${currency}${price.toLocaleString()}`;
};

/**
 * 格式化时间显示
 * @param date 日期对象
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * 生成唯一ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

/**
 * 防抖函数
 * @param func 要防抖的函数
 * @param wait 等待时间
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
