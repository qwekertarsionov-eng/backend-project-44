import { runGameEngine } from '../index.js'

export const runEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".'
  const roundsCount = 3
  const rounds = []

  for (let i = 0; i < roundsCount; i += 1) {
    const number = Math.floor(Math.random() * 100)
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no'

    rounds.push({
      key: String(number),
      value: correctAnswer,
    })
  }

  runGameEngine(description, rounds)
}
