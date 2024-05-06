import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="div1">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark-subtle" id="nav">
                <Link className='navbar navbar-brand text-left' to={"/back"}>
                    <h2 className='mx-5 '>Online Shopping System</h2>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active" id="links">
                            <Link className='btn btn-outline-secondary' to={"/back"}>Home</Link>
                        </li>
                        <li class="nav-item active">
                            <Link className='btn btn-outline-secondary' to={"/customer"} id="button1">Customer</Link>
                        </li>
                        <li class="nav-item active">
                            <Link className='btn btn-outline-secondary' to={"/book"} id="button1">Book</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
  )
}

export default Navbar
