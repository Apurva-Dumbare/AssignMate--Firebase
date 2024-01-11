import React, { useEffect, useState } from 'react';
import { db } from '../FireBaseAuth/firebase';
import { get, child, ref } from 'firebase/database';
import PadfUrl from './PdfURL';
const TheoryAssign = (props) => {
    const [pdfFile, setpdfFile] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [Value, setValue] = useState("");
    const [Nodata, SetNodata] = useState(false)
    let PathsData = props.paths;

    
    //const imageRef = ref(storage, "/assignMate");
    const PdfData = async (props) => {
        /* if want to access items in response but don't have a any particular datatype thw nwe can use "items* or Ex. .then((response)=>{response.items}*/
        try {
            setLoading(true);
            console.log('Fetching data from Firebase at:', PathsData);
            const snapshot = await get(child(ref(db), `${PathsData}`));
            console.log("This  fecthed value "+snapshot.val())
            if (snapshot.exists()) {
                const data =snapshot.val();
                const keys = Object.keys(data);
                let newDataArrya = [];
                for (let i = 0; i < keys.length; i++) {
                    let k = keys[i];
                    newDataArrya.push(data[k]);
                }
                /*Sorting */
                newDataArrya.sort((a, b) =>
                    new Date(b.date) - new Date(a.date)).reverse()


                setpdfFile(newDataArrya);
                console.log(newDataArrya);
                setLoading(false);
                SetNodata(false)
                
            }
            else {
                setLoading(false);
                SetNodata(true);
                console.error('No data founded');
            }

        }

        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        PdfData();
    }, []);
    return (
        <>

            <div className='Background' style={{ paddingBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content' }}>


                {Loading ? (
                    <></>

                ) : (
                    <>


                        {Nodata ?
                            (
                                <div className='Nodata' >
                                    <p>Sorry!!No Data Found😢</p>
                                </div>) :
                            (<>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'column', width: '100%', height: 'fit-content', gap: '1rem', marginBottom: '0.1rem' }} >

                                    <div className='search'>
                                        <div className="searchInputs">
                                            <input placeholder='Search by description' onChange={e => { setValue(e.target.value) }} />

                                        </div>
                                    </div>
                                    {pdfFile.filter((item) => {
                                        return Value.toLowerCase() === "" ? item : item.description.toLowerCase().includes(Value.toLowerCase());
                                        /*for filtering data here we using filter() with map() for dynamically changing in result by taking array 'item' comparing with 'Value of input_field' convert it into lowercase then compare if value present then return 'item' else return 'item' if input is "" not need to call pdfData()*/
                                    }).map((item) => {
                                        return (
                                            <>
                                                <PadfUrl
                                                    key={item.id}
                                                    URL={item.url}
                                                    Desc={item. description}
                                                    Date={item.timeStamp}
                                                    Name={item.file_Name}
                                                />

                                            </>
                                        );
                                    })
                                    }


                                </div>
                            </>)}
                    </>)}

            </div>

        </>
    );
}
export default TheoryAssign;