import { RouterProvider, createBrowserRouter, useSubmit } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import LoadingScreen from "./components/loading-screen";
import { useEffect, useState } from "react";

//createBrowserRouter function을 이용해서 배열을 router에게 전달
const router = createBrowserRouter([
  {
    //root
    path:"/",
    //path의 엘리먼트는 layout.tsx
    element:<Layout />,
    //children
    children:[
      {
        path:"",
        element:<Home />,
      },
      {
        path:"profile",
        element:<Profile />,
      },
    ],
  },
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path:"/create-account",
    element:<CreateAccount/> 
  },
]);

const GlobalStyle = createGlobalStyle`
  ${reset};
  *{box-sizing:border-box;}
  body {
    background:black;
    color:white;
    font-family: Roboto;
  }
`;

function App() {
  // 사용자가 로그인했는지 여부를 firebase가 유저 정보를 가져올 동안 로딩 화면을 보여줌
  //isLoading이라는 State:상태를 만들어줌
  const [isLoding, setLoading] = useState(true);
  //참고: https://velog.io/@autumnhee/React-async-await%EC%99%80-then-%EC%B0%A8%EC%9D%B4%EC%A0%90
  //async함수: 비동기적인 함수고 promise를 반환한다 라고 선언하는 것
  //promise?: promise 객체는 비동기 메서드에서 마치 동기 메서드처럼 값을 반환할 수 있는 것
  //결론=> 비동기의 결과를 객체화 시킨다는 장점이 있음
  const init = async() => {
    //firebase가 준비될 때까지 기다려줌
    //아래 setTimeout은 그저 로딩효과를 위해 테스트용으로 선언해본것
    //테스트용 => setTimeout(() => setLoading(false), 2000)
    setLoading(false);
  };
  useEffect(() => {
    init();
  },[]);

  //isLoding ?~~~: 로딩이 끝나면 router provider를 보여줌
  return (
    <>
      <GlobalStyle />
      {isLoding ? <LoadingScreen/> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
