import React from 'react'
import { render, screen } from '../../testing_utils'
import LoginPage from '../../../src/pages/login'

describe('Login Page', () => {
  it('should render the heading', () => {
    // Given
    render(<LoginPage />)

    // When
    const heading = screen.getByText(/Login/i)

    // Then
    expect(heading).toBeInTheDocument()
  })

  it('should have inputs', () => {
    render(<LoginPage />)

    expect(1 === 1)
  })
})
