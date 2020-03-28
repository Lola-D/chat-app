import React from 'react';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact 
        name="Mark Kennedy"
        avatar="https://randomuser.me/api/portraits/men/17.jpg"
        online={true}
      />
      <Contact 
        name="Denise Peters"
        avatar="https://randomuser.me/api/portraits/women/49.jpg"
        online={false}
      />
      <Contact 
        name="Jacqueline Hicks"
        avatar="https://randomuser.me/api/portraits/women/3.jpg"
        online={true}
      />
    </div>
  );
}

export default App;
