/**
 * @Author Rika
 * @Description 将对象转换为formData，有null的全部转为空串
 * @param {object} json 一个js对象
 * @param {jsonToFormDataOptions} options
 * @return {FormData} 一个FormData对象
 * @CreateData 2024-08-18 20:30:19
 */
function jsonToFormData(json: { [key: string]: any }, options: jsonToFormDataOptions = { allowEmpty: true }) {
  if (typeof json !== 'object') {
    throw new TypeError('The first argument must be a non-null object.')
  }
  const formData = new FormData()
  Object.keys(json).forEach((key) => {
    const value = json[key]
    if (options.allowEmpty) {
      formData.append(key, value === null ? '' : value)
    }
    else if (value !== null && value !== '') {
      formData.append(key, value)
    }
  })
  return formData
}

interface jsonToFormDataOptions {
  /**
   * 是否允许为空，ture会将全部bull转换为空字符串，false会将所有值为null或者空字符串的字段去除
   */
  allowEmpty?: boolean
}

export { jsonToFormData }
