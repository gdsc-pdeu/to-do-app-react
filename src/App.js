import "./App.css";
import React, {useState} from "react";
import ParentComponent from "./components/ParentComponent";
import styled, {ThemeProvider} from "styled-components";
import {GlobalStyles, darkTheme, lightTheme} from "./components/GlobalStyle";
import ToggleButton from "./components/ToggleButton"

function App() {
    const [theme, toggleTheme] = useState('dark');
  const themeMode = theme=="light" ? lightTheme :darkTheme;

  const clickHandler = () =>{
    (theme=="light") ? toggleTheme('dark') : toggleTheme('light');
  }
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const arr = {
  //   firstName: setFirstName,
  //   lastName: setLastName,
  //   email: setEmail,
  //   password: setPassword,
  // };
  // console.log(eval(Object.keys(arr)[0]));
  return (
    <ThemeProvider theme={themeMode}>
    <GlobalStyles/>
    <ToggleButton theme={theme} method={clickHandler}/>
    <div className=" h-full flex w-4/5  flex-col m-auto items-center overflow-auto">
      {/* <form>
        {Object.keys(arr).map((item, index) => {
          return (
            <Label
              key={index}
              Text={item === "password" ? item : "text"}
              ID={item}
              value={eval(item)}
              onChange={arr[item]}
            />
          );
        })}
        <button onClick={(e) => e.preventDefault()}>Submit</button>
        <p>
          FirstName : {firstName}
          <br />
          LastName : {lastName}
          <br />
          email : {email}
          <br />
          password : {password}
          <br />
        </p>
      </form> */}

      <ParentComponent />
    </div>
    </ThemeProvider>
  );
}

export default App;
