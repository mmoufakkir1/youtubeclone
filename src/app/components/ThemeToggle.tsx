"use client"
import { Moon, Sun } from 'lucide-react'
import { Button } from './Button'

type ThemeToggleProps = {
  theme: 'dark' | 'light'
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <Button
      onClick={onToggle}
      variant="ghost"
      size="icon"
      className="relative"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </Button>
  )
} 