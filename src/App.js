import React from 'react';

// styles
import './styles/App.css';

// components
import Avatar from './atoms/avatar';
import Badge from './atoms/badge';
import Card from './atoms/card';
import Counter from './atoms/counter';
import Header from './atoms/header';
import Footer from './atoms/footer';

import reactDesign from './images/reactDesign.jpg'

function App() {
  return (
    <>
      <div className='App'>

        <Header title="React Beginner's Quiz"/>
        <div className='cards' >
          <Card title="Best therapy" content="sometimes is a drive and music." /> 
          <Card>
            <Counter/>
          </Card>
          <Card title="Every master" content="was once a beginner.">
            <Badge label="New" color="success"/>
          </Card>
        </div>
        <Avatar 
          imageSrc={reactDesign}
          description="Cool react image" />
        <Footer content="Created with ❤️ by " name=" Edgardo Flores" />

      </div>
    </>
  )
}

export default App;
