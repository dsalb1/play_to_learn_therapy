import * as React from 'react'
import Layout from '../components/layout'


const AboutPage = () => {
  return (
    <Layout pageTitle="About Us">
        <h2>Speech and occupational therapy summer 2023</h2>
        <p>Summertime speech and occupational therapy provided by Bridget Salberg and Jenny Smegner</p>
        <ul>
            <li>combined 30+ years of experience</li>
            <li>addressing concerns of speech delays and fine and visual motor skills</li>
            <li>located in Webster Groves/Sunset Hills</li>
        </ul>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage