import React from 'react';
import ImgMediaCard from './ImgMediaCard';
import Grid from '@mui/material/Grid';

//images
import doublePendulumImage from '../images/doublePendulum.png';
import functionTransformerImage from '../images/functionTransformer.png';
import gameOfLifeImage from '../images/gameOfLife.png';

const Aparatus = () => {
  // Sample data for the cards
  const cardData = [
    {
      imageUrl: doublePendulumImage,
      title: 'Double Pendulum',
      description: 'The double pendulum simulation is a fascinating and classic physics experiment that involves two connected pendulums swinging freely under the influence of gravity. Each pendulum consists of a mass attached to a rigid rod, and the motion of the second pendulum is affected not only by gravity but also by the movements of the first pendulum. As a result, the system exhibits chaotic and unpredictable behavior, making it a popular subject for exploring complex dynamics and chaos theory. In this simulation, you can observe the mesmerizing motion of the double pendulum and gain insights into the intricate interplay of forces that govern its motion.',
      linkTo: '/doublePendulum',
    },
    {
      imageUrl: functionTransformerImage,
      title: 'Function Transformer',
      description: 'The function transformer is a powerful programming concept that allows you to modify or extend the behavior of a function without directly altering its original code. It achieves this by taking a function as input and returning a new function with enhanced capabilities. Function transformers are commonly used in functional programming and software design patterns to implement features such as memoization, error handling, logging, and more. By applying function transformers, developers can efficiently customize the behavior of existing functions, promoting code reusability and maintainability in their applications.',
      linkTo: '/functionTransformer',
    },
    {
      imageUrl: gameOfLifeImage,
      title: 'Game of Life',
      description: 'Conways Game of Life is a mesmerizing cellular automaton with simple rules, where cells on a grid evolve based on their neighbors states, creating captivating patterns and behaviors.',
      linkTo: '/gameOfLife',
    },
  ];

  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
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

export default Aparatus;
