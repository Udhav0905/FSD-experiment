import { describe, it, expect } from 'vitest'
import { validateForm } from './form'

describe('Form Testing', () => {
  it('valid input', () => {
    expect(validateForm("Udhav")).toBe(true)
  })

  it('empty input', () => {
    expect(validateForm("")).toBe(false)
  })
})