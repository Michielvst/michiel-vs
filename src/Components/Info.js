import React from 'react';

class Info extends React.Component {
  render() {
    return(
      <div className="info" >
        <div className="flex">
          <div className="profile flexItem">
            <h1>Profile</h1>
            <p>I am a 25 year old frontend developer from Buggenhout, Belgium with a focus on building web applications with React. My hobbies are playing games, making music and I'm involved with the regional youth movement</p>
          </div>
          <div className="skills flexItem">
            <h1>Skills</h1>
            <p>I am proficient in writing Javascript applications in React. I also have experience with Java and Structured Text for programming PLC's.</p>
          </div>
          <div className="contact flexItem">
            <h1>Contact</h1>
            <ul>
              <li>Schoolstraat 3</li>
              <li>9255 Buggenhout</li>
              <li>+32 476 01 07</li>
              <li>michiel--vs@outlook.com</li>
            </ul>
            <a href="https://www.linkedin.com/in/michiel-van-steen-0ba633185/">
              <img src="https://www.siggis.be/wp-content/uploads/2018/01/Linkedin-logo-1-550x550-300x300.png" alt="linkedin"></img>
            </a>
            <a href="https://github.com/Michielvst">
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="linkedin"></img>
            </a>        
          </div>
        </div>
        <div className="examples">
          <h1>Applications</h1>
          <a href="https://michielvs-catch-of-the-day.netlify.com"><img src="./catch-of-the-day.png" alt="Catch of the Day afbeelding" className="appImage"></img></a>
          <a href="https://michielvs-currency-converter.netlify.com"><img src="./currency-convertor.png" alt="Currency Convertor afbeelding" className="appImage"></img></a>
        </div>
        
      </div>
    )
  }
}

export default Info;