import { Outlet } from "react-router-dom";

export default function Layout(){
    //return을 반환하는데 fragment를 쓰고 안에 outlet넣기
    //fragment? 여러 요소를 그룹화하는 역할을 수행
    //outlet? 라우터의 중첩 경로에서 중첩된 라우트를 렌더링하기 위해 사용되는 컴포넌트
    //라우팅? 사용자가 요청한 URL에 따라 해당 URL이 맞는 페이지를 보여주는 것
    //React Router? 사용자가 입력한 주소를 감지하는 역할. 여러 환경에서 동작 할 수 있도록 여러 종류의 라우터 컴포넌트를 제공함
    return(
        <>
            <h2>layout</h2>
            <Outlet />
        </>
    );
}