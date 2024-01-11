import React, { useEffect, useState } from 'react';
import { db } from './components/FireBaseAuth/firebase';
import { get, child, ref } from 'firebase/database';
import { useWindowSize } from '@uidotdev/usehooks';
import Confetti from 'react-confetti'

function TimeComplete() {
    const [pdfFile, setpdfFile] = useState("");
    const PdfData = async () => {
      try {
  
        const snapshot = await get(child(ref(db), 'Updates'));
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
    const { width, height } = useWindowSize()
    useEffect(() => {
      PdfData();
    }, []);
  return (
    <div className='TimeComplete'>
      <Confetti
      width={width}
      height={height}
    />
    <div className='NewAPK'>
      <p>New AssignMate App is available!!!🎉</p>
      <a href={pdfFile} target="_blank" rel="noreferrer" className="button1" title="Download AssignMate APK for android " style={{padding:'1rem'}}>
       Download Now! AssignMate v1.1.8
      </a>
    </div>

    </div>
  )
}

export default TimeComplete