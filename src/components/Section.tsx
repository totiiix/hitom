export function Section({
  title, description, children
}: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="mb-8 lg:mb-12 max-w-2xl">
        <h2 className="text-fluid-3xl font-semibold dark:text-white">{title}</h2>
        {description && <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>}
      </div>
      {children}
    </section>
  )
}
