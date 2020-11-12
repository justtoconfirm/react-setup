import React from 'react'
import List from './../atoms/List/List'

const mylist = ['a', 'b', 'c'];

const About = () => (
  <>
    <h1>About</h1>
    <List listItems={mylist} />
  </>
)

export default About
