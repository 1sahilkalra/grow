import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => [
    <Link to='/'>Home</Link>,
    <Link exact to='/about'>About</Link>,
    <Link exact to='/more'>More</Link>
]

export default Navigation