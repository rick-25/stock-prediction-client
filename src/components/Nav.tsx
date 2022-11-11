import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import stockIcon from '../assets/stocks-64.png'


function Nav() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#8884d8", justifyContent: 'center' }}>
          <Navbar.Brand style={{ color: 'white', textAlign: 'center' }}>
            Stock Market Predictor{' '}
            <img
              src={stockIcon}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Nav