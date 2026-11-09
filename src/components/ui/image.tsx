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
  preload?: boolean
}

export function Image({ src, alt, width, height, fill, sizes, className, style, preload }: ImageProps) {
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
      loading={preload ? "eager" : "lazy"}
      decoding={preload ? "sync" : "async"}
    />
  )
}
