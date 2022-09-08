import React from 'react'
import Main from './main/main'
import Navigation from './navigation/Nav'


const App = () => {

    return (
        <div>
            <div className='container'>
                <Navigation />
                <Main />
            </div>
        </div>
    )
}

export default App