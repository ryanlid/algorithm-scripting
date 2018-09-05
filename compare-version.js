/* 返回值 0: 两个版本号相等
 * 返回值 1 ：oldVersion 小于  newVersion
 * 返回值 -1 ： oldVersion 大于 newVersion
 * 返回值大于 0 ，则表示需要进行版本更新了
 * */

function compareVersion(oldVersion, newVersion) {
  if (oldVersion === newVersion) {
    return 0
  }
  var oldVersionArr = (oldVersion + '').split('.')
  var newVersionArr = (newVersion + '').split('.')
  var versionLength = oldVersionArr.length <= newVersionArr.length ? newVersionArr.length : oldVersionArr.length

  for (var i = 0; i < versionLength; i++) {
    if (oldVersionArr[i] !== newVersionArr[i]) {
      if (oldVersionArr[i] === undefined) {
        return 1
      }
      if (parseInt(oldVersionArr[i]) < parseInt(newVersionArr[i])) {
        return 1
      } else {
        return -1
      }
    }
  }
  return -1
}

console.log('-----')
console.log(compareVersion('1.2.3', '1.2.3')) // 0
console.log(compareVersion('1.2.3', '1.2.4')) // 1
console.log(compareVersion('1.2.4', '1.2.3')) // -1
console.log('-----')
console.log(compareVersion('1.2', '1.2')) // 0
console.log(compareVersion('1.2', '1.3')) // 1
console.log(compareVersion('1.3', '1.2')) // -1
console.log('-----')
console.log(compareVersion('1.2.3', '1.2')) // -1
console.log(compareVersion('1.2', '1.2.3')) // 1
console.log(compareVersion('1.1', '1.2.3')) // 1
console.log(compareVersion('1.2.3', '1.1')) // -1
console.log(compareVersion('1.3', '1.2.3')) // -1
console.log(compareVersion('1.2.3', '1.3')) // 1
console.log('-----')
