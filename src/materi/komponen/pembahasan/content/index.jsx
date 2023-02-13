import React,{ } from "react";
import Banner2 from '../content/banner2.jpg';
import Button from 'react-bootstrap/Button';
import './style.css';


function Banner()
{
  
 return(
  <React.Fragment>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">   
            <div className="carousel-item active">
                <img src={ Banner2 } className="d-block w-100" alt='Muhammad Alif Gunadi'/>
                    <div className="carousel-caption">
                        <p className="display-6 para-style">Job Seeker
                        <br /><span className="display-2"><b>Muhammad Alif Gunadi</b></span><br /></p>
                        <Button className="d-grid gap-2 col-6 mx-auto linkedin shadow-lg p-3 mb-5 bg-body-tertiary rounded" variant="secondary" href="https://www.linkedin.com/in/muhammad-alif-gunadi-276154266/">Linkedin Profile</Button>{' '}
                    </div>
            </div>
        </div>
    </div>
  </React.Fragment>

 );
}
export default Banner;