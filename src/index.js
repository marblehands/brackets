module.exports = function check(str, bracketsConfig) {
  // let bracketsPairs = {}
  // let openingBrackets = []
  // let closingBrackets = []
  
  // for (let config of bracketsConfig) {

  // }
  let arr = [] //создала проверочный массив
  for(let i = 0; i < str.length; i++) { //цикл по каждому символу в строке
    let bracket = str[i] // переменная которая содержит текущий символ
    let isOpeningBracket = bracketsConfig.some((config) => { //проверка совпадает ли текущий символ с открывающейся скобкой
      config[0] === bracket
    })
    let isClosingBracket = bracketsConfig.some((config) => { //проверка совпадает ли текущий символ с закрывающейся скобкой
      config[1] === bracket
      })

    if (isOpeningBracket) { //если это открывающаяся скобка
      arr.push(bracket) //добавляю ее в массив
      console.log(arr)
    } else if (isClosingBracket) { //если это закрывающаяся скобка
      const lastOpeningBracket = arr.pop() //удаляю из массива последний символ
      console.log(arr)
      const targetOpeningBracket = bracketsConfig.find(config => config[1] === bracket)[0] //ищу в конфиге соответствующую открывающуюся скобку
      console.log(targetOpeningBracket)

      if (lastOpeningBracket !== targetOpeningBracket) { // если скобки не совпадают возвращаю последнюю скобку обратно в массив
        return false
      }
    }
  }
  if (arr === []) {
    return true
  }
  return false
}
