import type { CSSProperties } from "react"

type ImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  sizes?: string
  className?: string
  style?: CSSProperties
  priority?: boolean
  preload?: boolean
  loading?: "eager" | "lazy"
  unoptimized?: boolean
  quality?: number
}

export function Image({ src, alt, width, height, fill, sizes, className, style, priority, preload, loading, unoptimized: _unoptimized, quality: _quality, ...rest }: ImageProps) {
  const fillStyle: CSSProperties | undefined = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style }
    : style

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      style={fillStyle}
      loading={priority || preload ? "eager" : loading ?? "lazy"}
      decoding={priority || preload ? "sync" : "async"}
      {...rest}
    />
  )
}
