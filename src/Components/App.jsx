import React from 'react'
import { request } from '../request' 
import { Info } from './Info'
import '../Style/App.css'

export class App extends React.Component {
  state={
    people: null,
  }

  async getRequest () {
    const people = await request();
    console.log(people.results);
    this.setState({
      people: people.results,
    })
  }

  componentDidMount () {
    this.getRequest()
  }

  render(){
    const { people } = this.state
    return(
      <>
        {people !== null && (
          <ul className="list">{people.map((item, index) => (
            <Info 
              key={index}
              item={item}
              index={index}
            />
          ))}</ul>
        )}
      </>
    )
  }
}
