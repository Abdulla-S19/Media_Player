import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHistoryAPI,deleteHistoryAPI } from '../services/allAPI'


const History = () => {
    const [allVideoHistory,setallVideoHistory] = useState([])
  
     useEffect(()=>
    {
      getAllVideos()
    },[])

    const removeHistory = async(id)=>
      {
        try{
          await  deleteHistoryAPI(id)
          getAllVideos()
        }catch(err){
          console.log(err);  
        }
     }

    const getAllVideos = async ()=>
    {
      try{
        const result = await getAllHistoryAPI()
        if(result.status>=200 && result.status<300)
        {
          setallVideoHistory(result.data)
        }
        else{
          console.log(result);
          
        }
      }catch(err)
      {
        console.log(err);
        
      }
    }
   

  return (
    <div style={{paddingTop:'100px'}}>
      <div className='d-flex justify-content-between container'>
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to home</Link>
      </div>

      <table className='container my-5 table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>TimeStamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
            allVideoHistory?.length>0 ?
            allVideoHistory?.map((videoDetails,index)=>(
            <tr key={videoDetails?.id}>
                  <td>{index + 1}</td>
                  <td>{videoDetails?.caption}</td>
                  <td>{videoDetails?.youtubeLink}</td>
                  <td>{videoDetails?.timeStamp}</td>
                  <td><button onClick={()=>removeHistory(videoDetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
              )) : <div className='fw-bolder text-danger'>No history</div>
          }
        </tbody>
      </table>
    </div>
  )
}

export default History