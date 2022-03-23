import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
    {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name':'홍길동',
    'birthday':'19001212',
    'gender':'남자',
    'job':'직장인'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name':'나문희',
    'birthday':'19101212',
    'gender':'여자',
    'job':'가정주부'
  },
  {
    'id':1,
    'image':'https://placeimg.com/64/64/3',
    'name':'나요',
    'birthday':'19201212',
    'gender':'남자',
    'job':'무직'
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
