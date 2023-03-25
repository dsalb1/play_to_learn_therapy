import * as React from 'react'
import { Link } from 'gatsby'
import '../style/layout.scss'
import Circle from '../components/circle'

const Layout = ({ pageTitle, children }) => {
  return (
    <div id="home" className="container">
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <main>
            <h1>{pageTitle}</h1>
            <Circle>
                <p className="heading">Play to Learn Therapy</p>
                <p className="content">Speech and Occupational Therapy Summer 2023</p>
            </Circle>
            {children}
        </main>
        <footer>
			<p>For more information<br></br>Contact Jenny at 314-705-4425</p>
            <Circle></Circle>
        </footer>
    </div>
  )
}

export default Layout