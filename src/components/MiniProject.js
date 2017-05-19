import React from 'react';
import {Link} from 'react-router';

const MiniProject = () => {
  return (
    <div className="section1Box">
      <div className="section1">

        {/* <h2 className="titleText">My Resume</h2> */}
        {/* <p className="bodyText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p> */}

        <div className="resumeBox">
          <div className="letterBox">
            <div className="letter">
              <div className="letterContent">

                <div className="firstRow">

                  <div className="four">
                    <div className="imageBox">
                      <img className="img" src={require("../images/meSquare.jpeg")} alt=""/>
                    </div>
                  </div>

                  <div className="four">
                    <div className="boxBox">
                      <div className="box">

                        <div className="titleBox">
                          <div className="titleContent">
                            INTRODUCTION
                          </div>
                        </div>

                        <div className="contentBox">
                          <div className="contentContent">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt fuga laboriosam pariatur accusamus veniam, cumque vero. Doloribus ex voluptatibus architecto repudiandae blanditiis dolores, debitis, maxime eum, placeat quibusdam laboriosam est.
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="four">
                    <div className="boxBox">
                      <div className="box">
                        <div className="titleBox">
                          <div className="titleContent">
                            INTRODUCTION
                          </div>
                        </div>

                        <div className="contentBox">
                          <div className="contentContent">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt fuga laboriosam pariatur accusamus veniam, cumque vero. Doloribus ex voluptatibus architecto repudiandae blanditiis dolores, debitis, maxime eum, placeat quibusdam laboriosam est.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="four">
                    <div className="boxBox">
                      <div className="box">
                        <div className="titleBox">
                          <div className="titleContent">
                            INTRODUCTION
                          </div>
                        </div>

                        <div className="contentBox">
                          <div className="contentContent">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt fuga laboriosam pariatur accusamus veniam, cumque vero. Doloribus ex voluptatibus architecto repudiandae blanditiis dolores, debitis, maxime eum, placeat quibusdam laboriosam est.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>


              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MiniProject;
