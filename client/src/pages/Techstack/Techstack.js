import React from 'react';
import'./Techstack.css';
import { TechstackList } from '../../utils/TechstackList';
import RubberBand from 'react-reveal/RubberBand';
import Slide from 'react-reveal/Slide';

const Techstack = () => {
  return (
    <>
    <div className="container techstack" id="techstack">
        <RubberBand>
        <h2 className="col-12 mt-3 mb-1 text-center">TECHNOLOGY STACK</h2>
        <hr></hr>
    <p className="pb-3 text-center">✌️Including progming Languages, frameworks, database, front-end and backend tools, and APIs</p>
    </RubberBand>

    <div className="row">
        {TechstackList.map((tech) =>(
            <Slide left>
            <div key={tech.id} className="col-md-3">
                <div className="card m-2">
                    <div className="card-content ">
                        <div className="card-body">
                            <div className="media d-flex justify-content-center">
                                <div className="align-self-center">
                                <tech.icon className="tech-icons"/>
                                </div>
                                <div className="media-body">
                                    <h5>{tech.name}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Slide>
        ))}
    </div>
    </div>
    </>
  );
};

export default Techstack