// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <div className="main-content">
        <StaticImage
            className="sand-image"
            alt="Children playing in sand"
            layout="fixed"
            width={400}
            height={400}
            src="../images/sand.jpeg"
          />
        <div className="about">
          <p>Summertime speech and occupational therapy provided by Bridget Salberg and Jenny Smegner</p>
          <ul>
            <li>combined 30+ years of experience</li>
            <li>addressing concerns of speech delays and fine and visual motor skills</li>
            <li>located in Webster Groves/Sunset Hills</li>
          </ul>
        </div>
        </div>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Play to Learn Therapy - Home</title>

// Step 3: Export your component
export default IndexPage