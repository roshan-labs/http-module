# @roshan-labs/http-module

封装内部 `$fetch` 和 `useFetch` 方法，可统一配置 `baseURL`，新建实例也可继承老配置

## 安装

```bash
yarn add @roshan-labs/http-module -D
```

## API

通过 `useHttp` 组合式函数导出以下 API 使用

### `create`

传入 `$fetch` 相同配置，创建新 `http` 实例

```ts
useHttp().create(options)
```

- options: `$fetch` 配置参数

### `request`

发起一个 `http` 请求

```ts
useHttp().request(url, options)
```

- url: 请求地址
- options: `$fetch` 配置参数

## 许可

MIT
