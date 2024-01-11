import React, { useEffect, useState } from 'react';
import Images_MUI from './Images_of_subject/Images';
import { Link } from 'react-router-dom';
import LoadAnimation from '../Loader/LoadAnimation';
import PdfImg from '../Sub_option/PDF_PHOTO/pdfImg';
import { db,auth} from '../FireBaseAuth/firebase';
import { get, child, ref} from 'firebase/database';
 
const Sem_1 = (props) => {
  const [ImgFile, setImgFile] = useState([]);
  const [Loding, setLoading] = useState(false);
  //const imageRef = ref(storage, "/assignMate");
  const PdfData = async (props) => {
      /* if want to access items in response but don't have a any particular datatype thw nwe can use "items* or Ex. .then((response)=>{response.items}*/
      try {
          setLoading(true);
          
          const snapshot = await get(child(ref(db), `Semester_data/Semester 1`));
          if (snapshot.exists()) {
              const data = snapshot.val();
              const keys = Object.keys(data);
              const newDataArrya = [];
              for (let i = 0; i < keys.length; i++) {
                  let k = keys[i];
                  newDataArrya.push(data[k]);
              }
              setImgFile(newDataArrya);
              console.log(newDataArrya);
              setLoading(false)

          }
          else {
              console.error('No data founded');
              setLoading(false)
          }

      }

      catch (err) {
          console.error(err);
      }
  }

  useEffect(() => {
      PdfData();
  }, []);


    return (
        <>
            <div>

                {Loding ? (
                    <>
                        <LoadAnimation />

                    </>
                ) : (
                    <>
                        {ImgFile.length==0 ? (
                            
                            <>
                                <div className='maintain'>
                                    <img src={PdfImg[4].URL} />
                                    <p>404!</p>
                                </div>
                            </>
                           
                        ) : (<>

                            <div className="subject_container fade-in Background">
                                <div className="subject1 color_class top_Margin">
                                    <div className='sub_subject1 '>
                                        <div className='image_subject'>
                                            <img src={ImgFile[0].img_url} alt="image_ult" />
                                        </div>
                                        <div className='Subject_info'>
                                            <Link to="/sem_1/Fundamentals of Computer"><p className="glow_animation">{ImgFile[0].sub_name}</p></Link>

                                        </div>
                                    </div>
                                </div>
                                <div className="subject1">
                                    <div className='sub_subject1'>
                                        <div className='image_subject'>
                                            <img src={ImgFile[1].img_url} alt="image_ult" />
                                        </div>
                                        <div className='Subject_info'>
                                            <Link to="/sem_1/C Programming" ><p> {ImgFile[1].sub_name}</p></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="subject1">
                                    <div className='sub_subject1'>
                                        <div className='image_subject'>
                                            <img src={ImgFile[2].img_url} alt="image_ult" />
                                        </div>
                                        <div className='Subject_info'>
                                            <Link to="/sem_1/Applied Mathematics" ><p>  {ImgFile[2].sub_name}  </p></Link>

                                        </div>
                                    </div>
                                </div>

                                <div className="subject1">
                                    <div className='sub_subject1'>
                                        <div className='image_subject'>
                                            <img src={ImgFile[3].img_url} alt="image_ult" />
                                        </div>
                                        <div className='Subject_info'>

                                            <Link to="/sem_1/Business Communication"><p> {ImgFile[3].sub_name}  </p></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="subject1">

                                    <div className='sub_subject1'>
                                        <div className='image_subject'>
                                            <img src={ImgFile[4].img_url} alt="image_ult" />
                                        </div>
                                        <div className='Subject_info '>
                                            <Link to="/sem_1/Activity"> <p> {ImgFile[4].sub_name}</p></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <footer style={{textAlign:'center',alignSelf:'flex-end'}}>
                                <Link to="/Terms&Conditions">Terms & Conditions</Link>
                            </footer>
                        </>)}
                    </>)}

                    
            </div >
        </>



    );
}
export default Sem_1;
