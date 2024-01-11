
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Home from './components/Home/Home';
import PdfImg from "./components/Sub_option/PDF_PHOTO/pdfImg";
import SubJava from "./components/Subject/sub_java";
import Aboutpage from "./components/Sub_option/About_page/Aboutpage";
import Navbar from "./components/Home/Nav_bar/Navbar";
import TheoryAssign from "./components/Sub_option/TheoryAssignMate";
import { useEffect,useState} from "react";
import {get,child,ref} from 'firebase/database'
import { db } from "./components/FireBaseAuth/firebase";
import Terms from "./components/Home/Terms and conditions/Terms";
import Sem_2 from "./components/Home/sem_2";
import Sem_1 from "./components/Home/sem_1";
import Sem_3 from "./components/Home/sem_3";
import Sem_4 from "./components/Home/sem_4";
import Sem_6 from "./components/Home/sem_6";
function App() {
  const [maintenance, setMaintenance] = useState("");
  const PdfData = async () => {
      try {

          const snapshot = await get(child(ref(db), 'Web_Maintenance'));
          if (snapshot.exists()) {
              const data = snapshot.val();

              setMaintenance(data);
              console.log(data);
          }
          else {
              console.error('No data founded');
          }

      }

      catch (err) {
          console.error(err);
      }
  }



  useEffect(()=>{
    PdfData();
  },[])

  return (
    <>
      <Router>
        {!maintenance?<Navbar />:''}
        {maintenance?(<>
          <div className='maintain'>
                                    <img src={PdfImg[4].URL} />
                                    <p>Under maintenance We will be back soon! </p>
                                </div>
          </>
          
          ):(
        
        <Routes>
          <Route exact path="/" element={<Sem_6/>}/>

           
          <Route path="/sem_5" element={<Home activity="/Activity" />} />
          <Route path="/About" element={<Aboutpage/>} />
          <Route path="/Activity" element={<TheoryAssign paths='Activities/ '/>} />

          <Route path="/placement" element={<TheoryAssign paths='Placement Preparation/Placement'/>}/>

          <Route path="/subjava/TheoryNotes" element={<TheoryAssign paths='Programming in Java/Notes' />} />
          <Route path="/javaAssign" element={<TheoryAssign paths='Programming in Java/Assignments'/>} />
          <Route path="/javaQuestionbank" element={<TheoryAssign paths='Programming in Java/Question Banks' />} />
          <Route path="/Practicals" element={<TheoryAssign paths='Programming in Java/Practicals'/>} />
      
          <Route path="/Subjava"
           element={<SubJava theory="/javaAssign" notes="/subjava/TheoryNotes" question="/javaQuestionbank" practicals="/Practicals" />} />
          

          <Route path="/ccquestion" element={<TheoryAssign paths='Cloud Computing/Question Banks'/>}/>
          <Route path="/ccpraticals" element={<TheoryAssign paths='Cloud Computing/Practicals'/>}/>
          <Route path="/ccloudNotes" element={<TheoryAssign paths='Cloud Computing/Notes'/>}/>
          <Route path="/ccloudTheory" element={<TheoryAssign paths='Cloud Computing/Assignments'/>}/>
          <Route path="/subcloud" element={<SubJava theory="/ccloudTheory" notes="/ccloudNotes" question="/ccquestion" practicals="/ccpraticals" />} />
         

          <Route path="/aitheory" element={<TheoryAssign paths='Artificial Intelligence/Assignments'/>}/>
          <Route path="/ainotes" element={<TheoryAssign paths='Artificial Intelligence/Notes'/>}/>
          <Route path="/aiquestion" element={<TheoryAssign paths='Artificial Intelligence/Question Banks'/>}/>
          <Route path="/aipracticals" element={<TheoryAssign paths='Artificial Intelligence/Practicals'/>}/>
          <Route path="/subai" element={<SubJava theory="/aitheory" notes="/ainotes" question="/aiquestion" practicals="/aipracticals" />} />

        

          <Route path="/osnotes" element={<TheoryAssign paths='Principles of Operating Systems/Notes'/>}/>
          <Route path="/ostheory" element={<TheoryAssign paths='Principles of Operating Systems/Assignments'/>}/>
          <Route path="/ospracticals" element={<TheoryAssign paths='Principles of Operating Systems/Practicals'/>}/>
          <Route path="/osquestionbank" element={<TheoryAssign paths='Principles of Operating Systems/Question Banks'/>}/>
          <Route path="/OSsub" element={<SubJava notes="/osnotes" theory="/ostheory" practicals="/ospracticals" 
            question="/osquestionbank"
          />}/>




          <Route path="/DMsubtheory" element={<TheoryAssign paths='Data Mining & Data Science/Assignments'/>}/>
          <Route path="/DMsubnote" element={<TheoryAssign paths='Data Mining & Data Science/Notes'/>}/>
          <Route path="/DMsubquestion" element={<TheoryAssign paths='Data Mining & Data Science/Question Banks'/>}/>
          <Route path="/DMsubpracticals" element={<TheoryAssign paths='Data Mining & Data Science/Practicals'/>}/>
          <Route path="/DMsub" element={<SubJava notes="/DMsubnote" theory="/DMsubtheory" practicals="/DMsubpracticals"
            question="/DMsubquestion"
          />}/>

            {/* Create the new Home page per sem then create different routes and pass the path to it and finally pass it ot subJava which contain all theory and notes,practicals and then add this subjava to sem subjects*/}
    
            
          
            





          <Route path="/Sem_1" element={<Sem_1/>}/>
          {/* sem_1 Fundamentals of Computer */}
          <Route path="/sem_1/Fundamentals of Computers/Notes" 
          element={<TheoryAssign paths="Semester 1/Fundamentals of Computers/Notes"/>}
          />
          <Route path="/sem_1/Fundamentals of Computers/Theory" element={<TheoryAssign paths="Semester 1/Fundamentals of Computers/Theory"/>}/>
          <Route path="/sem_1/Fundamentals of Computers/Practicals" element={<TheoryAssign paths="Semester 1/Fundamentals of Computers/Practicals"/>}/>
          <Route path="/sem_1/Fundamentals of Computers/Question Bank" element={<TheoryAssign paths="Semester 1/Fundamentals of Computers/Question Banks"/>}/>
          <Route path="/sem_1/Fundamentals of Computer" element={<SubJava theory="/sem_1/Fundamentals of Computers/Theory" notes="/sem_1/Fundamentals of Computers/Notes" question="/sem_1/Fundamentals of Computers/Question Bank" practicals="/sem_1/Fundamentals of Computers/Practicals" />} />

            {/* sem_1 C Programming */}
          <Route path="/sem_1/C Programming/Notes" 
          element={<TheoryAssign paths="Semester 1/C Programming/Notes"/>}
          />
          <Route path="/sem_1/Fundamentals of Computer/Theory" element={<TheoryAssign paths="Semester 1/C Programming/Theory"/>}/>
          <Route path="/sem_1/Fundamentals of Computer/Practicals" element={<TheoryAssign paths="Semester 1/C Programming/Practicals"/>}/>
          <Route path="/sem_1/C Programming/Question Bank" element={<TheoryAssign paths="Semester 1/C Programming/Question Banks"/>}/>
          <Route path="/sem_1/C Programming" element={<SubJava theory="/sem_1/C Programming/Theory" notes="/sem_1/C Programming/Notes" question="/sem_1/C Programming/Question Bank" practicals="/sem_1/C Programming/Practicals" />} />

          {/* Sem_1 Applied Mathematics */}
          <Route path="/sem_1/Applied Mathematics/Notes" 
          element={<TheoryAssign paths="Semester 1/Applied Mathematics/Notes"/>}
          />
          <Route path="/sem_1/Applied Mathematics/Theory" element={<TheoryAssign paths="Semester 1/Applied Mathematics/Theory"/>}/>
          <Route path="/sem_1/Applied Mathematics/Practicals" element={<TheoryAssign paths="Semester 1/Applied Mathematics/Practicals"/>}/>
          <Route path="/sem_1/Applied Mathematics/Question Bank" element={<TheoryAssign paths="Semester 1/Applied Mathematics/Question Banks"/>}/>
          <Route path="/sem_1/Applied Mathematics" element={<SubJava theory="/sem_1/Applied Mathematics/Theory" notes="/sem_1/Applied Mathematics/Notes" question="/sem_1/Applied Mathematics/Question Bank" practicals="/sem_1/Applied Mathematics/Practicals" />} />
            
          {/* Business Communication */}
            <Route path="/sem_1/Business Communication/Notes" 
                  element={<TheoryAssign paths="Semester 1/Business Communication/Notes"/>}
            />
            <Route path="/sem_1/Business Communication/Theory" element={<TheoryAssign paths="Semester 1/Business Communication/Theory"/>}/>
            <Route path="/sem_1/Business Communication/Practicals" element={
            <TheoryAssign paths="Semester 1/Business Communication/Practicals"/>}/>
            <Route path="/sem_1/Business Communication/Question Bank" element={
            <TheoryAssign paths="Semester 1/Business Communication/Question Banks"/>}/>
            <Route path="/sem_1/Business Communication" element={<SubJava theory="/sem_1/Business Communication/Theory" notes="/sem_1/Business Communication/Notes" question="/sem_1/Business Communication/Question Bank" practicals="/sem_1/Business Communication/Practicals" />} /> 
             {/*sem_1 Activity  */}

          <Route path="/sem_1/Activity" 
          element={<TheoryAssign paths="Semester 1/Activity"/>}
          />


          {/* <Route path="/sem_2/notes" element={<TheoryAssign paths='Semester 2/Advanced C Programming/Notes'/>}/>
          <Route path="/C_sub" element={<Sem_subject notes="/sem_2/notes" 
          />}/> */}

          <Route path="/Sem_2" element={<Sem_2/>}/>
          <Route
        path="/Sem_2/Advanced C Programming/Theory"
        element={
          <TheoryAssign paths="Semester 2/Advanced C Programming/Theory" />
        }
      />
      <Route
        path="/Sem_2/Advanced C Programming/Notes"
        element={
          <TheoryAssign paths="Semester 2/Advanced C Programming/Notes" />
        }
      />
      <Route
        path="/Sem_2/Advanced C Programming/Practicals"
        element={
          <TheoryAssign paths="Semester 2/Advanced C Programming/Practicals" />
        }
      />
      <Route
        path="/Sem_2/Advanced C Programming/Question Banks"
        element={
          <TheoryAssign paths="Semester 2/Advanced C Programming/Question Banks" />
        }
      />
      <Route
        path="/AdvCProgramming"
        element={
          <SubJava
            notes="/Sem_2/Advanced C Programming/Notes"
            theory="/Sem_2/Advanced C Programming/Theory"
            practicals="/Sem_2/Advanced C Programming/Practicals"
            question="/Sem_2/Advanced C Programming/Question Banks"
          />
        }
      />
        {/* sem_2 computer organization */}
          <Route path="/sem_2/computer organization/Notes" 
          element={<TheoryAssign paths="Semester 2/Computer Organization/Notes"/>}
          />
          <Route path="/sem_2/computer organization/Theory" element={<TheoryAssign paths="Semester 2/Computer Organization/Theory"/>}/>
          <Route path="/sem_2/computer organization/Practicals" element={<TheoryAssign paths="Semester 2/Computer Organization/Practicals"/>}/>
          <Route path="/sem_2/computer organization/Question Bank" element={<TheoryAssign paths="Semester 2/Computer Organization/Question Banks"/>}/>
          <Route path="/sem_2/Computer organization" element={<SubJava theory="/sem_2/computer organization/Theory" notes="/sem_2/computer organization/Notes" question="/sem_2/computer organization/Question Bank" practicals="/sem_2/computer organization/Practicals" />} />

        {/* sem_2 operating system concepts */}
        <Route path="/sem_2/operating system concepts/Notes" 
          element={<TheoryAssign paths="Semester 2/Operating System Concepts/Notes"/>}
          />
          <Route path="/sem_2/operating system concepts/Question Bank" element={<TheoryAssign paths="Semester 2/Operating System Concepts/Question Banks"/>}/>
           <Route path="/sem_2/operating system concepts/Theory" element={<TheoryAssign paths="Semester 2/Operating System Concepts/Theory"/>}/>
             <Route path="/sem_2/operating system concepts/Practicals" element={<TheoryAssign paths="Semester 2/Operating System Concepts/Practicals"/>}/>

             <Route path="/sem_2/operating system concepts" element={<SubJava theory="/sem_2/operating system concepts/Theory" notes="/sem_2/operating system concepts/Notes" question="/sem_2/operating system concepts/Question Bank" practicals="/sem_2/operating system concepts/Practicals"/>}/>

          {/* sem_2 Database Management I*/}
          <Route path="/sem_2/Database Management Systems - I/Notes" 
          element={<TheoryAssign paths="Semester 2/Database Management Systems - I/Notes"/>}
          />
          <Route path="/sem_2/Database Management Systems - I/Theory" 
          element={<TheoryAssign paths="Semester 2/Database Management Systems - I/Theory"/>}
          />
            <Route path="/sem_2/Database Management Systems - I/Practicals" 
          element={<TheoryAssign paths="Semester 2/Database Management Systems - I/Practicals"/>}
          />
          <Route path="/sem_2/Database Management Systems - I/Question Bank" 
          element={<TheoryAssign paths="Semester 2/Database Management Systems - I/Question Banks"/>}
          />
          <Route path="/sem_2/Database Management Systems - I" element={<SubJava theory="/sem_2/Database Management Systems - I/Theory" notes="/sem_2/Database Management Systems - I/Notes" question="/sem_2/Database Management Systems - I/Question Bank" practicals="/sem_2/Database Management Systems - I/Practicals"/>}/>

          {/*sem_2 Activity  */}

          <Route path="/sem_2/Activity" 
          element={<TheoryAssign paths="Semester 2/Activity"/>}
          />


        {/* Sem_3 */}
          <Route path="/Sem_3" element={<Sem_3/>}/>
          
        {/* Sem_3 Data structure */}
        <Route path="/Sem_3/Data Structures/Notes" 
        element={<TheoryAssign paths="Semester 3/Data Structures/Notes"/>}/>
        <Route path="/Sem_3/Data Structures/Theory" 
        element={<TheoryAssign paths="Semester 3/Data Structures/Theory"/>}/>
        <Route path="/Sem_3/Data Structures/Question Banks" 
        element={<TheoryAssign paths="Semester 3/Data Structures/Question Banks"/>}/>
        <Route path="/Sem_3/Data Structures/Practicals" 
        element={<TheoryAssign paths="Semester 3/Data Structures/Practicals"/>}/>
        
        <Route path="/Sem_3/Data Structures" element={<SubJava theory="/Sem_3/Data Structures/Theory" notes="/Sem_3/Data Structures/Notes" question="/Sem_3/Data Structures/Question Banks" practicals="/Sem_3/Data Structures/Practicals"/>}/>

        {/* Sem_3 Database Management -II */}
        <Route path="/Sem_3/Database Management -II/Notes" 
        element={<TheoryAssign paths="Semester 3/Database Management -II/Notes"/>}/>
        <Route path="/Sem_3/Database Management -II/Question Banks" 
        element={<TheoryAssign paths="Semester 3/Database Management -II/Question Banks"/>}/>
        <Route path="/Sem_3/Database Management -II/Practicals" 
        element={<TheoryAssign paths="Semester 3/Database Management -II/Practicals"/>}/>
        <Route path="/Sem_3/Database Management -II/Theory" 
        element={<TheoryAssign paths="Semester 3/Database Management -II/Theory"/>}/>
         <Route path="/Sem_3/Database Management -II" element={<SubJava theory="/Sem_3/Database Management -II/Theory" notes="/Sem_3/Database Management -II/Notes" question="/Sem_3/Database Management -II/Question Banks" practicals="/Sem_3/Database Management -II/Practicals"/>}/>
        
        {/* Sem_3 computer networks */}

        <Route path="/Sem_3/Computer Networks/Notes" 
        element={<TheoryAssign paths="Semester 3/Computer Networks/Notes"/>}/>
        <Route path="/Sem_3/Computer Networks/Question Banks" 
        element={<TheoryAssign paths="Semester 3/Computer Networks/Question Banks"/>}/>
        <Route path="/Sem_3/Computer Networks/Practicals" 
        element={<TheoryAssign paths="Semester 3/Computer Networks/Practicals"/>}/>
        <Route path="/Sem_3/Computer Networks/Theory" 
        element={<TheoryAssign paths="Semester 3/Computer Networks/Theory"/>}/>
         <Route path="/Sem_3/Computer Networks" element={<SubJava theory="/Sem_3/Computer Networks/Theory" notes="/Sem_3/Computer Networks/Notes" question="/Sem_3/Computer Networks/Question Banks" 
         practicals="/Sem_3/Computer Networks/Practicals"/>}/>

          {/* Sem_3 language communication -I(English) */}
          <Route path="/Sem_3/Language Communication -I(English)/Notes" 
        element={<TheoryAssign paths="Semester 3/Language Communication -I(English)/Notes"/>}/>
        <Route path="/Sem_3/Language Communication -I(English)/Question Banks" 
        element={<TheoryAssign paths="Semester 3/Language Communication -I(English)/Question Banks"/>}/>
        <Route path="/Sem_3/Language Communication -I(English)/Practicals" 
        element={<TheoryAssign paths="Semester 3/Language Communication -I(English)/Practicals"/>}/>
        <Route path="/Sem_3/Language Communication -I(English)/Theory" 
        element={<TheoryAssign paths="Semester 3/Language Communication -I(English)/Theory"/>}/>
         <Route path="/Sem_3/Language Communication -I(English)" element={<SubJava theory="/Sem_3/Language Communication -I(English)/Theory" notes="/Sem_3/Language Communication -I(English)/Notes" question="/Sem_3/Language Communication -I(English)/Question Banks" 
         practicals="/Sem_3/Language Communication -I(English)/Practicals"/>}/>

         {/* Environmental Awareness -I */}

         <Route path="/Sem_3/Environmental Awareness -I/Notes" 
        element={<TheoryAssign paths="Semester 3/Environmental Awareness -I/Notes"/>}/>
        <Route path="/Sem_3/Environmental Awareness -I/Question Banks" 
        element={<TheoryAssign paths="Semester 3/Environmental Awareness -I/Question Banks"/>}/>
        <Route path="/Sem_3/Environmental Awareness -I/Practicals" 
        element={<TheoryAssign paths="Semester 3/Environmental Awareness -I/Practicals"/>}/>
        <Route path="/Sem_3/Environmental Awareness -I/Theory" 
        element={<TheoryAssign paths="Semester 3/Environmental Awareness -I/Theory"/>}/>
         <Route path="/Sem_3/Environmental Awareness -I" element={<SubJava theory="/Sem_3/Language Communication -I(English)/Theory" notes="/Sem_3/Environmental Awareness -I/Notes" question="/Sem_3/Environmental Awareness -I/Question Banks" 
         practicals="/Sem_3/Environmental Awareness -I/Practicals"/>}/>

        {/* Sem_3 Activity */}
        <Route path="/sem_3/Activity" 
          element={<TheoryAssign paths="Semester 3/Activity"/>}
          />
        






          {/* Sem_4 */}
          <Route path="/Sem_4" element={<Sem_4/>}/>

          {/* Sem_4 OOPs and C++ */}
          <Route path="/Sem_4/OOPs and C++/Notes" 
        element={<TheoryAssign paths="Semester 4/OOPs and C++/Notes"/>}/>
        <Route path="/Sem_4/OOPs and C++/Question Banks" 
        element={<TheoryAssign paths="Semester 4/OOPs and C++/Question Banks"/>}/>
        <Route path="/Sem_4/OOPs and C++/Practicals" 
        element={<TheoryAssign paths="Semester 4/OOPs and C++/Practicals"/>}/>
        <Route path="/Sem_4/OOPs and C++/Theory" 
        element={<TheoryAssign paths="Semester 4/OOPs and C++/Theory"/>}/>
         <Route path="/Sem_4/OOPs and C++" element={<SubJava theory="/Sem_4/OOPs and C++/Theory" notes="/Sem_4/OOPs and C++/Notes" question="/Sem_4/OOPs and C++/Question Banks" 
         practicals="/Sem_4/OOPs and C++/Practicals"/>}/>

          {/* Sem_4 Web Technology*/}
          <Route path="/Sem_4/Web Technology/Notes" 
        element={<TheoryAssign paths="Semester 4/Web Technology/Notes"/>}/>
        <Route path="/Sem_4/Web Technology/Question Banks" 
        element={<TheoryAssign paths="Semester 4/Web Technology/Question Banks"/>}/>
        <Route path="/Sem_4/Web Technology/Practicals" 
        element={<TheoryAssign paths="Semester 4/Web Technology/Practicals"/>}/>
        <Route path="/Sem_4/Web Technology/Theory" 
        element={<TheoryAssign paths="Semester 4/Web Technology/Theory"/>}/>
         <Route path="/Sem_4/Web Technology" element={<SubJava theory="/Sem_4/Web Technology/Theory" notes="/Sem_4/Web Technology/Notes" question="/Sem_4/Web Technology/Question Banks" 
         practicals="/Sem_4/Web Technology/Practicals"/>}/>

          {/*Sem_4 Software Engineering  */}
          <Route path="/Sem_4/Software Engineering/Notes" 
          element={<TheoryAssign paths="Semester 4/Software Engineering/Notes"/>}/>
          <Route path="/Sem_4/Software Engineering/Question Banks" 
          element={<TheoryAssign paths="Semester 4/Software Engineering/Question Banks"/>}/>
          <Route path="/Sem_4/Software Engineering/Practicals" 
          element={<TheoryAssign paths="Semester 4/Software Engineering/Practicals"/>}/>
          <Route path="/Sem_4/Software Engineering/Theory" 
          element={<TheoryAssign paths="Semester 4/Software Engineering/Theory"/>}/>
          <Route path="/Sem_4/Software Engineering" 
          element={<SubJava theory="/Sem_4/Software Engineering/Theory" notes="/Sem_4/Software Engineering/Notes" question="/Sem_4/Software Engineering/Question Banks" 
          practicals="/Sem_4/Software Engineering/Practicals"/>}/>

          {/* Sem_4 Python Programming */}
          <Route path="/Sem_4/Python Programming/Notes" 
          element={<TheoryAssign paths="Semester 4/Python Programming/Notes"/>}/>
          <Route path="/Sem_4/Python Programming/Question Banks" 
          element={<TheoryAssign paths="Semester 4/Python Programming/Question Banks"/>}/>
          <Route path="/Sem_4/Python Programming/Practicals" 
              element={<TheoryAssign paths="Semester 4/Python Programming/Practicals"/>}/>
          <Route path="/Sem_4/Python Programming/Theory" 
            element={<TheoryAssign paths="Semester 4/Python Programming/Theory"/>}/>
          <Route path="/Sem_4/Python Programming" 
            element={<SubJava theory="/Sem_4/Python Programming/Theory" notes="/Sem_4/Python Programming/Notes" question="/Sem_4/Python Programming/Question Banks" 
            practicals="/Sem_4/Python Programming/Practicals"/>}/>

            {/* sem_4 Language and Communication - II (English) */}
            <Route path="/Sem_4/Language and Communication - II (English)/Notes" 
              element={<TheoryAssign paths="Semester 4/Language and Communication - II (English)/Notes"/>}/>
            <Route path="/Sem_4/Language and Communication - II (English)/Question Banks" 
              element={<TheoryAssign paths="Semester 4/Language and Communication - II (English)/Question Banks"/>}/>
            <Route path="/Sem_4/Language and Communication - II (English)/Practicals" 
              element={<TheoryAssign paths="Semester 4/Language and Communication - II (English)/Practicals"/>}/>
            <Route path="/Sem_4/Language and Communication - II (English)/Theory" 
              element={<TheoryAssign paths="Semester 4/Language and Communication - II (English)/Theory"/>}/>
            <Route path="/Sem_4/Language and Communication - II (English)" 
              element={<SubJava theory="/Sem_4/Language and Communication - II (English)/Theory" notes="/Sem_4/Language and Communication - II (English)/Notes" question="/Sem_4/Language and Communication - II (English)/Question Banks" 
              practicals="/Sem_4/Language and Communication - II (English)/Practicals"/>}/>

              {/* sem_4 Environmental Awareness - II */}
              <Route path="/Sem_4/Environmental Awareness - II/Notes" 
              element={<TheoryAssign paths="Semester 4/Environmental Awareness - II/Notes"/>}/>
            <Route path="/Sem_4/Environmental Awareness - II/Question Banks" 
              element={<TheoryAssign paths="Semester 4/Environmental Awareness - II/Question Banks"/>}/>
            <Route path="/Sem_4/Environmental Awareness - II/Practicals" 
              element={<TheoryAssign paths="Semester 4/Environmental Awareness - II/Practicals"/>}/>
            <Route path="/Sem_4/Environmental Awareness - II/Theory" 
              element={<TheoryAssign paths="Semester 4/Environmental Awareness - II/Theory"/>}/>
            <Route path="/Sem_4/Environmental Awareness - II" 
              element={<SubJava theory="/Sem_4/Environmental Awareness - II/Theory" 
                notes="/Sem_4/Environmental Awareness - II/Notes" 
                question="/Sem_4/Environmental Awareness - II/Question Banks" 
                practicals="/Sem_4/Environmental Awareness - II/Practicals"/>}/>

            {/* Sem_4 Activity */}
          <Route path="/sem_4/Activity" 
          element={<TheoryAssign paths="Semester 4/Activity"/>}
          />

          {/* Sem_6 Android Programming*/}
          <Route path="/sem_6/Android Programming/Notes" 
            element={<TheoryAssign paths="Semester 6/Android Programming /Notes"/>}/>
          <Route path="/Sem_6/Android Programming/Question Banks" 
            element={<TheoryAssign paths="Semester 6/Android Programming /Question Banks"/>}/>
          <Route path="/Sem_6/Android Programming/Practicals" 
            element={<TheoryAssign paths="Semester 6/Android Programming /Practicals"/>}/>
          <Route path="/Sem_6/Android Programming/Theory" 
            element={<TheoryAssign paths="Semester 6/Android Programming /Theory"/>}/>
          <Route path="/Sem_6/Android Programming" 
            element={<SubJava theory="/Sem_6/Android Programming/Theory" 
              notes="/sem_6/Android Programming/Notes" 
              question="/Sem_6/Android Programming/Question Banks" 
              practicals="/Sem_6/Android Programming/Practicals"/>}/>

          {/* sem_6 Programming in Go */}
          <Route path="/Sem_6/Programming in Go/Notes" 
            element={<TheoryAssign paths="Semester 6/Programming in Go/Notes"/>}/>
          <Route path="/Sem_6/Programming in Go/Question Banks" 
            element={<TheoryAssign paths="Semester 6/Programming in Go/Question Banks"/>}/>
          <Route path="/Sem_6/Programming in Go/Practicals" 
            element={<TheoryAssign paths="Semester 6/Programming in Go/Practicals"/>}/>
          <Route path="/Sem_6/Programming in Go/Theory" 
            element={<TheoryAssign paths="Semester 6/Programming in Go/Theory"/>}/>
          <Route path="/Sem_6/Programming in Go" 
            element={<SubJava theory="/Sem_6/Programming in Go/Theory" 
          notes="/Sem_6/Programming in Go/Notes" 
          question="/Sem_6/Programming in Go/Question Banks" 
          practicals="/Sem_6/Programming in Go/Practicals"/>}/>

          {/* sem_6 Software Project Management  */}
          <Route path="/Sem_6/Software Project Management/Notes" 
                element={<TheoryAssign paths="/Semester 6/Software Project Management /Notes"/>}/>
                <Route path="/Sem_6/Software Project Management/Question Banks" 
                  element={<TheoryAssign paths="Semester 6/Software Project Management /Question Banks"/>}/>
                <Route path="/Sem_6/Software Project Management/Practicals" 
                  element={<TheoryAssign paths="Semester 6/Software Project Management /Practicals"/>}/>
                <Route path="/Sem_6/Software Project Management/Theory" 
                  element={<TheoryAssign paths="Semester 6/Software Project Management /Theory"/>}/>
                <Route path="/Sem_6/Software Project Management" 
                element={<SubJava theory="/Sem_6/Software Project Management/Theory" 
                notes="/Sem_6/Software Project Management/Notes" 
                question="/Sem_6/Software Project Management/Question Banks" 
                practicals="/Sem_6/Software Project Management/Practicals"/>}/>

                 {/* sem_6 Management Information System */}
                 <Route path="/Sem_6/Management Information System/Notes" 
                  element={<TheoryAssign paths="Semester 6/Management Information System /Notes"/>}/>
                <Route path="/Sem_6/Management Information System/Question Banks" 
                  element={<TheoryAssign paths="Semester 6/Management Information System /Question Banks"/>}/>
                <Route path="/Sem_6/Management Information System/Practicals" 
                  element={<TheoryAssign paths="Semester 6/Management Information System /Practicals"/>}/>
                <Route path="/Sem_6/Management Information System/Theory" 
                  element={<TheoryAssign paths="Semester 6/Management Information System /Theory"/>}/>
                <Route path="/Sem_6/Management Information System" 
                  element={<SubJava theory="/Sem_6/Management Information System/Theory" 
                notes="/Sem_6/Management Information System/Notes" 
                question="/Sem_6/Management Information System/Question Banks" 
                practicals="/Sem_6/Management Information System/Practicals"/>}/>

              {/* Sem_6 Internet Of Things (IOT) */}
              <Route path="/Sem_6/Internet Of Things (IOT)/Notes" 
                  element={<TheoryAssign paths="Semester 6/Internet Of Things (IOT)/Notes"/>}/>
                <Route path="/Sem_6/Internet Of Things (IOT)/Question Banks" 
                  element={<TheoryAssign paths="Semester 6/Internet Of Things (IOT)/Question Banks"/>}/>
                <Route path="/Sem_6/Internet Of Things (IOT)/Practicals" 
                  element={<TheoryAssign paths="Semester 6/Internet Of Things (IOT)/Practicals"/>}/>
                <Route path="/Sem_6/Internet Of Things (IOT)/Theory" 
                  element={<TheoryAssign paths="Semester 6/Internet Of Things (IOT)/Theory"/>}/>
                <Route path="/Sem_6/Internet Of Things (IOT)" 
                  element={<SubJava theory="/Sem_6/Internet Of Things (IOT)/Theory" 
                notes="/Sem_6/Internet Of Things (IOT)/Notes" 
                question="/Sem_6/Internet Of Things (IOT)/Question Banks" 
                practicals="/Sem_6/Internet Of Things (IOT)/Practicals"/>}/>

                {/* Sem_6 Placement Preparation */}
                <Route path="/sem_6/Placement Preparation" 
                element={<TheoryAssign paths="Semester 6/Placement Preparation"/>}
                />



              {/* Sem_6 Activity  */}
              <Route path="/sem_6/Activity" 
              element={<TheoryAssign paths="Semester 6/Activity"/>}
              />

        
            

         
              
                    
          <Route path="/Terms&Conditions" element={<Terms/>}/>
        </Routes>
          )}
      </Router>

    </>
  )
}

export default App
