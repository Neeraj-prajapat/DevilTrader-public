import './App.css';
import React, {useState, useEffect} from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Services from './Component/Services';
import About from './Component/About'
import Advertisement from './Component/Advertisement';
import Testimonial from './Component/Testimonial';
import Expert from './Component/Expert';
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import LoadingBar from 'react-top-loading-bar'
import Spinner from './Component/Spinner'

// import './LoadingBar.css';  

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";





export default function App() {

  const[progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a loading delay for demonstration purposes
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000); // Replace this with your actual loading logic
//   }, []);



// const simulateProgress=()=>{
//   let progressInterval = setInterval(()=>{
//     setProgress(prevProgress=>{
//       if (prevProgress >=100){
//         clearInterval(progressInterval);
//         return 0;
//       }
//       return prevProgress +10
//     });
//   },500);
// };


// useEffect(() => {
//   // Start the progress simulation
//   const progressInterval = setInterval(() => {
//     setProgress(prevProgress => {
//       if (prevProgress >= 100) {
//         clearInterval(progressInterval);
//         setLoading(false); // Finish loading when progress reaches 100
//         return 100;
//       }
//       return prevProgress + 10;
//     });
//   }, 300); // Adjust this interval to control loading speed

//   // Clean up the interval on component unmount
//   return () => {
//     clearInterval(progressInterval);
//   };
// }, []);





useEffect(() => {
  // Start the progress simulation
  const progressInterval = setInterval(() => {
    setProgress(prevProgress => {
      const nextProgress = prevProgress + 10;
      
      // Debugging log
      console.log('Progress:', nextProgress);

      if (nextProgress >= 100) {
        clearInterval(progressInterval);
        setLoading(false); // Finish loading when progress reaches 100
        return 100;
      }
      return nextProgress;
    });
  }, 30); // Adjust this interval to control loading speed

  // Clean up the interval on component unmount
  return () => {
    clearInterval(progressInterval);
  };
}, []);

useEffect(() => {
  // Debugging log
  console.log('Loading state:', loading);
}, [loading]);


  return (
    <div>
    {/* <div className="loading-bar" style={{ width: `${progress}%` }}></div> */}
    <LoadingBar
        color='red'
        progress={progress}
        height="15"
        onLoaderFinished={() => setProgress(0)}
      />
      {loading ? <Spinner /> : (        
      <div>
          <Navbar />
          <Home/>
          <Services/>
          <About/>
          <Advertisement/>
          <Testimonial/>
          <Expert/>
          <Contact/>
          <Footer/>
      </div>
      )}
        
    
  </div>
  )
}



{/* <Navbar />
    <Home/>
    <Services/>
    <About/>
    <Advertisement/>
    <Testimonial/>
    <Expert/>
    <Contact/>
    <Footer/> */}