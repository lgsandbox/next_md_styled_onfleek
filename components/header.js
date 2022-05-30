import Link from 'next/link'
import styled from 'styled-components'

const Red = styled.div`
  color: red;
`

export default function Header() {
  return (
    <h2>
      <Link href="/">
        <a>Blog</a>

      </Link>

      <Red>
          styles active if red this is in header.js
      </Red>
    </h2>
  )
}
