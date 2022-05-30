import Image from 'next/image'
export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        width={48}
        height={48}
  
        alt={name}
      />
      <div>{name}</div>
    </div>
  )
}
