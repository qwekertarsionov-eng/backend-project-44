import { runGameEngine } from '../index.js'

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

const generateRounds = () => {
  const roundsCount = 3

  return Array.from({ length: roundsCount }, () => {
    const getRandomNum = () => Math.floor(Math.random() * 100) + 1
    const num1 = getRandomNum()
    const num2 = getRandomNum()

    return {

      key: `${num1} ${num2}`,

      value: String(gcd(num1, num2)),
    }
  })
}

export default () => {
  const description = 'Find the greatest common divisor of given numbers.'
  const rounds = generateRounds()
  runGameEngine(description, rounds)
}
