import React from "react";
import './bio.css';


export default class Mybio extends React.Component {
    render() {
        return(
            <div className="container text-center">
            <div className="row align-items-center">
              <div className="col text-md-center">
                <h3><b>My Biography</b></h3>
              </div>
              <div className="col text-md-start my-4 mx-5">
                <p>Saya adalah seorang lulusan ITENAS Bandung dengan gelar sarjana teknik lingkungan hidup. Saya pernah mengikuti organisasi himpunan Teknik Lingkungan Hidup selama 4 tahun. Saya sangat suka IT dan hobi saya adalah ngoding. Saya adalah seorang yang bertanggung jawab, tegas, dan dapat bekerja dengan baik bersama tim.</p>
              </div>
            </div>
          </div>
        )
    }
}