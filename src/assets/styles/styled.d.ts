import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      background: string
      yellow: string
      text: string
      title: string
    }
  }
}