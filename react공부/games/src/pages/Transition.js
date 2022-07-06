import React from 'react';
import './transition.scss'
const Transition = () => {
  function readMore() {
    var expandInfo = document.getElementById("more-info-js");
    var mainHeadings = document.getElementById("main-headings-js");
    
    mainHeadings.style.transform = "scale(0.7)";
    expandInfo.style.height = "350px";
  } 
  return (
  <div>
    <div className="container">
      <div className="container-inner">
        <div className="main-content">
          <div className="main-headings" id="main-headings-js">
          <p id="by-line">Teaching Master</p>

          <div className="heading">
            <h3 id="heading1">Join</h3>
            <h3 id="heading2">Teaching</h3>
            <h1 id="heading2">Master</h1>
          </div>
          
          <div className="short-bio">
            <p>티칭마스터는 최고의 어플입니다 꼭 사용하세요.당신에게도 행복이 올 수 있습니다.
              사랑하는 사람에게 전해주세요
            </p>
      
          </div>

          <a href="#" className="link" onclick="readMore()">Read More</a>
          </div>
          
          <div className="more-info " id="more-info-js">
            
            <h4>임현홍의 부하들 </h4>
            <p>조영현 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus iusto facere dignissimos quaerat facilis voluptatibus fuga quod impedit. Atque tenetur amet officia repudiandae odit. </p>
            
            <p>이혜진 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita delectus iusto facere dignissimos quaerat facilis voluptatibus fuga quod impedit. Atque tenetur amet officia repudiandae odit.</p>
            
            <p>그 외 다수 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni saepe suscipit deleniti porro fugit! Atque nisi alias a porro fugiat incidunt exercitationem! Nihil, consectetur. Expedita.</p>
          </div>
          
        </div>

        <div className="image-wrapper">
        <div className="image-container">
          <img className="image" 
          src="https://img0.yna.co.kr/etc/inner/KR/2021/03/08/AKR20210308150900005_05_i_P2.jpg" alt="image of a young woman."/>
        </div>
      </div>
    </div>
    </div>
  </div>)
};

export default Transition;
