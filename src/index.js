module.exports = function check(str, bracketsConfig) {
  let arr = []

  for (let i = 0; i < str.length; i++) {
    let bracket = str[i]

    let isOpeningBracket = bracketsConfig.some((config) => {
      return config[0] === bracket
    })
    let isClosingBracket = bracketsConfig.some((config) => {
      return config[1] === bracket
      })


    if (isClosingBracket && isOpeningBracket) {
      if ( arr.length > 0 && arr[arr.length - 1] === `${bracket}$`) {
        arr.pop()
      } else {
        arr.push(`${bracket}$`);
      }

    }

    if (isOpeningBracket && !isClosingBracket) {
      arr.push(bracket)

    }

    if (isClosingBracket && !isOpeningBracket) {

      if (arr.length === 0) {

        return false
      } else {
      const lastOpeningBracket = arr.pop()

      const targetOpeningBracket = bracketsConfig.find(config => config[1] === bracket)[0]
      if (lastOpeningBracket !== targetOpeningBracket) { 
        return false
      }
      }
    }
  }

  return !arr.length
}
