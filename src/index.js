import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { worker } from "./mocks/worker";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (process.env.NODE_ENV === "development") {
  worker.start({
    quiet: true,
    onUnhandledRequest: "bypass",
    // 실제 api request까지 가로채기 때문에
    // 해당 api 요청이 handler에 등록되지 않은 경우 많은 warning 로그가 콘솔에 쌓입니다.
    // 다른 개발 과정에 방해가 될 수 있어 이 로그를 출력하지 않고, unHandledRequest를 무시하는 설정입니다.
    // 로컬 테스트 시 삭제 혹은 주석 처리해 로그 확인할 수 있습니다.
    // 하지만 커밋할 땐 다른 개발자를 위해 삭제하지 말기로 해요
  });
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
