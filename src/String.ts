/**
 * @Author Rika
 * @Description 获取文件拓展名
 * @param {string} fileName 文件名
 * @CreateData 2024/08/18
 */
function getFileExtension(fileName: string): string {
  const lastDotIndex = fileName.lastIndexOf('.')
  if (lastDotIndex === -1 || lastDotIndex === 0) {
    return ''
  }
  return fileName.substring(lastDotIndex)
}

export { getFileExtension }
