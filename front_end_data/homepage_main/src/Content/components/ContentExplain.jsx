import ContentBlock from './ContentBlock';
import '../css/ContentExplain.css';

export default function ContentExplain({ imgPath, moveImgPath, changeMoveImg, changeOriginalImg, link }) {
    return(
        <div className="content-container">
            <div className="content-explain-area">
                <span className="content-number">TOOL 1</span>
                <span className='divide-line'>|</span>
                <span className="content-name">공산품 검색</span>
            </div>
            <span className="content-explain">공산품과 관련된 키워드를 입력하면 기벤라트가 해당 키워드에 알맞는 공산품을 찾아줍니다.</span>
            <ContentBlock
                imgPath={imgPath}
                moveImgPath={moveImgPath}
                changeMoveImg={changeMoveImg}
                changeOriginalImg={changeOriginalImg}
                link={link}
            ></ContentBlock>
        </div>
    )
}