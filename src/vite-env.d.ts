/// <reference types="vite/client" />

import 'preact'
import 'preact/jsx-runtime'

declare module 'preact' {
  interface Attributes {
    path?: string
    default?: boolean
  }
}

declare module 'preact/jsx-runtime' {
  namespace JSX {
    interface IntrinsicAttributes {
      path?: string
      default?: boolean
    }
  }
}

declare module 'preact-router' {
  interface LinkProps extends preact.JSX.HTMLAttributes<HTMLAnchorElement> {
    href: string
    activeClassName?: string
  }
  export function Link(props: LinkProps): preact.VNode
}
