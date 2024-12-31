import commonAPI from "./commonApi"
import serverUrl from "./serverUrl"


// saveVideoAPI - Http post request, in add component
export const saveVideoAPI = async (videoDetails)=>
{
   return await commonAPI(`POST`,`${serverUrl}/uploadVideos`,videoDetails)
}

// getAllVideosAPI - get method, called view component , when component displayesin browser inside its useEffect Hook 
export const getAllVideosAPI = async ()=>
   {
      return await commonAPI(`GET`,`${serverUrl}/uploadVideos`,"")
   }

// saveHistoryAPI - post method to  ${serverUrl}/history called by videoCard when we click on the video
export const saveHistoryAPI = async (historyDetails)=>
   {
      return await commonAPI(`POST`,`${serverUrl}/history`,historyDetails)
   }

// getAllHistoryAPI -  get method, ${serverUrl}/history, called by history component , when component it opens in browser   inside its useEffect Hook 

export const getAllHistoryAPI = async ()=>
   {
      return await commonAPI(`GET`,`${serverUrl}/history`,"")
   }

// deleteHistoryAPI - delete method , ${serverUrl}/history/id called by history component when clicked on the delete button

export const deleteHistoryAPI = async (id)=>
   {
      return await commonAPI(`DELETE`,`${serverUrl}/history/${id}`,{})
   }


// removeVideoAPI - delete method , ${serverUrl}/uploadVideos/id called by videoCard component when clicked on the delete button

export const removeVideoAPI = async (id)=>
   {
      return await commonAPI(`DELETE`,`${serverUrl}/uploadVideos/${id}`,{})
   }   

// saveCategoryAPI - post mehthod, ${serverUrl}/category , called by category component when user click on add button on the category modal
// categoryDetails - {categoryName : allVideos}
export const saveCategoryAPI = async (categoryDetails) => {
   return await commonAPI(`POST`, `${serverUrl}/category`, categoryDetails);
};

// getAllCategoryAPI - get method,${serverUrl}/category, called by categories , when component loaded in browser inside its useEffect Hook 
export const getAllCategoryAPI = async ()=>
   {
      return await commonAPI(`GET`,`${serverUrl}/category`,{})
   }

// deleteCategoryAPI - delete method , ${serverUrl}/category/id called by category component when clicked on the delete button

export const deleteCategoryAPI = async (id)=>
   {
      return await commonAPI(`DELETE`,`${serverUrl}/category/${id}`,{})
   }   


// deleteCategoryAPI - PUT method , ${serverUrl}/category/id called by category component when dropped over category

export const updateCategoryAPI = async (categoryDetails)=>
   {
      return await commonAPI(`PUT`,`${serverUrl}/category/${categoryDetails.id}`,categoryDetails)
   }      