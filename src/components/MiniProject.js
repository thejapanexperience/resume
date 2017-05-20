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

                <div className="row">

                  <div className="fourImg">
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
                            QUICK POINTS
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
                            CONTACT
                          </div>
                        </div>

                        <div className="contentBox">
                          <div className="contentContent">
                            Portfolio: www.richardmands.com<br/>
                            Phone: +86 158 5068 0774<br/>
                            Email: richard@eduku.org<br/>
                            www.linkedin.com/in/richardmands<br/>
                            github.com/thejapanexperience<br/>
                            twitter.com/RichardMands<br/>
                            www.facebook.com/richard.mands<br/>
                            <br/><br/><br/><br/>



                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="row">

                  <div className="one">
                    <div className="boxBox">
                      <div className="box">
                        <div className="titleBox">
                          <div className="titleContent">
                            PROFILE
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

                <div className="row">

                  <div className="two">
                    <div className="boxBox">
                      <div className="box">
                        <div className="titleBox">
                          <div className="titleContent">
                            CINDERHOUSE / EDUKU
                          </div>
                        </div>

                        <div className="contentBox">
                          <div className="contentContent">
                            October '14 - Present | Position: Partner / Co-Founder | Nanjing, China
                          </div>

                          <div className="contentContent">
                            <a href="http://www.cinderhouse.com.au/" target="_blank">CINDERHOUSE CREATIVE</a> |
                            Photographer, videographer (2D and 360), and video-editor on projects for clients including Acamis, Outback Tea and Coffee, HubbloVR, SkyData and more.
                          </div>
                        </div>
                        <div className="contentContent">
                          Co-creator of 3 socially responsible business case-studies: <a href="http://eduku.org/" target="_blank">Eduku</a>, <a href="http://stockdisrupt.com/" target="_blank">Stock Disrupt</a> and <a href="http://domogo.co/" target="_blank">Domogo</a>
                        </div>
                        <div className="contentContent">
                          <a href="http://www.cinderhouse.com.au/" target="_blank">EDUKU</a> |
                          Co-creator, co-owner, photographer, videographer, copy-editor, head of technology, and a million other roles.
                        </div>
                        <div className="contentContent">
                          Currently, lead developer of the Eduku platform that will allow users to interact with online learning resources as well as participate in the allocation of profits towards social outcomes.
                        </div>
                        <div className="contentContent">
                          React and Redux front-end, Auth0 to manage authentication and user creation, a MongoDB / Express backend.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space"/>

                  <div className="two">
                    <div className="boxBox">
                      <div className="box">
                        <div className="titleBox">
                          <div className="titleContent">
                            CODING HOUSE
                          </div>
                        </div>

                        <div className="contentBox">
                          <div className="contentContent">
                            September '16 - November '16 | Position: Student | San Francisco, USA
                          </div>
                          <div className="contentContent">
                            Trained 14 hours a day for three months at a live-in coding bootcamp as a deep-dive into full-stack javascript development.
                          </div>
                          <div className="contentContent">
                            React, React-Native, Flux, Redux, Node, Express, Mongo, Firebase, jQuery, Socket.Io Amazon Web Services, Google APIs and more.
                          </div>
                          <div className="contentContent">
                            Part of a team that won the Cisco sponsor prize at the Lady Problems hackathon in San Francisco in October 2016.
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="row">

                  <div className="two">
                    <div className="boxBox">
                      <div className="box">
                        <div className="titleBox">
                          <div className="titleContent">
                            TEACHING
                          </div>
                        </div>


                        <div className="contentBox">
                          <div className="contentContent">
                            British School of Nanjing
                          </div>
                          <div className="contentContent">
                            April '12 - July '16 | Position: Science / IT Teacher | Nanjing, China
                          </div>
                          <div className="contentContent">
                            Taught science and ICT to students aged 10-18.
                          </div>
                          <div className="contentContent">
                            Secondary-school assessment coordinator. Developed and implemented a google-drive based real-time assessment and feedback system for students and teachers.
                          </div>
                          <div className="contentContent">
                            Won $2000 technology development prize from the <a href="https://www.britishschools.co.uk/" target="_blank">British Schools Foundation</a>.
                          </div>
                          <div className="contentContent">
                            Developed training materials and led inset for  staff with the goal of improving IT integration.
                          </div>
                          <div className="contentContent">
                            Created and led highly successful after-school programs related to charity work and fundraising. Organised overseas school trips to Borneo, Cambodia and Vietnam.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space"/>

                  <div className="two">
                    <div className="boxBox">
                      <div className="box">
                        <div className="titleBox">
                          <div className="titleContent">
                            EDUCATION
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

                <div className="row">

                  <div className="two">
                    <div className="boxBox">
                      <div className="box">
                        <div className="titleBox">
                          <div className="titleContent">
                            LANGUAGES & PLATFORMS
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

                  <div className="space"/>

                  <div className="two">
                    <div className="boxBox">
                      <div className="box">
                        <div className="titleBox">
                          <div className="titleContent">
                            PERSONAL INFORMATION
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

                <div className="row">

                  <div className="one">
                    <div className="boxBox">
                      <div className="box">
                        <div className="titleBox">
                          <div className="titleContent">
                            QUICK NOTE
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
