module.exports = function check(str, bracketsConfig) {
  let arr = [] //создала проверочный массив

  for (let i = 0; i < str.length; i++) { //цикл по каждому символу в строке
    let bracket = str[i] // переменная которая содержит текущий символ
    let isOpeningBracket = bracketsConfig.some((config) => { //проверка совпадает ли текущий символ с открывающейся скобкой
      return config[0] === bracket
    })
    let isClosingBracket = bracketsConfig.some((config) => { //проверка совпадает ли текущий символ с закрывающейся скобкой
      return config[1] === bracket
      })

    if (isOpeningBracket) { //если это открывающаяся скобка
      arr.push(bracket) //добавляю ее в массив
    }

    if (isClosingBracket) { //если это закрывающаяся скобка

      if (arr.length === 0) {
        return false
      } else {
      const lastOpeningBracket = arr.pop() //удаляю из массива последний символ
      const targetOpeningBracket = bracketsConfig.find(config => config[1] === bracket)[0] //ищу в конфиге соответствующую открывающуюся скобку
      if (lastOpeningBracket !== targetOpeningBracket) { // если скобки не совпадают возвращаю false
        return false
      }
      }
    }
  }

  return !arr.length
}
