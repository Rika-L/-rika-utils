/**
 * @Author Rika
 * @Description 将对象转换为formData，有null的全部转为空串
 * @param {object} json 一个js对象
 * @param {jsonToFormDataOptions} options
 * @return {FormData} 一个FormData对象
 * @CreateData 2024-08-18 20:30:19
 */
function jsonToFormData(json: {
  [property: string]: any
}, options: jsonToFormDataOptions = { allowEmpty: true }): FormData {
  const formData = new FormData()
  for (const item in json) {
    if (options.allowEmpty) {
      if (json[item] === null)
        json[item] = '' // null转为空串
      formData.append(item, json[item])
    }
    else {
      if (json[item] === null || json[item] === '')
        continue
      formData.append(item, json[item])
    }
  }
  return formData
}

interface jsonToFormDataOptions {
  /**
   * 是否允许为空，ture会将全部bull转换为空字符串，false会将所有值为null或者空字符串的字段去除
   */
  allowEmpty?: boolean
}

export { jsonToFormData }
