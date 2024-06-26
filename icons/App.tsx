import React from "react";

const App = ({state}:{state:any}) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M11 3H3V11H11V3ZM11 13H3V21H11V13ZM21 3H13V11H21V3ZM21 13H13V21H21V13Z" fill={state?'#1D4ED8':'#4F4B5C'}/>
    </svg>    
  );
};

export default App;
