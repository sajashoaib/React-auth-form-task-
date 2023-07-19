import React from 'react';
import './style.css'
import Container from '../Container';
import LogoLogin from './LogoLogin';
import DescriptionLogin from './DescriptionLogin';
import TitleLogin from './TitleLogin';
import FormLogin from './FormLogin';
class Login extends React.Component {

  render() {
    return (
      <div className='internal-cotainer-login'>
         <div className='childDiv-login '>
          <div className='imgs'> 
        <div className="overlay"></div>
           </div>
        <Container>
       <LogoLogin/>
   <DescriptionLogin/>
        </Container>
              </div>
        <div className='childDiv-login '>
          <Container>
             <TitleLogin/>
             <FormLogin/>
          </Container>
        
                 </div> 

      </div>
    );
  }
}

export default Login;
