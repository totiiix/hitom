declare module 'contentlayer2/generated' {
  export interface Post {
    _id: string
    _raw: {
      flattenedPath: string
      sourceFilePath: string
      sourceFileName: string
    }
    type: 'Post'
    title: string
    summary?: string
    date: string
    lang: string
    tags?: string[]
    url: string
    body: {
      code: string
      raw: string
    }
  }

  export const allPosts: Post[]
}

declare module 'contentlayer2/hooks' {
  export function useMDXComponent(code: string): React.ComponentType
}

declare module 'contentlayer2/next' {
  export function withContentlayer(config: any): any
}

declare module 'contentlayer2/source-files' {
  export function defineDocumentType(config: () => any): any
  export function makeSource(config: any): any
}
