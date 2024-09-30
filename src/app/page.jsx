'use client';

import Image from "next/image";
import { useState } from "react";
import teamMembers from './teamMembers.js';

export default function Team() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrevious = () => {
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1));
  };

  const selectedMember = teamMembers[selectedIndex];

  return (
    <main>
      <div classNamee="background">
       {/* <img src = '/images/vector1.png' class = "vector1"></img>
       <img src = '/images/vector2.png' class = "vector2"></img>  */}
      </div>


      <div className="team-intro">
        <h2>InQUbate Team</h2>
        <p>inQUbate is Canada's first student-run disruptive tech startup incubator run out of Queen's University in Canada.</p>
      </div>

      <button onClick={handlePrevious} className="arrow left-arrow">{'<'}</button>
      <button onClick={handleNext} className="arrow right-arrow">{'>'}</button>

      {/* <img src = '/images/vector1.png' class = "vector1"></img>
      <img src = '/images/vector2.png' class = "vector2"></img>  */}

      <div className="container">
        <div className="rectangle"></div>
        <div className="main-display">
          {selectedMember.photolg ? (
            <Image
              className="profile-image"
              src={selectedMember.photolg}
              alt={selectedMember.name}
              width={290}
              height={350}
              style={{ position: 'absolute', top: '3627px', left: '266.76px' }} 
            
            />
          ) : (
            <div>No Photo Available</div>
          )}
          <h1>{selectedMember.name}</h1>
          <h2>{selectedMember.title}</h2>
          <p>{selectedMember.bio}</p>
        </div>
      </div>

      <div className="scroll-container">
        {teamMembers.map(member => (
          <div key={member.id} className="thumbnail" onClick={() => setSelectedIndex(teamMembers.indexOf(member))}>
            <Image
              src={member.photosm}
              alt={member.name}
              width={119.69}
              height={119.69}
              style={{ cursor: 'pointer' }}
            />
            <p>{member.name}</p>
            <p>{member.title}</p>
          </div>
        ))}
      </div>

      <div className = "see-all">
        <div className="rectangle1"></div>
        <p>See All</p>
      </div>

      <style jsx>{`
        html, body {
          height: 100%;
          margin: 0;
        }

        main {
          min-height: 100vh; /* Make sure the main element is at least the height of the viewport */
          background: 
          margin: 0;
        }

        // .image-container {
        //   position: relative;
        // }

        .background{
          background: 
            linear-gradient(57.99deg, #000000 19.03%, #171717 76.13%);
            url('/images/vector1.png') no-repeat,
            url('/images/vector2.png') no-repeat,

           background-position: 
            0px, 3560px,
            505.5px, 3560px,


        }
        // .vector1{
        //   position: absolute;
        //   // width: 1118.5px;
        //   // height: 619.5px;
        //   margin-top: 0px;
        //   margin-right: 0px;
        //   margin: 0;
        // }

        // .vector2{
        //   position: absolute;
        //   // width: 797px;
        //   // height: 318px;
        //   margin-top: 3560px;
        //   margin-left: 0px;
        //   margin: 0;
        // }

        .team-intro h2 {
          font: Inter;
          font-size: 64px;
          font-weight: 700;
          line-height: 77.45px;
          text-align: left;
          width: 526.63px;
          height: 77.05px;
          margin-top: 3503px;
          margin-left: 236px;
          gap: 0px;
          position: absolute;
        }

        .team-intro p {
          height: 227px;
          margin-top: 3593px;
          margin-left: 236px;
          gap: 0px;
          position: absolute;
          font: Inter;
          font-size: 16px;
          font-weight: 300;
          line-height: 19.36px;
          text-align: left;
          width: 542px;
        }

        .container {
          position: relative;
          width: 500px;
          height: 500px;
        }

        .main-display {
          position: absolute;
          width: 500px;
          height: 500px;
        }

        .main-display p,
        .main-display h1,
        .main-display h2 {
          color: white;
          position: absolute;
        }

        .main-display h1 {
          position: absolute;
          width: 526.63px;
          height: 77.05px;
          margin-top: 3688.98px;
          margin-left: 633.95px;
          gap: 0px;
          opacity: 0px;
          font: Inter;
          font-size: 64px;
          font-weight: 700;
          line-height: 77.45px;
          text-align: left;
        }

        .main-display h2 {
          background: linear-gradient(113.53deg, #3F99BA 9.84%, #FF3144 32.98%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-top: 3763px;
          margin-left: 634px;
          width: 526.63px;
          height: 77.05px;
          font: Inter;
          font-size: 36px;
          font-weight: 700;
          line-height: 43.57px;
          text-align: left;
        }

        .main-display p {
          height: 227px;
          top: 3823px;
          left: 635px;
          gap: 0px;
          width: 514px;
          height: 227px;
          top: 3823px;
          left: 635px;
          gap: 0px;
          opacity: 0px;
        }

        .rectangle {
          width: 345px;
          height: 284px;
          position: absolute;
          border-radius: 30px;
          background-color: #BFBFBF4D;
          margin-top: 3693px;
          margin-left: 240px;
        }
          
        .arrow {
          background: #ececec3d;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 1.5rem;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px; 
          height: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center; 
          
        }

        .left-arrow {
          margin-left: 150px;
          margin-top: 3420px; 
        }

        .right-arrow {
          margin-left: 1195px;
          margin-top: 3420px;
        }

        .arrow:hover {
          background-color: #6e6e6e3d;
        }

        .see-all {
          width: 200px;
          height: 56px;
          margin-top: 3800px;
          margin-left: 603px;
          position: absolute;
          padding: 16px 70px 16px 70px;
          gap: 16px;
          border-radius: 8px;
          border: 1px;
          border: 1px solid rgba(255, 255, 255, 1);
          box-shadow: 0px 4px 15.8px 0px rgba(255, 252, 252, 0.25);
        
        }

        .see-all p {
          text-align: center;
          margin: 0;
          font: Inter;
          font-size: 18px;
          font-weight: 600;
          width: 63px;
        
        }

        .scroll-container {
        display: flex;
          justify-content: center;  /* Centers the items horizontally */
          gap: 35px;  
          flex-wrap: wrap;  /* Ensures items wrap if they overflow */
          padding: 20px;  
          margin-top: 3550.44px;
          margin-left: 368.88px;
          position: absolute;
          }

        .thumbnail {
          text-align: center;  /* Centers the text under the images */
        }
          .thumbnail p {
          margin: 5px 0;  /* Adjust the spacing between text elements */
        }

        .thumbnail p:nth-child(2) {
          font: Inter;
          font-size: 16px;  
          font-weight: bold; 
        }

        .thumbnail p:nth-child(3) {
          font: Inter;
          font-size: 14px;  
        }

      }
      `}</style>
    </main>
  );
}
