import { render, screen } from '@testing-library/react'
import ThemeProvider from '../../context/ThemeProvider/ThemeProvider'
import Home from './Home'

describe('Home', () => {
  test('renders successfully', () => {
    render(<Home />, {wrapper: ThemeProvider})
    expect(screen.getByText(/mode: light/i)).toBeInTheDocument()
  })
});