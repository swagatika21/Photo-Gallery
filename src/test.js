

//---------------------------------------------------------------------------------------------//

function Card()
{
  const[selectedImages,setSelectedImages]=useState([]);
  const imageHandleChange =(e)=>{
    //console.log(e.target.files);
    if(e.target.file){
        const fileArray=Array.from(e.target.files).map((file)=>URL.createObjectURL(file))

        setSelectedImages((prevImages)=>prevImages.concat(fileArray))
        Array.from(e.target.files).map(
            (file)=>URL.revokeObjectURL(file)
        )
    }

  }
  const renderPhotos=(source)=>{
    return source.map((photo)=>{
       
        return <img alt="Your_memory" className="userImg"src={photo} />
        
       
    })
  }
    return(
        <>
         <input type="file" onChange={imageHandleChange} multiple className="inpufile" id="my-btn" hidden/>
         <label for="my-btn" className="label">Select an Image</label>
         <div className="userImg">
          {renderPhotos(selectedImages)}
         </div>
        </>
       
    )
}
