import * as React from 'react'
import Layout from '../components/layout'


// Step 2: Define your component
const ContactPage = () => {
  return (
    <Layout pageTitle="Contact Us">
        <p>For more information<br></br>Contact Jenny at 314-705-4425</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default ContactPage