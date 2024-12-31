import React from 'react'
import { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { saveVideoAPI } from '../services/allAPI';
import commonApi from '../services/commonApi';



const Add = ({setaddResponseFromHome}) => {
  const [videoDetails,setVideoDatails]=useState({
    caption:'' ,imgUrl:'' , youtubeLink:''
  })


  const [InvalidInputlink,setInvalidInputlink]=useState(false)


  console.log(videoDetails);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const extractEmbededLnikFromYouTubeLink =(userInputyoutubeLink)=>{
   //steps to create embed code from youtube link
   if(userInputyoutubeLink.includes("https://www.youtube.com/watch?v=")){
    console.log(userInputyoutubeLink.split("v=")[1].slice(0,11));
    const videoId = userInputyoutubeLink.split("v=")[1].slice(0,11)
    setInvalidInputlink(false)
    setVideoDatails({...videoDetails,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
   }else{
    setInvalidInputlink(true)
   }
  }

  const handleUploadVideo = async ()=>
  {
    // Object Destructuring
    const {caption,imgUrl,youtubeLink} = videoDetails

    if(caption && imgUrl && youtubeLink)
    {
      try {
        const result = await saveVideoAPI(videoDetails);
        console.log(result);
        if(result.status>=200 && result.status<300){
          alert("Video Uploaded successfully!!")
          handleClose()
          // Pass the result to view component
          setaddResponseFromHome(result)
        }
      } catch (error) {
        console.log(error);
      }
    }else{
      alert('Please Fill the Form!!!')
    }
  }


  return (
    <>
      <div className='d-flex align-items-center'>
          <h5>Upload new video</h5>
          <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>


      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Uploading Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className=' p-3 border rounded'>
         <FloatingLabel className='pb-3' controlId="floatingCaption" label=" Video Caption">
            <Form.Control onChange={e=>setVideoDatails({...videoDetails,caption:e.target.value})} type="text" placeholder="Password" />
        </FloatingLabel>

        <FloatingLabel className='pb-3' controlId="floatingUrl" label=" Video image Url">
            <Form.Control onChange={e=>setVideoDatails({...videoDetails,imgUrl:e.target.value})} type="text" placeholder="Password" />
        </FloatingLabel>

        <FloatingLabel controlId="floatinglink" label=" Video Link ">
            <Form.Control  onChange={e=>extractEmbededLnikFromYouTubeLink(e.target.value)} type="text" placeholder="Password" />
        </FloatingLabel>
        {
       InvalidInputlink && <div className='text-danger'> Invalid youtube link
        </div>
      }

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUploadVideo} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

     
    </>
  )
}

export default Add