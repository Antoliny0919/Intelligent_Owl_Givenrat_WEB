import React from 'react';
import NavbarLogo from './components/NavbarLogo';
import NavbarContent from './components/NavbarContent'
import NavbarLogin from './components/NavbarLogin';
// import NavbarStart from './NavbarStart';
import './css/NavbarBase.css';



export default function NavbarBase() {

    const state = {
        // (Public폴더 하위 경로 설정) Navbar 왼쪽부분 로고 imgPath
        logo: {imgPath: require('./Img/givenrat_logo.png'),
        link: '../'},

        // Navbar 왼쪽부분 로고 오른쪽 메인 컨텐츠 영역
        content: [
            {id:1, title: '공산품 검색', link: '/search/'},
            {id:2, title: '장바구니', link: '#!'},
            {id:3, title: '주문서 확인', link: '#!'},
            {id:4, title: '발주서 작성', link: '#!'},
        ],

        // Navbar 오른쪽부분 로그인/회원가입 버튼
        login: {title: '로그인/회원가입', link: '/login/'},
        start: {title: '시작하기!', link: '#!'},

        // Navbar mini 로고(화면사이즈가 줄었을때 content들을 담은 링크/이미지)
        
        combineContent: {imgPath: require('./Img/minibar.png')},
    }


    return (
        <header>
            <div className='navBar __block'>
                <div className='navBar __wrapper'>
                    <div className='navBar __contents'>
                        <NavbarLogo
                        imgPath={state.logo.imgPath}
                        link={state.logo.link}
                        combineContentImgPath={state.combineContent.imgPath}
                        >
                        </NavbarLogo>
                        <NavbarContent content={state.content}></NavbarContent>
                    </div>
                    <div className='NavBar __logins'>
                        {/* <NavbarStart start={this.state.start}></NavbarStart> */}
                        <NavbarLogin login={state.login}></NavbarLogin>
                    </div>

                </div>
            </div>
        </header>
    )
}


