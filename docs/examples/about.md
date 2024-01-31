---
order: 3
group:
  title: 示例
  order: 5
title: 关于
description: ''
keywords: []
---

# 关于

这里的示例可以完成很多工作：

- 它们对使用 React-DnD 的常见模式具有指导意义。
- 它们展示了应用程序接口的各个方面，以展示库的灵活性。
- 它们是一套集成测试用例。

如果您使用的模式在此未涵盖，请考虑提交 Pull Request 将其添加到此列表中。

## 标记

在这些示例中，可以使用以下标记。要启用它们，请将其添加到示例 URL 的末尾。

- `?debug`- 启用 **dnd-core** 的调试模式。这将在 [Redux Devtools Chrome 扩展](https://github.com/zalmoxisus/redux-devtools-extension)中注册 `dnd-core`。
- `?touch`- 将示例中使用的后端从 `react-dnd-html5` 后端换成 `react-dnd-touch` 后端。

## 本地运行

要在本地运行这些示例，请克隆 react-dnd 仓库，然后运行

```shell
> yarn
> yarn build:
> yarn start:docsite
```

启动需要一段时间，但网站建立后，您可以打开 http://localhost:8000/ 并单击导航栏中的 "示例 "来访问示例。
