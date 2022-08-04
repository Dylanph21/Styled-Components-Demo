import { createRoot } from 'react-dom/client';
import React from 'react';
import UseIt from './components/s-component.jsx';
import styled from "styled-components";
import { Global } from './styles/all.styles.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theColor: '',
    }
  }

  onClicking = () => {
    this.setState({
      theColor: '#' + Math.floor(Math.random()*16777215).toString(16),
    })
  }


  render() {

    return (
      // <Global>
      <UseIt
        onClicking={this.onClicking}
        theColor={this.state.theColor}
      />
      // </Global>
    )
  }
}






















const root1 = document.createElement("div");
root1.setAttribute("id", "app");
document.body.appendChild(root1);
const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />)

export default App;