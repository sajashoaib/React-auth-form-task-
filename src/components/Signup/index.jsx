import React from 'react';
import Logo from './Logo';
import './style.css'
import Description from '../../components/Signup/Description';
import Title from './Title';
import Icons from './Icons';
import OrBeforeAfter from './OrBeforeAfter';
import Form from './Form';
class Signup extends React.Component {
  render() {
    return (
      <div className='internal-cotainer'>
        <div className='childDiv '>
          <Logo />
          <Description />
        </div>
        <div className='childDiv '>
          <Title />
          <Icons />
          <OrBeforeAfter />
          <Form />
        </div>
      </div>
    );
  }
}

export default Signup;
