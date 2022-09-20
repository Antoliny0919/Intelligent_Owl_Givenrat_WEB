import Content from './Content';
import '../css/Content.css';


export default function ContentBlock({ImgPath, ChangeMoveImg, ChangeOriginalImg, Link}) {

    return (
        <section className="changeSize contentBlock">
            <div className="rlpadding">
                <Content 
                ImgPath={ImgPath}
                ChangeMoveImg={ChangeMoveImg}
                ChangeOriginalImg={ChangeOriginalImg}
                Link={Link}
                >
                </Content>
            </div>
        </section>
    )
}