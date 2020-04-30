//jshint esversion: 8
import React from 'react';
const today = new Date();
const year = today.getFullYear();
let Footer = () => <footer><p>Copyright &copy; {year}</p></footer>;

export default Footer;