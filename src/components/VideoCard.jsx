import React, { useState } from 'react'
import { Modal,Card,Button } from 'react-bootstrap';
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI';


const VideoCard = ({displayData,setDeleteVideoResponseFromVideoCard,insideCategory}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{
    // Show modal
    setShow(true);
    const {caption,youtubeLink} = displayData
    const sysDateTime = new Date()
    console.log(sysDateTime);
    console.log(sysDateTime.toLocaleString('en-US',{timeZoneName:'short'}));
    const timeStamp = sysDateTime.toLocaleString('en-US',{timeZoneName:'short'})
    const historyDetails = {caption,youtubeLink,timeStamp}

    try{
        await saveHistoryAPI(historyDetails)

    }catch(err)
    {
      console.log(err);
      
    }

    
  } 

  const deleteVideo = async(id) =>
    {
     try{
        const result = await removeVideoAPI(id)
        setDeleteVideoResponseFromVideoCard(result)
     }catch(err)
     {
      console.log(err);
      
     }
    }
  
  const videoCardDragStarted = (e,dragVideoDetails)=>{
    console.log("Inside videoCardDragStarted with videoid",dragVideoDetails?.id);
    // share data using event drag event 
    e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
  }

  return (
    <div>
        <Card draggable={true} onDragStart={e=>videoCardDragStarted(e,displayData)} style={{ width: '15rem', height: '17rem'}}>
          <Card.Img onClick={handleShow} height={'150px'} variant="top" src={displayData.imgUrl} />
          <Card.Body>
            <Card.Text className='d-flex justify-content-between'>
              <p  className='mt-1'>{displayData.caption}</p>
              { !insideCategory &&
                              <button onClick={()=>deleteVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>

              }
            </Card.Text>
          </Card.Body>
        </Card>



      {/* Modal */}

      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="360"  src={`${displayData.youtubeLink}?autoplay=1`} title="Caption" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></Modal.Body>
      </Modal>
    </div>
  )
}

export default VideoCard