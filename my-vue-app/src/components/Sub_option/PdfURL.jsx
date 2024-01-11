import React from 'react';
import PdfImg from './PDF_PHOTO/pdfImg'
import MetaDataFun from './METADATA';

const PadfUrl = (props) => {


    return (
        <>
            <div className='pdf_container '>
                {props.Name.endsWith('.pdf') ? (
                    <div className='pdf_img'>
                        <img src={PdfImg[0].URL} alt="Img_of_pdf" />
                    </div>
                ) :
                    (<div className='pdf_img' >
                        <img src={PdfImg[1].URL} alt="Img_of_pdf" />
                    </div>
                    )
                }
                {
                    <>
                        <MetaDataFun
                            TimeCreated={props.Date}
                            DescItem={props.Desc}
                            Name={props.Name}
                        />
                    </>
                }

                {<div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'end' }} className='pdf_button_margin'>
                    <a href={props.URL}
                        target="_blank"
                        rel="noreferrer">
                        <button className="button-22" style={{ marginLeft: '2rem' }} size="medium">Open Document</button></a>
                </div>}

            </div>


        </>
    );


}
export default PadfUrl;