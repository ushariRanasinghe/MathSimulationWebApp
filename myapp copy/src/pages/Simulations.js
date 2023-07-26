import React from 'react';
import ImgMediaCard from '../Components/ImgMediaCard';
import Grid from '@mui/material/Grid';

//images
import doublePendulumImage from '../images/SimulationImages/doublePendulum.png';
import functionTransformerImage from '../images/SimulationImages/functionTransformer.png';
import gameOfLifeImage from '../images/SimulationImages/gameOfLife.png'
import turtleImage from '../images/SimulationImages/turtle.png';

const Simulation = () => {
  // Sample data for the cards
  const cardData = [
    {
      imageUrl: doublePendulumImage,
      title: 'Double Pendulum',
      description: 'The double pendulum simulation is a fascinating and classic physics experiment that involves two connected pendulums swinging freely under the influence of gravity. Each pendulum consists of a mass attached to a rigid rod, and the motion of the second pendulum is affected not only by gravity but also by the movements of the first pendulum. As a result, the system exhibits chaotic and unpredictable behavior, making it a popular subject for exploring complex dynamics and chaos theory. In this simulation, you can observe the mesmerizing motion of the double pendulum and gain insights into the intricate interplay of forces that govern its motion.',
      linkTo: '/card1',
    },
    {
      imageUrl: functionTransformerImage,
      title: 'Function Transformer',
      description: 'The function transformer is a powerful programming concept that allows you to modify or extend the behavior of a function without directly altering its original code. It achieves this by taking a function as input and returning a new function with enhanced capabilities. Function transformers are commonly used in functional programming and software design patterns to implement features such as memoization, error handling, logging, and more. By applying function transformers, developers can efficiently customize the behavior of existing functions, promoting code reusability and maintainability in their applications.',
      linkTo: '/card2',
    },
    {
      imageUrl: gameOfLifeImage,
      title: 'Game of Life',
      description: 'Conways Game of Life is a mesmerizing cellular automaton with simple rules, where cells on a grid evolve based on their neighbors states, creating captivating patterns and behaviors.',
      linkTo: '/card3',
    },
    {
      imageUrl: turtleImage,
      title: 'Colorful Turtle Simulations',
      description: 'The Colorful Python Turtle Simulation is a delightful and interactive coding project that utilizes the Python Turtle graphics library. With the help of Pythons Turtle module, users can create captivating drawings and patterns on the screen, infused with an array of vibrant colors. The simulation allows beginners and coding enthusiasts to explore the world of programming through visual art and creativity. By guiding the Python Turtle with simple commands, users can witness beautiful and colorful shapes come to life on the canvas, making the learning process enjoyable and engaging.',
      linkTo: '/card4',
    },
  ];

  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={6} key={index}>
          <ImgMediaCard
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            linkTo={card.linkTo}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Simulation;

