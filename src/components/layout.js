import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
        <h1>Play to Learn Therapy</h1>
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <main>
            <h1>{pageTitle}</h1>
            {children}
        </main>
    </div>
  )
}

export default Layout