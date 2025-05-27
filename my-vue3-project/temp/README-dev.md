
# Vue 3 项目规范

## 项目概述
本项目基于 Vue 3、Vue Router 4 和 Pinia 构建，适用于中大型管理类项目。项目使用 Vite 3 作为构建工具，支持现代前端开发流程，具备快速启动和热更新能力。

## 技术栈

node18.16.0

| 技术/框架     | 版本/风格        | 说明                                   |
|---------------|------------------|--------------------------------------|
| Vue           | 3.x              | 核心框架，Composition API             |
| 构建工具       | Vite 3.x          | 快速启动，热更新                      |
| 状态管理       | Pinia            | 轻量且官方推荐                        |
| 路由          | Vue Router 4     | 官方路由，支持动态与嵌套路由           |
| UI框架        | Element Plus / Naive UI | 后台或现代风格选择                     |
| CSS           | Tailwind CSS / SCSS | 高效样式管理                         |
| 国际化         | Vue I18n         | 多语言支持                           |
| 表单验证       | VeeValidate       | 强大灵活的表单验证                    |
| HTTP请求      | Axios            | 统一请求封装                         |
| 代码质量       | ESLint + Prettier | 静态检查和格式化代码                   |
| 类型支持       | TypeScript       | 更安全的代码                         |
| 测试          | Vitest           | 单元测试                             |
| 模拟后端数据   | vite-plugin-mock |  Vite 官方生态的 Mock 插件            |


## 组件规范

### 基础规则
- **使用 Composition API**：在组件中使用 Vue 3 的 Composition API 来组织逻辑，避免 Options API。
- **组件名使用 PascalCase**：所有组件名均采用 PascalCase 格式，如 `UserProfile`。
- **Props 定义使用 `defineProps`**：通过 `<script setup>` 中的 `defineProps` 来定义组件属性。
- **事件使用 `defineEmits`**：通过 `defineEmits` 来声明和触发事件，事件名应清晰且语义明确。
- **单文件组件（SFC）结构清晰**：模板、脚本、样式分明，推荐使用 `<script setup>` 语法糖。
- **组件拆分合理**：避免过大组件，确保单组件职责单一。

### 目录结构
```
src/
├── assets/           # 静态资源，如图片、字体、样式等
├── components/       # 复用组件
├── composables/      # 组合式函数，命名需以 `use` 开头
├── layouts/          # 布局组件（如默认布局、空布局等）
├── pages/            # 页面视图，自动生成路由
├── plugins/          # 插件及第三方库封装
├── router/           # 路由配置（vue-router）
├── services/         # 接口请求封装（使用 axios）
├── stores/           # 状态管理（Pinia）
├── styles/           # 全局样式（SCSS、CSS）
└── utils/            # 工具函数
```

### 组合式函数规范
- **命名以 `use` 开头**：例如 `useUserList`，便于识别和调用。
- **职责单一**：每个组合函数只实现一项功能。
- **返回响应式数据**：返回 `ref`、`reactive` 或 `computed`，方便在组件中响应式使用。
- **内部依赖收集完善**：确保依赖响应式，避免遗漏导致界面不更新。

### 性能优化
- **合理使用 `computed`**：缓存计算结果，避免重复计算。
- **`v-show` 与 `v-if` 区分使用**：频繁显示隐藏用 `v-show`，减少 DOM 重绘，条件渲染用 `v-if`。
- **懒加载组件**：使用 `defineAsyncComponent` 按需加载大型组件，提升首屏加载速度。
- **组件缓存**：利用 `<keep-alive>` 缓存不频繁销毁的页面或组件，提升体验。

---

## 状态管理

- **小型项目或局部状态使用 `provide`/`inject`**。
- **中大型项目使用 Pinia**：替代 Vuex，支持模块化且更简洁，类型支持更好。
- **模块化设计**：每个 `store` 负责单一业务领域，便于维护和扩展。
- **组件中通过 `storeToRefs` 方便解构响应式状态**。

---

## 依赖说明
- **Vue 3**：核心框架。
- **Vite 3**：构建工具，快速启动，热更新强。
- **Pinia**：官方推荐的状态管理库。
- **Vue Router 4**：路由管理。
- **Axios**：HTTP 请求库。
- **Element Plus**：UI 组件库，基于 Vue 3。
- **Sass**：CSS 预处理器，支持嵌套、变量等高级样式功能。

---

## 开发工具

- **Vite**：项目构建及开发服务器。
- **ESLint + Prettier**：代码规范与格式化。
- **TypeScript**（推荐）：类型检查，提高代码健壮性。
- **Vue Devtools**：调试工具，便于组件和状态调试。
- **Vitest** 或 **Jest**：单元测试框架。
- **vite-plugin-mock**：Vite 官方生态的 Mock 插件，基于文件系统管理 mock 文件，启动时自动加载，快速搭建开发环境 Mock，简单接口模拟。

---

## mock 模拟数据

- **统一接口格式**：使用 TypeScript 定义数据结构，增强代码可维护性。
- **处理传入参数**：模拟多种请求场景，提升接口灵活度。
- **利用 Mock.js 生成随机数据**：做到数据真实且多样化。
- **抽象公共函数**：控制数据量，模拟异常，避免性能瓶颈。
- **按模块拆分 Mock 文件**：开发环境启用，保证代码清晰安全。
---

## 额外建议

- **自动导入**：利用 Vite 插件（如 `unplugin-auto-import` 和 `unplugin-vue-components`）实现自动导入，减少重复 import。
- **接口管理**：`services/` 目录统一封装接口请求，方便维护和错误统一处理。
- **环境变量管理**：通过 `.env` 文件管理不同环境配置。
- **国际化**：可根据项目需求引入 `vue-i18n`。

---