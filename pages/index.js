
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import styled from 'styled-components'
import { Container } from '../styles/global.styles'

const StyledDiv = styled.div`
  color: red;
`


export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)


  return (
    <>
   
      <Layout>
     
        <Head>
            <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
        <StyledDiv>
          If this is red styles are working! This can be found and removed in index.js.
        </StyledDiv>
        </Container>
        <div>
   
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
      </Layout>

    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
