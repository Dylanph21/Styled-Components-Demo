import React from 'react';
import styled from "styled-components";
// import { Button, ButtonLabel } from '../styles/button.style.jsx';
// import { AppContainer } from '../styles/appContainer.style.jsx';
// import { Title } from '../styles/header.style.jsx';
// import { Global } from '../styles/global.styles.jsx';
import { Global, AppContainer, Button, ButtonLabel, Title, OrdList, Lists } from '../styles/all.styles.jsx';



const UseIt = (props) => {

  let toDo = ['Clean my PC', 'Study for the TA', 'Find a job', 'Game'];

  return (
    // <div>
    //   <h1>
    //     Hellooo!
    //   </h1>
    //   <button>
    //     Go
    //   </button>
    //   <button>
    //     Go
    //   </button>
    // </div>
     <AppContainer>

      {/* <Global/> */}

      <Title onClick={props.onClicking} newColor={props.theColor}>
        Hellooo!
      </Title>

      <Button onClick={props.onClicking} backgroundColor={'red'}>
        <ButtonLabel>Go</ButtonLabel>
        {/* Go */}
      </Button>

      <Button backgroundColor={'orange'}>Go</Button>

      <OrdList>
        {toDo.map(imGoingTo => {
          return <Lists>{imGoingTo}</Lists>
        })}
      </OrdList>


     </AppContainer>

  )
}

export default UseIt;