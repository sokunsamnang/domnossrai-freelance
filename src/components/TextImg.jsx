import React from "react";
import { FiCheck } from "react-icons/fi";
const TextImg = ({ className = "", imgUrl, topTitle, descTitle=[], useCase=[], caseTitle, border=false }) => {
  return (
    <div className={`text-img ${className}`}>
      <div className="text">
        <span className="use-desc">
          <h1>{topTitle}</h1>
          {
            descTitle.map((item,index)=>(
                 <p key={index}>{item}</p>
            ))
          }
         
        </span>
            <span className="use-case" style={ border ? { borderTop: "1px #000 solid"} : {}}>
          <h2>{caseTitle}</h2>
          <ul>
           { useCase.map((item,index)=>(
                <li key={index}>
              <FiCheck /> <p>{item}</p>
            </li>
            ))}
          </ul>
           </span>
      </div>
      <div className="img">
        <img src={imgUrl} />
      </div>
    </div>
  );
};

export default TextImg;
