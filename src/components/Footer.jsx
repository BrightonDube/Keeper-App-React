//jshint esversion: 8
import React from 'react';
const today = new Date();
const year = today.getFullYear();
let Footer = () => <footer>Copyright &copy; {year}</footer>;

export default Footer;