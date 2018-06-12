	/* 返回值 0: 两个版本号相等
   * 返回值 1 ：oldVersion 小于  newVersion
   * 返回值 -1 ： oldVersion 大于 newVersion
   * */

function compareVersion(oldVersion, newVersion) {
  if (oldVersion === newVersion) {
    return 0
  }
  var oldVersionArr = (oldVersion + '').split('.')
  var newVersionArr = (newVersion + '').split('.')

  for (var i = 0; i < newVersionArr.length; i++) {
    if (oldVersionArr[i] !== newVersionArr[i]) {
      if(parseInt(oldVersionArr[i]) < parseInt(newVersionArr[i])) {
        return 1
      } else {
        return -1
      }
    }
  }
  return -1
}

const a = compareVersion('1.1.2','2.2')
const b = compareVersion('1.5.2','2.4.3')
const c = compareVersion('3.1.2','2.2')
console.log(a)
console.log(b)
console.log(c)