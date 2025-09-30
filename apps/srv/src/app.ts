/**
 * Apple Store Monitor 服务端应用入口
 * @description Fastify 应用主文件
 */

import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';

const server = Fastify({
  logger: {
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  },
});

/**
 * 注册插件
 */
async function registerPlugins() {
  // 安全头
  await server.register(helmet);

  // CORS 配置
  await server.register(cors, {
    origin: process.env.NODE_ENV === 'production' 
      ? ['https://yourdomain.com'] 
      : true,
  });

  // 限流
  await server.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute',
  });
}

/**
 * 注册路由
 */
async function registerRoutes() {
  // 健康检查
  server.get('/health', async () => {
    return { 
      status: 'ok', 
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  });

  // API 路由前缀
  server.register(async function (fastify) {
    // 这里后续会添加具体的业务路由
    fastify.get('/', async () => {
      return { message: 'Apple Store Monitor API' };
    });
  }, { prefix: '/api/v1' });
}

/**
 * 启动服务器
 */
async function start() {
  try {
    await registerPlugins();
    await registerRoutes();

    const port = Number(process.env.PORT) || 3000;
    const host = process.env.HOST || '0.0.0.0';

    await server.listen({ port, host });
    
    console.log(`🚀 Server is running on http://${host}:${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

// 优雅关闭
process.on('SIGINT', async () => {
  try {
    await server.close();
    console.log('👋 Server closed gracefully');
    process.exit(0);
  } catch (err) {
    console.error('Error during server shutdown:', err);
    process.exit(1);
  }
});

// 启动应用
start();
