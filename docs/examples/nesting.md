---
order: 3
group:
  title: 示例
  order: 5
title: 嵌套
description: ''
keywords: []
---

## 拖动源

您可以将拖动源相互嵌套。如果嵌套的拖动源从 canDrag 返回 false，则会询问其父源，直到找到并激活可拖动源。只有被激活的拖动源才会被调用 beginDrag() 和 endDrag()。

[示例](https://62qrw2mx9r.csb.app/)

## 拖放目标

拖放目标也可以相互嵌套。与拖动源不同的是，多个下拉目标可以对拖动的同一项目做出反应。

React DnD 在设计上没有提供停止传播的方法。相反，下拉目标可以比较 `monitor.isOver()` 和 `monitor.isOver({ shallow: false })`，以了解是否只有它们或它们的嵌套目标被悬停。它们还可以检查 `monitor.didDrop()` 和 `monitor.getDropResult()`，以了解是否有嵌套目标已处理过投放，甚至返回不同的投放结果。

[示例](https://yw5l45po0z.csb.app/)
