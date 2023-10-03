import React from "react";

const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemeContext"; //개발자도구를 통해 컨텍스트의 이름을 확인하기위해 ThemeContext의 displayName값 설정.

export default ThemeContext;