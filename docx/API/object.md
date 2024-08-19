# object

## jsonToFormData

::: tip 将对象形式的数据存入formData中
:::

### 基础用法

```ts {7}
import {jsonToFormData} from "@rika_/utils";

const student = {
    name: '张三',
    // xxxxx
}
const formData = jsonToFormData(student)
```

### 参数

接收两个参数，第一个参数`json`，第二个参数`options`,返回值类型 `FormData`。

| 参数属性    | 说明   | 类型                    |
|---------|------|-----------------------|
| json    | 一个对象 | object                |
| options | 配置对象 | jsonToFormDataOptions |

#### options详情

| 配置         | 说明                                                    | 类型        | 默认值    |
|------------|-------------------------------------------------------|-----------|--------|
| allowEmpty | 是否允许空串,`true`会将`null`转换为空串,`false`会移除所有`""`或`null`的字段 | `boolean` | `true` |
