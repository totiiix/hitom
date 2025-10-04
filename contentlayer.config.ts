import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: false },
    date: { type: 'date', required: true },
    lang: { type: 'string', required: false, default: 'fr' },
    tags: { type: 'list', of: { type: 'string' } }
  },
  computedFields: {
    url: { type: 'string', resolve: (doc: any) => `/blog/${doc._raw.flattenedPath}` }
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post]
})
