import React from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': 'John',
  'birthday': '961222',
  'gender': 'male',
  'job': 'College Student'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/any',
  'name': 'Jane',
  'birthday': '930128',
  'gender': 'female',
  'job': 'Developer'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/any',
  'name': 'James',
  'birthday': '950824',
  'gender': 'male',
  'job': 'QA'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }      
    </div>
  );
}

export default App;
