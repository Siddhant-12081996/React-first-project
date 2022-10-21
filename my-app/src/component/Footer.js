import React, { Fragment } from 'react';
const Footer=()=>{
    return(
        
            <React.Fragment>
               <footer id='footerbg' className='p-4' >
                <section className='d-flex justify-content-center'>
                    <div className='me-5 d-none d-lg-block'>
                        
                        
                    </div>
                    <div>
                    <img width='400px' src='https://media.istockphoto.com/photos/the-sun-goes-down-behind-the-autumn-forest-picture-id1162998855?s=612x612'/>

                    </div>

                </section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <h5>About Us</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        </div>
                       <div id="footer">

                    <div id='col-sm-3' >
                        <h5>Navigation</h5>
                        <p><a href=''>Home</a></p>
                        <p><a href=''>About Us</a></p>
                        <p><a href=''>Contact</a></p>
                    </div>
                    <div id='col-sm-1'>
                        <h5>Services</h5>
                        <p><a href=''>Home</a></p>
                        <p><a href=''>About Us</a></p>
                        <p><a href=''>Contact</a></p>
                    </div>
                    <div className='col-sm-2'>
                        <h5>Address</h5>
                        <p>India</p>
                        <p>Po box-no-2423</p>
                        <p>+91-9962452842</p>        
             </div>
             </div>

                </div>
               </footer>
            </React.Fragment>
    )
}

export default Footer;