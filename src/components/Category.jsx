import React, { useEffect } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { useState } from 'react'
import { saveCategoryAPI,getAllCategoryAPI, deleteCategoryAPI, updateCategoryAPI, removeVideoAPI } from '../services/allAPI';
import VideoCard from './VideoCard';



const Category = ({setDeleteResponseFromCategory,deleteResponseFromView}) => {
  const [show, setShow] = useState(false);
  const [allCategories,setallCategories] = useState([])
  const [categoryName, setCategoryName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>
  {
    getAllCategories()
  },[deleteResponseFromView])

  const handleSaveCategory = async () => {
    if (categoryName) {
      const categoryDetails = { categoryName, allVideos: [] };
      try {
        const result = await saveCategoryAPI(categoryDetails); // Ensure this is properly imported
        alert('Category added');
        getAllCategories()
        handleClose();
      } catch (err) {
        console.error(err);
      }
    } else {
      alert('Please add category name');
    }
  };

  const getAllCategories = async () =>
  {
    try{
      const result = await getAllCategoryAPI()
      if(result.status >=200 && result.status<300)
      {
        setallCategories(result.data)
      }else{
        console.log('API Call failed');
        
      }
    }catch(err)
    {
      console.log(err);
      
    }
  }

  console.log(allCategories);

  const removeCategory = async (id) =>
  {
   try{
      await deleteCategoryAPI(id)
      getAllCategories()
   }catch(err)
   {
    console.log(err);
    
   }
  }
 
  const dragOverCategory =(e)=>{
    e.preventDefault()
  }

 const videoCardDropOverCategory = async (e,categoryDetails)=>
 {
  console.log('Inside videoCardDropOverCategory');
  // console.log(categoryDetails);
  const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
  console.log(videoDetails);
  
  // Update category by addvideo to its allvideos
  categoryDetails.allVideos.push(videoDetails)
  console.log(categoryDetails);
  
  // API call to update category
  await updateCategoryAPI(categoryDetails)
  getAllCategories()
  const result = await removeVideoAPI(videoDetails?.id)
  setDeleteResponseFromCategory(result)

 }

 const categoryVideoDragStarted = (e,dragVideoDetails,categoryDetails) =>
 {
  console.log("Inside categoryVideoDragStarted");
  let dragData = {video:dragVideoDetails,categoryDetails}
  e.dataTransfer.setData("dragData",JSON.stringify(dragData))
  
 }


  return (
   <>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>All Categories </h3>
        <button onClick={handleShow} className='btn btn-info ms-3 rounded-circle fw-bolder fs-5'>+</button>
        
      </div>


      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Add Category Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className=' p-3 border rounded'>
         <FloatingLabel className='pb-3' controlId="floatingCategoryName" label=" Category Name ">
            <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Password" />
        </FloatingLabel>

       
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

      {/* displaying all categories */}
      <div className="container-fluid mb-3 mt-3" >
        {/* Single Category View */}
        {
          allCategories?.length > 0 ? 
              allCategories?.map(categoryDetails=>(
              <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>videoCardDropOverCategory(e,categoryDetails)} key={categoryDetails?.id} className="border rounded p-3 mb-3">
                <div className="d-flex justify-content-between">
                  <h5>{categoryDetails?.categoryName}</h5>
                   <button onClick={()=>removeCategory(categoryDetails?.id)} className='btn' ><i class="fa-solid fa-trash text-danger"></i></button> 
                </div> {/* displaying category video */}
                <div className="row mt-2">
                  
                  {
                    categoryDetails?.allVideos?.length>0 &&
                       categoryDetails?.allVideos?.map(video=>(
                        <div key={video?.id} className="col-lg-4" draggable={true} onDragStart={e=>categoryVideoDragStarted(e,video,categoryDetails)}>
                            <VideoCard insideCategory={true} displayData={video}/>
                        </div>
                       ))
                  }

                   
                </div>
             </div>
             ))
           : <div className='fw-bolder text-danger fs-5'>No categories are added yet !!!</div>
          
        }
      </div>
   </>
  )
}

export default Category

