import Image from 'next/image'
import { ResponsiveImageProps } from '@/types'
import { cn } from '@/lib/utils'

const ResponsiveImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props
}: ResponsiveImageProps) => {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="img-responsive"
        {...props}
      />
    </div>
  )
}

export default ResponsiveImage
