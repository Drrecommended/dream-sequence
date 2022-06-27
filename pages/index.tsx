import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Carousel from 'react-multi-carousel'
import { PostCard, Categories, PostWidget } from '../components'
import dsbannerlogo from '../public/untitled-3.png'
import { getPosts } from '../services'

const Home: NextPage = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Dream Sequence</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={dsbannerlogo}
        alt="Dream Sequence logo banner"
        width="250px"
        height="50px"
        layout="responsive"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}

export default Home
