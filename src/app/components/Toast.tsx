"use client"
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react'
import { useEffect } from 'react'

type ToastType = 'success' | 'error' | 'warning' | 'info'

type ToastProps = {
  type: ToastType
  message: string
  onClose: () => void
  duration?: number
}

const toastIcons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: AlertCircle,
}

const toastColors = {
  success: 'bg-green-600',
  error: 'bg-red-600',
  warning: 'bg-yellow-600',
  info: 'bg-blue-600',
}

export function Toast({ type, message, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const Icon = toastIcons[type]

  return (
    <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 p-4 rounded-lg shadow-lg text-white ${toastColors[type]} animate-in slide-in-from-right-2`}>
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 hover:bg-white/20 rounded-full p-1 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

type ToastContainerProps = {
  toasts: Array<{
    id: string
    type: ToastType
    message: string
  }>
  onRemove: (id: string) => void
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={() => onRemove(toast.id)}
        />
      ))}
    </div>
  )
} 