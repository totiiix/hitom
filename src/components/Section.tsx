export function Section({
  title, description, children
}: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="@container container mx-auto px-6 py-16">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-2xl @lg:text-3xl font-semibold">{title}</h2>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
      </div>
      {children}
    </section>
  )
}
