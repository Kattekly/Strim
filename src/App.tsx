import React from 'react';
import logo from './logo.svg';
import './App.css';

const people = [
  {
    name: 'James',
    age: 31,
  },
  {
    name: 'John',
    age: 45,
  },
  {
    name: 'Paul',
    age: 65,
  },
  {
    name: 'Ringo',
    age: 49,
  },
  {
    name: 'George',
    age: 34,
  }
];

function App() {
  return (
      <div>
        {people.filter(person => person.age < 60).map(filteredPerson => (
            <li>
              {filteredPerson.name}
            </li>
        ))}
      </div>
  );
}

export default App;
