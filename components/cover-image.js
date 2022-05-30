import Image from 'next/image'

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}

      layout="responsive"
      width={width}
      height={height}
    />
  )
  return (
    <div>
      {slug}
    </div>
  )
}
