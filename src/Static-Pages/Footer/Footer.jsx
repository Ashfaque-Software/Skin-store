import "mdb-react-ui-kit/dist/css/mdb.min.css";
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterSquare, AiOutlineInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <div>
      <Footer2 />
    </div>
  )
}

const Footer2 = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <div className="line"></div>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Help & Information</h6>
              <p>
                <a href='#!' className='text-reset'>
                Customer Service
                </a>
              </p>
              {/* Add other help & information links here */}
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>About SkinStore</h6>
              <p>
                <a href='#!' className='text-reset'>
                Key Workers Discount
                </a>
              </p>
              {/* Add other about links here */}
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Legal</h6>
              <p>
                <a href='#!' className='text-reset'>
                Cookie Information
                </a>
              </p>
              {/* Add other legal links here */}
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>follow us</h6>
              <p>
                <a href='#!' className='text-reset'>
                Message Us
                </a>
              </p>
              {/* Add other follow us links here */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <MDBContainer className='text-center  mt-5'>
        <div className='me-5 d-none d-lg-block'>
          <h2>THG</h2>
        </div>
        <div className='me-5 d-none d-lg-block'>
          <h5>2024 @ The Ashfaque.com Ltd.</h5>
        </div>

        <div style={{fontSize:"30px"}}>
          <a href='https://www.facebook.com/profile.php?id=100009229459486' className='me-4 text-reset'>
          <AiFillFacebook />
          </a>
          <a href='https://twitter.com/' className='me-4 text-reset'>
            <AiFillTwitterSquare />
          </a>
          <a href='https://www.instagram.com/ashfaqueaone/' className='me-4 text-reset'>
            <AiOutlineInstagram />
          </a>
          <a href='https://www.linkedin.com/in/mohammad-ashfaque-ansari-029a1225b/' className='me-4 text-reset'>
            <AiFillLinkedin />
          </a>
          <a href='https://github.com/Ashfaque-Software' className='me-4 text-reset'>
            <AiFillGithub />
          </a>
          {/* Remove AiFillGoogleCircle since it's not being used */}
        </div>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          SkinStore.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
