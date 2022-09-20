
import '../css/Content.css';


export default function Content({ImgPath, ChangeMoveImg, ChangeOriginalImg, Link}) {

    return (

                    <a href={Link}>
                        <div className="Content">
                            <div className="ContentImageBlock">
                                <img
                                src={ImgPath}
                                alt='No'
                                className='versionImage'
                                onMouseOver={ChangeMoveImg}
                                onMouseOut={ChangeOriginalImg}
                                >
                                </img>
                            </div>

                        </div>
                    </a>

    )
}