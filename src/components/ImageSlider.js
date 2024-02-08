import { useEffect, useState } from "react"

const data = ["https://images.unsplash.com/photo-1495012379376-194a416fcc5f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNDA3NTl8fGVufDB8fHx8fA%3D%3D", "https://papers.co/wallpaper/papers.co-sh84-red-dots-gradation-blur-29-wallpaper.jpg", "https://images.unsplash.com/photo-1475115996703-5200b5adbc09?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNDA3NTl8fGVufDB8fHx8fA%3D%3D", "https://png.pngtree.com/thumb_back/fw800/background/20240103/pngtree-elegantly-designed-abstract-vector-texture-with-colorful-random-forms-image_13891373.png", "https://thumbs.dreamstime.com/b/k-d-rendered-laptop-floor-big-data-technology-screen-icon-set-background-random-binary-code-blue-resolution-189003887.jpg"]

const ImageSlider = () => {

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const handleNextClick = () => {
    if(activeImageIndex === data.length-1){
        setActiveImageIndex(0)
    }
    else{
        setActiveImageIndex(activeImageIndex+1)
    }
    
  }
  const handlePrevClick = () => {
    if(activeImageIndex === 0){
        setActiveImageIndex(data.length-1)
        
    }
    else{
        setActiveImageIndex(activeImageIndex-1)
    }
    
  }

  useEffect(()=> {

    const id = setTimeout(()=> {
        handleNextClick()
    }, 5000)

    return () => clearTimeout(id)


  }, [activeImageIndex])
  return (
    // <div style={{display: "flex"}}>
    //     <button onClick={handlePrevClick}>Previous</button>
    //   <img src={data[activeImageIndex]} style={{width: "500px", height: "500px"}} alt="wallpaper"/>
    //   <button onClick={handleNextClick}>Next</button>
    // </div>
    <div style={{display: "flex"}}>
        <button onClick={handlePrevClick}>Previous</button>
      {data.map((url, i) => (
        <img key={url} src={url} style={{width: "500px", height: "500px", display: (activeImageIndex === i ? "block": "none")}} alt="wallpaper"/>
      ))}
      <button onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default ImageSlider
