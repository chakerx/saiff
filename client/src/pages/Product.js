import React from 'react'
import { Button, Image } from 'react-bootstrap'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Product = () => {
  return (
    <div>
      <Navbar />
      <div  style={{ display:'flex' }}>
        <div >
          <Image src="https://www.smbgpepiniere.tn/wp-content/uploads/2019/03/BA-29-e1555505849574.jpg" style={{ height: '500px',padding:'50px',flex:'1' }}/>
        </div>
        <div style={{ flex:'1' }}>
          <div><h1>chatla</h1></div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </div>
          <div style={{ fontSize:'40px' }}>$ 20</div>

          <div>
            <div>
              
              <div >1</div>
              
              </div>
             <div>
             <Button >ADD TO CART</Button>
             </div>
          </div>

        </div>
      </div>
      <div />
      <Footer />
    </div>
  )
}

export default Product