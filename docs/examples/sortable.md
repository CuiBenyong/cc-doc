---
order: 3
group:
  title: 示例
  order: 5
title: 排序
description: ''
keywords: []
---

## 基础排序

React DnD 为您提供了创建可排序列表的工具。要做到这一点，请将同一组件同时作为拖动源和下拉目标，并在悬停处理程序中对数据重新排序。

[示例](https://kkqpklk3q7.csb.app/)

## 拖放出界时取消

由于是编写逻辑而不是使用现成的组件，因此您可以根据应用程序的需要调整行为。

在本示例中，我们没有在拖放目标的 `drop()` 处理程序中移动卡片，而是在拖放源的 `endDrag()` 处理程序中移动卡片。这样，我们就可以检查 `monitor.didDrop()`，并在卡片掉落到容器外时恢复拖动操作。

[示例](https://l90lw9y3ll.csb.app/)

## 压力测试

React DnD 可以同时处理多少个项目？这个列表中有上千个项目。通过一些优化（如在 requestAnimationFrame 回调中更新状态），它可以处理几千个项目而不会滞后。之后，您最好使用[固定数据表](https://github.com/facebook/fixed-data-table)之类的虚拟列表。

幸运的是，React DnD 可以与任何虚拟的 React 数据列表组件完美配合，因为它不会在 DOM 中保留任何状态。

本示例不会自动滚动，但您可以在其悬停处理程序中通过比较 `component.getBoundingClientRect()` 和 `monitor.getClientOffset()` 的父级下拉目标来添加滚动。事实上，我们欢迎您为本示例贡献这一功能！

[示例](https://ovzzknl72z.csb.app/)