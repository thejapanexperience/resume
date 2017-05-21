import React from 'react';
import {Link} from 'react-router';
import MiniProject from './MiniProject';

const HomePage = () => {
  return (
    <div>
      <div className="backgroundImage"/>
      <div className="mainContainer">

        {/* <div className="section0">
          <div className="navBox">
            <div className="nav1">
              <div className="nav1Text">
                richardmands.com
              </div>
              <div className="nav1Text">
                | Mini-Project
              </div>
            </div>
            <div className="nav2" />
            <div className="nav3">
              <div className="nav3Text">
              </div>
              <div className="nav3Text">
              </div>
            </div>
            <div className="nav4">
              <div className="nav4Text">
              </div>
              <div className="nav4Text">
              </div>
            </div>
            <div className="nav5"></div>
            <div className="nav6" />
          </div>
        </div> */}

        <MiniProject />

      </div>
    </div>
  );

};

export default HomePage;
