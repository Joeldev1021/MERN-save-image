import { useContext } from "react"
import { ImgContext } from "../context/provider/ImgProvider"

const ImgPages = () => {

    const {images} = useContext(ImgContext)
    
    return (
        <div>
            {images.length > 0 && 
              images.map(image=> {
                  return (
                <div className="card" style={{width: '18rem'}}>
                    <img src={image.imgUrl} alt={image.title} />
                    <div className="card-body">
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                  )
              })
            }
        </div>
    )
}

export default ImgPages
