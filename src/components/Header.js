import React from 'react';


const Header = () => {

  return (
    <>

      <div className="header" >
        <button>dark mode</button>
        <button>türkceye gec</button>
      </div>

      <div className='headBtn'>

        <div>

          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="62" viewBox="0 0 64 62" fill="none">
            <ellipse cx="31.8378" cy="31" rx="31.8378" ry="31" fill="#EEEBFF" />
            <text fontWeight="600" lineHeight="2rem" x="50%" y="50%" textAnchor="middle" transform="rotate(30.332,30,30)" fill="#7B61FF" fontSize="1.5rem" dy="0.3em" > E </text>
          </svg>

        </div>

        <div>

        <button>Skills</button>
        <button>Projects</button>
        <button>Hire Me</button>
        
        </div>


      </div>


    </>
  );
};

export default Header;