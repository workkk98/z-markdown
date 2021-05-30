# z-markdown

> More than markdown, less than html.

### Introduction(介绍)

z-markdown是一个transpile工具，另外它扩展了一些markdown的特性。举个例子你有一个markdown文件，你想把它生成html文件、vue-sfc文件等等。你可以通过该工具快速的生成。例如：

```md

# z-markdown

> created by xiaofan.

|             |          Grouping           ||
|First Header  | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
|Content       |          *Long Cell*        ||
|Content       |   **Cell**    |         Cell |
                                              
|New section   |     More      |         Data |
|And more      | With an escaped '\\|'       ||

```

在最后你可以获得这样的vue文件。

```vue
<template>
  <div>
    <h1>Table</h1>
    <blockquote>
      <p>how is it like!</p>
    </blockquote>
    <table>
      <thead>
        <tr>
          <th></th>
          <th style="text-align: center" colspan="2">Grouping</th>
        </tr>
        <tr>
          <th>First Header</th>
          <th style="text-align: center">Second Header</th>
          <th style="text-align: right">Third Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Content</td>
          <td style="text-align: center" colspan="2"><em>Long Cell</em></td>
        </tr>
        <tr>
          <td>Content</td>
          <td style="text-align: center"><strong>Cell</strong></td>
          <td style="text-align: right">Cell</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>New section</td>
          <td style="text-align: center">More</td>
          <td style="text-align: right">Data</td>
        </tr>
        <tr>
          <td>And more</td>
          <td style="text-align: center" colspan="2">With an escaped '\|'</td>
        </tr>
      </tbody>
    </table>
    <p>[Prototype table] \</p>
  </div>
</template>
<script></script>
```


### 感谢

感谢markdown-it、markdown-it-multimd-table等优秀模块，能让我更快速的实现。

### TODO-LIST

- [x] 合并单元格性质特性
- [ ] 命令行工具
- [ ] loader
- [x] 使用lerna管理模块
- [ ] typescript开发
- [ ] 产出是压缩版还是非压缩版
- [ ] 更多的不同类型的文件支持(例如vue3、react等)
- [ ] 边缘处理（例如vue2的template只支持单个根元素）
- [ ] 文件编译