import React, { useEffect, useState } from 'react';
import Images_MUI from './Images_of_subject/Images';
import { Link } from 'react-router-dom';
import LoadAnimation from '../Loader/LoadAnimation';
import PdfImg from '../Sub_option/PDF_PHOTO/pdfImg';
import { db,auth} from '../FireBaseAuth/firebase';
import { get, child, ref} from 'firebase/database';
import {signInAnonymously,signOut,onAuthStateChanged} from "firebase/auth";

 
const Home = (props) => {
    
    const rep=async()=>{
        try{    
            await signInAnonymously(auth);
        }catch(err){
            console.error(err);
        }
    }
    window.onbeforeunload=async(e)=>{
        try{
            onAuthStateChanged(auth,(user)=>{
                e.preventDefault();
                if(user){
                 
                    const uid = user.uid;
                    //uid?console.log('logged out'):null;
                }
                else{
                    window.alert('do you want leave this page').then(async()=>{
                        await auth.signOut();
                    })
                }
            })
        }catch(err){
            console.error(err);
        }
    }

    const [Loding, setLoading] = useState(false);
    const [pdfFile, setpdfFile] = useState("");
    const PdfData = async () => {
        try {

            const snapshot = await get(child(ref(db), 'Web_Maintenance'));
            if (snapshot.exists()) {
                const data = snapshot.val();

                setpdfFile(data);
            }
            else {
                console.error('No data founded');
            }

        }

        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2800);
        PdfData();
        rep();
    }, [])

    return (
        <>
            <div>

                {Loding ? (
                    <>
                        <LoadAnimation />

                    </>
                ) : (
                    <>
                        {pdfFile ? (
                            
                            /*<>
                                <div className='maintain'>
                                    <img src={PdfImg[4].URL} />
                                    <p>Under maintenance we will be back soon!</p>
                                </div>
                            </>*/<></>
                           
                        ) : (<>

                            <div className="subject_container fade-in Background">
                                <div className="subject1 color_class top_Margin">
                                    <div className='sub_subject1 '>
                                        <div className='image_subject'>
                                            <img src={Images_MUI[0].url} alt="image_ult" />
                                        </div>
                                        <div className='Subject_info'>
                                            <Link to="/subjava"><p className="glow_animation">Programming in Java</p></Link>

                                        </div>
                                    </div>
                                </div>
                                <div className="subject1">
                                    <div className='sub_subject1'>
                                        <div className='image_subject'>
                                            <img src={Images_MUI[1].url} alt="image_ult" />
                                        </div>
                                        <div className='Subject_info'>
                                            <Link to="/DMsub" ><p> Data Mining & Science </p></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="subject1">
                                    <div className='sub_subject1'>
                                        <div className='image_subject'>
                                            <img src={Images_MUI[2].url} alt="image_ult" />
                                        </div>
                                        <div className='Subject_info'>
                                            <Link to="/OSsub" ><p>  Principles of Operating Systems   </p></Link>

                                        </div>
                                    </div>
                                </div>

                                <div className="subject1">
                                    <div className='sub_subject1'>
                                        <div className='image_subject'>
                                            <img src={Images_MUI[4].url} alt="image_ult" />
                                        </div>
                                        <div className='Subject_info'>

                                            <Link to="/subai"><p> Artificial Intelligence </p></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="subject1">

                                    <div className='sub_subject1'>
                                        <div className='image_subject'>
                                            <img src={Images_MUI[3].url} alt="image_ult" />
                                        </div>
                                        <div className='Subject_info '>
                                            <Link to="/subcloud"> <p>  Cloud Computing</p></Link>
                                        </div>
                                    </div>

                                </div>

                                <div className="subject1">

                                    <div className='sub_subject1'>
                                        <div className='image_subject'>
                                            <img src={Images_MUI[5].url} alt="image_ult" />
                                        </div>
                                        <div className='Subject_info '>
                                            <Link to={props.activity}>  <p> Activities</p></Link>
                                        </div>
                                    </div>

                                </div>

                                <div className="subject1">


                                    <div className='sub_subject1'>
                                        <div className='image_subject'>
                                            <img src={Images_MUI[6].url} alt="image_ult" />
                                        </div>
                                        <div className='Subject_info '>
                                            <Link to="/placement"><p>  Placement Preparation</p></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <footer style={{textAlign:'bottom'}}>
                                <Link to="/Terms&Conditions">Terms & Conditions</Link>
                            </footer>
                        </>)}
                    </>)}

                    
            </div >
        </>



    );
}
export default Home;
