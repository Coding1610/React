import React from 'react';
import styles from "./App.module.css";
import styles1 from "./User.module.css";

/* Inline CSS

export default function App() {

  const h1Style={
    margin:'20px',
    fontSize:'60px',
    fontWeight:'400',
    padding:'2rem'
  };

  const textColor={
    color:'blue'
  }

  const textBGColor={
    backgroundColor:'pink'
  }

  return (
    <>
      <div>
        
        // Wrong Way
        <h1 style={{ textColor,textBGColor,h1Style}}> Hello Yash Prajapati </h1>

        // Right Way
        <h1 style={{...textColor, ...textBGColor, ...h1Style}}> Hello Yash Prajapati </h1>
        
        <h1 style={{...textColor, ...textBGColor, ...h1Style, ...{fontFamily:'sans-serif'}}}> Hello Yash Prajapati </h1>

      </div>
    </>
  )
}

*/



/* External CSS

export default function App() {
  return (
    <>
      <div>
        <h1 className="txt"> Hello yp_016 </h1>
      </div>
    </>
  )
}

*/



export default function App() {
  return (
    <>
    <div> 

      <h1 className={styles.txt}> App CSS </h1>
      <h1 className={styles1.txt}>  User CSS </h1>

    </div>
    </>
  )
}
