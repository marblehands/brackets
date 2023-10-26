module.exports = function check(str, bracketsConfig) {
  let arr = [] //создала проверочный массив

  for (let i = 0; i < str.length; i++) { //цикл по каждому символу в строке
    let bracket = str[i] // переменная которая содержит текущий символ
    // console.log(bracket)
    let isOpeningBracket = bracketsConfig.some((config) => { //проверка совпадает ли текущий символ с открывающейся скобкой
      return config[0] === bracket
    })
    let isClosingBracket = bracketsConfig.some((config) => { //проверка совпадает ли текущий символ с закрывающейся скобкой
      return config[1] === bracket
      })
    // console.log(isOpeningBracket)
    // console.log(isClosingBracket)

    if (isClosingBracket && isOpeningBracket) {
      if ( arr.length > 0 && arr[arr.length - 1] === `${bracket}$`) {
        arr.pop()
      } else {
        arr.push(`${bracket}$`);
      }
      // console.log('test')
      // console.log(arr)
    }

    if (isOpeningBracket && !isClosingBracket) { //если это открывающаяся скобка
      arr.push(bracket) //добавляю ее в массив
      // console.log(arr)
    }

    if (isClosingBracket && !isOpeningBracket) { //если это закрывающаяся скобка

      if (arr.length === 0) {
        // console.log('test')
        return false
      } else {
      const lastOpeningBracket = arr.pop() //удаляю из массива последний символ
      // console.log(arr)
      const targetOpeningBracket = bracketsConfig.find(config => config[1] === bracket)[0] //ищу в конфиге соответствующую открывающуюся скобку
      if (lastOpeningBracket !== targetOpeningBracket) { // если скобки не совпадают возвращаю false
        return false
      }
      }
    }
  }

  return !arr.length
}
