// import other components to use
import MasonryLayout from '../Components/MasonryLayout/MasonryLayout';
import ContainerCard from '../Components/ContainerCard/ContainerCard';

// import json files 
import images from "../Jsons/Photo.json"

// App component
const BlackAndWhitePhotos = () => {
  return (
    <>
        <div className="flex justify-content-center" style={{ marginTop: "0px", padding: '0px' }}>
          <ContainerCard>
              <MasonryLayout images={images.categories.all} />
          </ContainerCard>
        </div>
    </>
  )
}

export default BlackAndWhitePhotos