import Image from 'next/image'
import { Link } from '@/i18n/routing'

type Props = {
  title: string
  category: string
  description: string
  image: string
  href?: string
  viewLabel: string
}

export function ProjectCard({
  title,
  category,
  description,
  image,
  href = '/proyectos',
  viewLabel,
}: Props) {
  return (
    <article className="group">
      {/* Image */}
      <div className="relative aspect-16/10 rounded-md overflow-hidden bg-gray-100 mb-6">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-2">
        <span className="inline-block self-start px-3 py-1 rounded-md bg-primary/10 text-xs font-bold tracking-widest uppercase text-primary">
          {category}
        </span>
        <h3 className="text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        {/* <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-bold text-primary mt-1 hover:gap-2 transition-all duration-200"
        >
          {viewLabel} →
        </Link> */}
      </div>
    </article>
  )
}
