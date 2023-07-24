import { Button } from "@mui/base";
import {Box,Container, Typography,Paper} from "@mui/material";

// serviceList = ["Aparatus","Simulations","Competitions","Robotics"]


const serviceList = [
  {
    name: "Aparatus",
    description: `Welcome to the captivating world of Aparatus, our exceptional team of mathematical enthusiasts and innovators. Prepare to be amazed as we showcase a mesmerizing Mathematical Exhibition that unveils the beauty and elegance of numbers, shapes, and patterns. Join us on an exhilarating journey through the wonders of mathematics, where creativity and logic converge to unlock the secrets of the universe. Immerse yourself in a world of mind-bending puzzles, interactive displays, and thought-provoking demonstrations that will leave you inspired and intrigued. Discover the magic of math with Aparatus, where imagination knows no bounds and learning becomes an exhilarating adventure.`,
  },
  {
    name: "Simulations",
    description: `Step into the realm of Mathematical Simulation at our extraordinary Mathematical Exhibition. Engage in a dynamic and immersive experience where theory meets reality, and equations come to life. Through cutting-edge technology and innovative visualizations, we bring complex mathematical concepts to the forefront, making them accessible and captivating for all. Dive into interactive simulations that demonstrate the power of math in solving real-world challenges, and witness the beauty of mathematical principles unfolding before your eyes. Embark on a journey of exploration and discovery, where curiosity and knowledge converge, leaving you with a deeper appreciation for the boundless possibilities of mathematics. Join us for an unforgettable encounter with the magic of Mathematical Simulation at our awe-inspiring Exhibition.`,
  },
  {
    name: "Competitions",
    description: `Calling all math enthusiasts and problem solvers! Join the exhilarating Mathematical Competition at our one-of-a-kind Exhibition. Put your skills to the test and embark on a thrilling journey of challenges designed to ignite your passion for mathematics. Whether you're a seasoned mathematician or an aspiring enthusiast, this competition promises an engaging and rewarding experience for all ages. Sharpen your wits, tackle mind-bending puzzles, and compete with fellow enthusiasts from around the world in a friendly and competitive atmosphere. Unleash your inner genius and showcase your ability to crack complex problems with elegance and precision. Prizes and recognition await those who rise to the occasion! Don't miss this opportunity to be a part of the Mathematical Competition and celebrate the beauty and excitement of mathematics in all its glory.`,
  },
  {
    name: "Robotics",
    description: `Introducing the incredible Sudoku Solving Robot, a star attraction at our Mathematical Exhibition! Prepare to be amazed as this ingenious marvel showcases the perfect blend of mathematics and robotics. Watch in awe as the Sudoku Solving Robot takes on complex puzzles with lightning speed and precision, demonstrating the power of algorithms and logical thinking. Interact with this mechanical genius, witness its problem-solving prowess, and even challenge it with your own puzzles! Discover the fascinating intersection of artificial intelligence and mathematics, and learn how cutting-edge technology can unravel the enigmatic world of Sudoku. Don't miss the chance to witness the Sudoku Solving Robot in action, a testament to the limitless possibilities when math and innovation come together!`,
  },
];

function App() {
  return (
    <Container>
      <Typography variant="h1" sx = {{ my: 4, textAlign : 'center', color : 'primary.main'}}>Maths Department EXMO</Typography>
   
    <Box
    sx={{
      display : "flex",
      flexDirection : { xs : "column" , md : "row" },
      justifyContent : "space-between",
      gap : 4,
    }}>
    {serviceList.map((service) => (
      <Paper elevation = {3} sx= {{ width : { xs : 1 , md : 320} }} key = {service.name}>
        <Box sx={{m:3}}>
        <Typography variant="h3">
          {service.name}
        </Typography>
        <Typography sx={{m:2}}>
          {service.description}
        </Typography>
        <Button variant="contained" color = "secondary" sx = {{mt : 2}}>Learn More</Button>
        </Box>
        
      </Paper>
      
    ))}
    </Box>
    </Container>
  );
}

export default App;
