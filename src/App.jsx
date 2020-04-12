import React from 'react'
import logo from './logo.svg'
import './App.css'
import Main from '../src/components/Main'
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
			<div className="App">
		      <Main />
		    </div>
		    </BrowserRouter>
          )
    }
}

export default App