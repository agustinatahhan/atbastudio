import type { ReactNode } from 'react'

type Props = {
  icon: ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: Props) {
  return (
    <div className="group bg-white rounded-md p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Icon circle */}
      <div className="w-14 h-14 rounded-full bg-primary/30 flex items-center justify-center mb-8 text-primary text-2xl">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-secondary text-base leading-relaxed">{description}</p>

     
    </div>
  )
}
