# Apple Store Monitor

> Apple Store 监控系统 - 基于 pnpm workspace 构建的全栈应用

## 项目概述

Apple Store Monitor 是一个用于监控 Apple Store 产品状态的系统，采用 monorepo 架构，包含服务端 API 和微信小程序客户端。

## 技术架构

```mermaid
graph TB
    A[微信小程序客户端] --> B[API Gateway]
    B --> C[服务端应用]
    C --> D[数据库]
    C --> E[Redis缓存]
    C --> F[Apple Store API]
    
    subgraph "Monorepo Structure"
        G[apps/miniprogram]
        H[apps/srv]
        I[packages/shared]
    end
```

## 项目结构

```
apple-store-monitor/
├── apps/
│   ├── srv/                    # 服务端应用
│   │   ├── src/
│   │   │   ├── controllers/    # API 控制器
│   │   │   ├── services/       # 业务逻辑层
│   │   │   ├── models/         # 数据模型
│   │   │   ├── middlewares/    # 中间件
│   │   │   ├── utils/          # 工具函数
│   │   │   └── config/         # 配置文件
│   │   └── package.json
│   └── miniprogram/            # 微信小程序
│       ├── src/
│       │   ├── pages/          # 页面
│       │   ├── components/     # 组件
│       │   ├── services/       # API 服务
│       │   └── utils/          # 工具函数
│       └── package.json
├── packages/
│   └── shared/                 # 共享代码包
├── pnpm-workspace.yaml         # workspace 配置
├── package.json                # 根配置
└── .cursorrules               # Cursor AI 规则
```

## 开发环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- 微信开发者工具
- Docker (可选，用于部署)

## 快速开始

### 1. 安装依赖

```bash
# 安装所有依赖
pnpm install
```

### 2. 开发环境启动

```bash
# 启动服务端开发环境
pnpm dev:srv

# 启动小程序开发环境
pnpm dev:mini

# 同时启动所有服务
pnpm dev
```

### 3. 构建项目

```bash
# 构建服务端
pnpm build:srv

# 构建小程序
pnpm build:mini

# 构建所有项目
pnpm build
```

## 开发规范

### 代码规范
- 使用 TypeScript 进行开发
- 遵循 ESLint + Prettier 代码规范
- 使用 Conventional Commits 提交规范
- 遵循 JSDoc 注释规范

### Git 工作流
- `main`: 主分支，用于生产环境
- `develop`: 开发分支
- `feature/*`: 功能分支
- `hotfix/*`: 热修复分支

### 提交规范
```bash
feat(srv): 添加用户认证接口
fix(mini): 修复页面加载问题
docs: 更新API文档
style: 代码格式化
refactor: 重构数据库连接逻辑
test: 添加单元测试
chore: 更新依赖包
```

## 服务端技术栈

- **框架**: Fastify / Koa.js
- **语言**: TypeScript
- **数据库**: MySQL/PostgreSQL + Redis
- **ORM**: Prisma / TypeORM
- **认证**: JWT + 微信小程序认证
- **日志**: Winston / Pino
- **部署**: Docker + PM2

## 微信小程序技术栈

- **开发框架**: 原生小程序 / Taro / uni-app
- **语言**: TypeScript
- **状态管理**: MobX / Pinia
- **UI 组件**: WeUI / Vant Weapp
- **网络请求**: 封装的 wx.request

## 可用脚本

```bash
# 开发
pnpm dev:srv          # 启动服务端开发环境
pnpm dev:mini         # 启动小程序开发环境

# 构建
pnpm build:srv        # 构建服务端
pnpm build:mini       # 构建小程序

# 测试
pnpm test             # 运行所有测试
pnpm test:coverage    # 运行测试并生成覆盖率报告

# 代码质量
pnpm lint             # 检查代码规范
pnpm lint:fix         # 自动修复代码规范问题
pnpm typecheck        # TypeScript 类型检查
pnpm format           # 格式化代码

# 清理
pnpm clean            # 清理构建文件
```

## 环境配置

### 服务端环境变量
```bash
# .env
NODE_ENV=development
PORT=3000
DATABASE_URL=mysql://user:password@localhost:3306/apple_monitor
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-jwt-secret
WECHAT_APP_ID=your-wechat-app-id
WECHAT_APP_SECRET=your-wechat-app-secret
```

### 小程序配置
```javascript
// src/config/index.js
export const config = {
  apiBaseUrl: 'https://api.example.com',
  appId: 'your-wechat-app-id',
  version: '1.0.0'
}
```

## 部署

### 服务端部署
```bash
# 使用 Docker
docker build -t apple-store-monitor-srv ./apps/srv
docker run -d -p 3000:3000 apple-store-monitor-srv

# 使用 PM2
pnpm build:srv
pm2 start ecosystem.config.js
```

### 小程序发布
1. 使用微信开发者工具进行预览和调试
2. 提交审核和发布
3. 设置服务器域名白名单

## 监控与日志

- 服务端使用 Winston/Pino 进行日志记录
- 集成 APM 工具进行性能监控
- 小程序使用微信提供的性能监控

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证

本项目采用 ISC 许可证。

## 更新日志

### v1.0.0 (待发布)
- 初始项目架构
- 基础服务端 API
- 微信小程序基础功能

---

**注意**: 这是一个正在开发中的项目，功能和文档会持续更新。
