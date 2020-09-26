// https://github.com/microsoft/TypeScript/issues/19816#issuecomment-640263670

export {}

declare global {
  interface Window {
    [type: string]: any
  }
}
