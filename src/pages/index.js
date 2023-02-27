// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Play to Learn Therapy">
      <h2>Speech and occupational therapy summer 2023</h2>
      <p>Summertime speech and occupational therapy provided by Bridget Salberg and Jenny Smegner</p>
      <ul>
        <li>combined 30+ years of experience</li>
        <li>addressing concerns of speech delays and fine and visual motor skills</li>
        <li>located in Webster Groves/Sunset Hills</li>
      </ul>
      <p>For more information<br></br>Contact Jenny at 314-705-4425</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Play to Learn Therapy - Home</title>

// Step 3: Export your component
export default IndexPage