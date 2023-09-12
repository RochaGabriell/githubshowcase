import 'styled-components'
import { DefaultTheme } from 'styled-components/dist/types'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      primary: string
      secundary: string

      background: string
      text: string
    }
  }
}
