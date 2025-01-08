import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

const Main = props => {
    return (
        <div className='max-w-5xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <h3>When things dont  g</h3>
    )
}

Main.propTypes = {}

export default Main