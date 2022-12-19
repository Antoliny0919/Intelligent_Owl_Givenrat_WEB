// import { useState, useEffect } from 'react';
import ContentExplain from './components/ContentExplain';
import './css/ContentBase.css';

export default function ContentBase() {

    const state = {
        // version1 이미지 / 움짤 경로
        version1_ImgPath: require('./Img/version1_Image.png'),
        version1_MoveImgPath: require('./Img/version1_MoveImage.gif'),
        version1_link: '/search/',
    }

    // 마우스 포인터가 컨텐츠블럭에 도달했을때 이미지가 움짤로 바뀜
    const changeMoveImg = (e) => {
        e.target.src = state.version1_MoveImgPath;
    }

    // 마우스 포인터가 컨텐츠블럭에서 벗어났을때 움짤에서 이미지로 바뀜
    const changeOriginalImg = (e) => {
        e.target.src = state.version1_ImgPath;
    }

    return(
        <article>
            <div className="contentsArea">
                {/* 버젼(기능)에 대한 설명이 담긴 블럭 */}
                <ContentExplain
                    imgPath={state.version1_ImgPath}
                    moveImgPath={state.version1_MoveImgPath}
                    changeMoveImg={changeMoveImg}
                    changeOriginalImg={changeOriginalImg}
                    link={state.version1_link}>
                </ContentExplain>
            </div>
        </article>
    )
}