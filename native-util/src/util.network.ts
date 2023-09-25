import { numbersAndDots } from './util.numbers'

export function isInternalNetwork(baseURL: string) {
  const baseURLNumbers = numbersAndDots(baseURL)

  return (
    baseURLNumbers.startsWith('10.') ||
    baseURLNumbers.startsWith('172.') ||
    baseURLNumbers.startsWith('192.')
  )
}
