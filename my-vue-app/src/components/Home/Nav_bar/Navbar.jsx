import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { db } from "../../FireBaseAuth/firebase";
import { get, child, ref } from 'firebase/database';
import PdfImg from "../../Sub_option/PDF_PHOTO/pdfImg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [DisplayMenu,setDisplayMenu]=useState(false);
  const [pdfFile, setpdfFile] = useState("");
  const PdfData = async () => {
    try {

      const snapshot = await get(child(ref(db), 'Updates'));
      if (snapshot.exists()) {
        const data = snapshot.val();

        setpdfFile(data);
        console.log(pdfFile)
      }
      else {
        console.error('No data founded');
      }

    }

    catch (err) {
      console.error(err);
    }
  }
  const toggleMenu = () => {
    setDisplayMenu(!DisplayMenu);
  };

  useEffect(() => {
    PdfData();
  }, []);
  return (
    <>
      <div className='navbar' >

        <div className="Title_bar_title">
        <img src={PdfImg[2].URL}/>
          <p className="tracking-in-contract-bck " style={{ paddingBottom: '0.5rem', fontWeight: '800' }}>AssignMate</p></div>

        <nav >
          <Link to="/" className="link1" title="Directs to home ">Sem VI</Link>
          {/* <Link to="/About" className="link2" title=" Info About AssignMate " >About</Link> */}

          <a href={(pdfFile)} target="_blank"
            rel="noreferrer" className="button1" title="Download AssignMate APK for android " >

            <img src={PdfImg[5].URL} alt="Icon" /><span>Install app</span></a>
          {/* <div className="drop_down_menu" style={{padding:'1rem'}}>
            <buttton  style={{padding:'0.5rem'}}><GiHamburgerMenu size={25} color={'aqua'} /></buttton>
            <div 
            style={{
              minWidth:'20%',minHeight:'20rem',background:'aqua',display:'none',left:'80%',right:'5%',marginTop:'1rem'
          }}>

            </div>
          </div> */}
           <div style={{ padding: '0.5rem' }}>
                  <button style={{ padding: '0.1rem',background:'none',border:'none',borderRadius:'0.1rem'}} onClick={toggleMenu} >
                  {!DisplayMenu?<GiHamburgerMenu size={32} color={'aqua'} />:<IoMdClose size={32} color={'aqua'} />}
                  </button>
            <div className="drop_down_menu" 
              style={{
                 // Corrected from min-width to minWidth
                display: DisplayMenu ? 'block' : 'none',
               
                
                    }}
          >
            <ul  className="MenuList">
              <li><Link to="/Sem_1" onClick={toggleMenu}>Sem_1</Link></li>
              <li><Link to="/Sem_2" onClick={toggleMenu}>Sem_2</Link></li>
              <li><Link to="/Sem_3" onClick={toggleMenu}>Sem_3</Link></li>
              <li><Link to="/Sem_4" onClick={toggleMenu}>Sem_4</Link></li>
              <li><Link to="/Sem_5" onClick={toggleMenu}>Sem_5</Link></li>
            </ul>
          </div>
          </div>
        </nav>
      </div>
    </>

  );
}
export default Navbar;