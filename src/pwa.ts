import { registerSW } from 'virtual:pwa-register'

export function registerSW() {
  if ('serviceWorker' in navigator) {
    registerSW({
      immediate: true,
      onRegistered(r) {
        console.log('SW Registered:', r)
      },
      onRegisterError(error) {
        console.log('SW registration error', error)
      },
    })
  }
}