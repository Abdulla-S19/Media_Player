// rafce

import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music.gif'
import feature1 from '../assets/feature1.webp'
import feature2 from '../assets/feature2.webp'
import feature3 from '../assets/feature3.webp'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      {/* Landing part */}
      <div className='row align-items-center'>
        <div className='col-lg-5'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p className='justify'>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>

        <div className='col'> </div>
        {/* Landing Image */}
        <div className='col-lg-5'>
           <img src={landingImg} className='img-fluid ms-3 w-75' alt="" />
        </div>
      </div>

      {/* Feature Part */}
      <div>
        <h3 className='text-center mt-5'>Features</h3>
        <div className="row mt-5">
            <div className="col-lg-4">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img height={'250px'} variant="top" src={feature1} />
                        <Card.Body>
                          <Card.Title>Managing Videos</Card.Title>
                          <Card.Text>
                            Users can upload,view and remove the vidoes
                          </Card.Text>
                        </Card.Body>
                  </Card>
            </div>

            <div className="col-lg-4">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img height={'250px'} variant="top" src={feature2} />
                        <Card.Body>
                          <Card.Title>Categorize Videos</Card.Title>
                          <Card.Text>
                            Users can ategorize vidoes by drag and drop features
                          </Card.Text>
                        </Card.Body>
                  </Card>
            </div>

            <div className="col-lg-4">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img height={'250px'} variant="top" src={feature3} />
                        <Card.Body>
                          <Card.Title>Managing Videos</Card.Title>
                          <Card.Text>
                          Users can manage the watch history of all videos.
                          </Card.Text>
                        </Card.Body>
                  </Card>
            </div>


        </div>
      </div>

     {/* Last */}

     <div className='my-5 row align-itmes-center border rounded'>
      <div className="col-lg-5 ms-4">
        <h3 className='text-warning '>Simple, Fast and <br /> Powerful</h3>
        <p style={{textAlign:'justify'}}> <span className='fs-5 fw-bolder'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime animi quas.</p>

        <p style={{textAlign:'justify'}}> <span className='fs-5 fw-bolder'>Categorise Videos: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime animi.</p>

        <p style={{textAlign:'justify'}}> <span className='fs-5 fw-bolder'>Managing History: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime animi.</p>

        
      </div>
      <div className="col"></div>
      <div className="col-lg-6 mt-4">
      <iframe width="100%" height="360" src="https://www.youtube.com/embed/M-yqIcuVNe8" title="Angu Vaana Konilu (Malayalam)|ARM|Tovino Thomas|Jithin Laal|Dhibu Ninan Thomas |Vaikom Vijayalakshmi" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
     </div>

    </div>
  )
}

export default Landing