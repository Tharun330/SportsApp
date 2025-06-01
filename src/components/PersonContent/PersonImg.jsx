import './PersonImg.css'
import pic from '/public/assets/portfolioSix.PNG.JPG';
import { SideBarContext } from '../Store/SidebarContext';
import { useContext } from 'react';




function PersonImg() {

 const { sideBarVisible } = useContext(SideBarContext);

  return (
    <div className='imgContent' >
      <img style={{zIndex: sideBarVisible && '1'}} className='personImg img-fluid' src={pic}></img>
    </div>
  );
}

export default PersonImg