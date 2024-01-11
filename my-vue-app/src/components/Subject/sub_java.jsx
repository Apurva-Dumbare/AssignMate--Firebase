import React from 'react'
import Sub_Img from '../../assets/Sub_Image_Option/Sub_Img';
import { Link } from 'react-router-dom'
const SubJava = ({theory,notes,practicals,question}) => {
    return (
        <>

            <div className="subject_container Background" >
                <div className="subject1 "  >
                    <div className='sub_subject1 '>
                        <div className='image_subject'>
                            <img src={Sub_Img[0].url} alt="image_ult" />
                        </div>
                        <div className='Subject_info'>
                            <Link to={theory}><p>Theory Assignments</p></Link>
                        </div>
                    </div>
                </div>
                <div className="subject1 ">
                    <div className='sub_subject1 '>
                        <div className='image_subject'>
                            <img src={Sub_Img[2].url} alt="image_ult" />
                        </div>
                        <div className='Subject_info'>
                            <Link to={notes} ><p>Regular Notes</p></Link>
                        </div>
                    </div>
                </div>
                <div className="subject1 ">
                    <div className='sub_subject1 '>
                        <div className='image_subject'>
                            <img src={Sub_Img[1].url} alt="image_ult" />
                        </div>
                        <div className='Subject_info'>
                            <Link to={practicals}><p>Practicals assignmates </p></Link>

                        </div>
                    </div>
                </div>

                <div className="subject1" >
                    <div className='sub_subject1'>
                        <div className='image_subject' >
                            <img src={Sub_Img[4].url} alt="image_ult" />
                        </div>
                        <div className='Subject_info'>
                            <Link to={question}><p> Question Banks</p></Link>
                        </div>
                    </div>
                </div>
                

            </div>

        </>
    );
}
export default SubJava;