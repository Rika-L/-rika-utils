# string

## getFileExtension

::: tip 获取字符串文件名的的拓展名
"all.md" => ".md"
:::

### 基础用法

```ts{3}
import { getFileExtension } from "@rika_/utils";
const fileName = "avatar.jpg"
const extension = getFileExtension(fileName) // ".jpg"
```

### 参数

接收一个参数`fileName`，返回值类型 `string`,如果字符串中没有`.`会返回空字符串`""`

| 参数属性     | 说明        | 类型     |
|----------|-----------|--------|
| fileName | 字符串形式的文件名 | string |

