import '../css/ContentBlock.css';


export default function ContentBlock({imgPath, changeMoveImg, changeOriginalImg, link}) {

    return (
        <section className="content-main-container">
            <a href={link}>
                <div className="content">
                    <div className="content-image-block">
                        <img
                        src={imgPath}
                        alt='No'
                        className='versionImage'
                        onMouseOver={changeMoveImg}
                        onMouseOut={changeOriginalImg}
                        >
                        </img>
                    </div>
                </div>
            </a>
        </section>
    )
}