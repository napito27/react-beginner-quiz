import React from 'react';


// components
import Avatar from './atoms/avatar';
import Badge from './atoms/badge';
import Card from './atoms/card';
import Counter from './atoms/counter';
import Header from './atoms/header';
import Footer from './atoms/footer';

// images
import reactDesign from './images/photo.JPEG'

// hooks


// styles
import './styles/App.css';

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
            <Badge label="New" />
          </Card>
        </div>
        <Avatar 
          imageSrc={reactDesign}
          description="Edgardo's photo" />
        <Footer content="Created with ❤️ by " name=" Edgardo Flores" />

      </div>
    </>
  )
}

export default App;
