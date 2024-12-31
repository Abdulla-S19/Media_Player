import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

const Home = () => {
  const[deleteResponseFromView,setDeleteResponseFromView] = useState('')

  const[addResponseFromHome,setaddResponseFromHome] = useState("")
  const[deleteResponseFromCategory,setDeleteResponseFromCategory] = useState('')

  return (
    <div style={{paddingTop:'100px'}}>

      <div className='d-flex justify-content-between container mb-5'>
        <Add setaddResponseFromHome={setaddResponseFromHome}/>
        <Link to={'/history'}>Watch History</Link>
      </div>

      <div className="row container-fluid">
        <div className="col-lg-6">
          <h3>All Videos</h3>
          <View setDeleteResponseFromView={setDeleteResponseFromView} deleteResponseFromCategory={deleteResponseFromCategory} addResponseFromHome={addResponseFromHome}/>
        </div>
        
        <div className="col-lg-6">
          <Category deleteResponseFromView={deleteResponseFromView} setDeleteResponseFromCategory={setDeleteResponseFromCategory}/>
        </div>
      </div>

    </div>
  )
}

export default Home