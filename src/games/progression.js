import { runGameEngine } from '../index.js'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateRounds = () => {
  const roundsCount = 3

  return Array.from({ length: roundsCount }, () => {
    const length = getRandomInt(5, 10)
    const start = getRandomInt(1, 20)
    const step = getRandomInt(1, 10)
    const hiddenIndex = getRandomInt(0, length - 1)

    // Генерируем прогрессию через map
    const progression = Array.from({ length }, (_, index) => start + index * step)

    // Извлекаем правильный ответ
    const correctAnswer = String(progression[hiddenIndex])

    // Формируем строку вопроса, заменяя элемент по индексу
    const question = progression
      .map((num, index) => (index === hiddenIndex ? '..' : num))
      .join(' ')

    return {
      key: question,
      value: correctAnswer,
    }
  })
}

export default () => {
  const description = 'What number is missing in the progression?'
  const rounds = generateRounds()
  runGameEngine(description, rounds)
}
