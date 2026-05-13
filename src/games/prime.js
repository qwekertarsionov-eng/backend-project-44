import { runGameEngine } from '../index.js'

// Предикат проверки числа на простоту
const isPrime = (num) => {
  if (num <= 1) return false

  const step = (div) => {
    if (div * div > num) return true
    if (num % div === 0) return false
    return step(div + 1)
  }

  return step(2)
}

const generateRounds = () => {
  const roundsCount = 3
  const getRandomNum = () => Math.floor(Math.random() * 100) + 1 // Диапазон от 1 до 100

  return Array.from({ length: roundsCount }, () => {
    const number = getRandomNum()

    return {
      key: String(number),
      value: isPrime(number) ? 'yes' : 'no',
    }
  })
}

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  const rounds = generateRounds()
  runGameEngine(description, rounds)
}
