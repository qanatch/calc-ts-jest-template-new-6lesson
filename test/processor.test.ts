import { User } from '../src/user'
import { Processor } from '../src/processor'

let user: User
let processor: Processor

beforeEach((): void => {
  user = new User('Max', 'Ott', '147852', 'test')
  processor = new Processor()
})

test('check new user undefined', () => {
  //const user = new User('Alex', 'Shmidt', '147852', 'test')
  expect(user.consentGiven).toBeUndefined()
})

test('check Processor approve', () => {
  processor.givenConsent(user)
  expect(user.consentGiven).toBe(true)
})

test('check processor verify', (): void => {
  processor.givenConsent(user)
  expect(processor.checkConsent(user)).toBeTruthy()
})

test('negative check', (): void => {
  expect(processor.checkConsent(user)).toBeFalsy()
})
