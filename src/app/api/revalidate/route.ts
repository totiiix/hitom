import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const { path, tag } = body

    if (path) {
      // Revalidate specific path (e.g., /fr/blog)
      revalidatePath(path)
      return NextResponse.json({ ok: true, revalidated: path })
    }

    if (tag) {
      // Revalidate by tag (e.g., 'blog-posts')
      revalidateTag(tag)
      return NextResponse.json({ ok: true, revalidated: `tag:${tag}` })
    }

    // Default: revalidate all blog paths
    revalidatePath('/[locale]/blog', 'page')

    return NextResponse.json({ ok: true, revalidated: 'blog' })
  } catch (e) {
    return NextResponse.json({ ok: false, message: String(e) }, { status: 500 })
  }
}
