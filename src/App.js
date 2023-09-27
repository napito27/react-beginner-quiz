import React from 'react';

// styles
import './App.css';

// components
import Avatar from './atoms/avatar';
import Badge from './atoms/badge';
import Card from './atoms/card';
import Counter from './atoms/counter';
import Header from './atoms/header';
import Footer from './atoms/footer';

function App() {
  return (
    <>
      <div className='App'>

        <Header title="React Beginner's Quiz"/>
        <Card title="Best therapy" content="sometimes is a drive and music." /> 
        <Card title="Train your mind" content="to be calm in every situation." />
        <Badge label="New" color="warning"/>
        <Card title="Every master" content="was once a beginner." />
        <Counter/>
        <Avatar 
          imageSrc="https://topsoftwarecompanies.co/front_assets/img/blog/React_For_Front-End_Development.jpg "
          description="Cool react image" />
        <Footer content="Created with ❤️ by " name=" Edgardo Flores" />

      </div>
    </>
  )
}

export default App;
