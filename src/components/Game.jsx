
// import { Box, Button, Center, Flex, Text, VStack } from "@chakra-ui/react";
// import { useEffect, useState } from "react";

// const choices = ["rock", "paper", "scissors"];

// const generateComputerChoice = () => {
//   return choices[Math.floor(Math.random() * choices.length)];
// };

// const getResult = (playerChoice, computerChoice) => {
//   if (playerChoice === computerChoice) {
//     return "Draw! Both chose the same.";
//   }
//   if (
//     (playerChoice === "rock" && computerChoice === "scissors") ||
//     (playerChoice === "scissors" && computerChoice === "paper") ||
//     (playerChoice === "paper" && computerChoice === "rock")
//   ) {
//     return `You Win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}.`;
//   } else {
//     return `You Lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}.`;
//   }
// };

// const Game = () => {
//   const [playerChoice, setPlayerChoice] = useState("");
//   const [computerChoice, setComputerChoice] = useState("");
//   const [result, setResult] = useState("");
//   const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });

//   useEffect(() => {
//     const savedScore = JSON.parse(localStorage.getItem("score"));
//     if (savedScore) {
//       setScore(savedScore);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("score", JSON.stringify(score));
//   }, [score]);

//   const handlePlayerChoice = (choice) => {
//     const compChoice = generateComputerChoice();
//     setPlayerChoice(choice);
//     setComputerChoice(compChoice);
//     const gameResult = getResult(choice, compChoice);
//     setResult(gameResult);

//     if (gameResult.includes("Win")) {
//       setScore({ ...score, wins: score.wins + 1 });
//     } else if (gameResult.includes("Lose")) {
//       setScore({ ...score, losses: score.losses + 1 });
//     } else {
//       setScore({ ...score, draws: score.draws + 1 });
//     }
//   };

//   const handleReset = () => {
//     setPlayerChoice("");
//     setComputerChoice("");
//     setResult("");
//     setScore({ wins: 0, losses: 0, draws: 0 });
//     localStorage.removeItem("score");
//   };

//   return (
//     <VStack spacing={6} p={6}>
//       <Flex justifyContent="center" gap={6} flexWrap="wrap">
//         <Text bg="green.400" p={4} borderRadius="md" color="white" fontWeight="bold">
//           Wins: {score.wins}
//         </Text>
//         <Text bg="red.400" p={4} borderRadius="md" color="white" fontWeight="bold">
//           Losses: {score.losses}
//         </Text>
//         <Text bg="gray.400" p={4} borderRadius="md" color="white" fontWeight="bold">
//           Draws: {score.draws}
//         </Text>
//       </Flex>

//       <Box textAlign="center">
//         <Flex justifyContent="center" gap={6} flexWrap="wrap">
//           <Text p={4} borderWidth={2} borderColor="orange.400" borderRadius="md">
//             Player: {playerChoice}
//           </Text>
//           <Text p={4} borderWidth={2} borderColor="orange.400" borderRadius="md">
//             Computer: {computerChoice}
//           </Text>
//         </Flex>
//         <Center mt={4}>
//           <Text p={4} borderWidth={2} borderColor="orange.400" borderRadius="md">
//             Result: {result}
//           </Text>
//         </Center>
//       </Box>

//       <Flex justifyContent="center" gap={6} flexWrap="wrap">
//         {choices.map((choice) => (
//           <Button
//             key={choice}
//             p={6}
//             bg="blue.400"
//             color="white"
//             borderRadius="md"
//             _hover={{ bg: "blue.500" }}
//             onClick={() => handlePlayerChoice(choice)}
//           >
//             {choice.charAt(0).toUpperCase() + choice.slice(1)}
//           </Button>
//         ))}
//       </Flex>

//       <Center>
//         <Button
//           p={6}
//           bg="red.500"
//           color="white"
//           borderRadius="md"
//           _hover={{ bg: "red.600" }}
//           onClick={handleReset}
//         >
//           Reset
//         </Button>
//       </Center>
//     </VStack>
//   );
// };

// export default Game;

import { Box, Button, Center, Flex, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const choices = ["rock", "paper", "scissors"];

const generateComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const getResult = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "Draw! Both chose the same.";
  }
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return `You Win! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}.`;
  } else {
    return `You Lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}.`;
  }
};

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });

  useEffect(() => {
    const savedScore = JSON.parse(localStorage.getItem("score"));
    if (savedScore) {
      setScore(savedScore);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  const handlePlayerChoice = (choice) => {
    const compChoice = generateComputerChoice();
    setPlayerChoice(choice);
    setComputerChoice(compChoice);
    const gameResult = getResult(choice, compChoice);
    setResult(gameResult);

    if (gameResult.includes("Win")) {
      setScore({ ...score, wins: score.wins + 1 });
    } else if (gameResult.includes("Lose")) {
      setScore({ ...score, losses: score.losses + 1 });
    } else {
      setScore({ ...score, draws: score.draws + 1 });
    }
  };

  const handleReset = () => {
    setPlayerChoice("");
    setComputerChoice("");
    setResult("");
    setScore({ wins: 0, losses: 0, draws: 0 });
    localStorage.removeItem("score");
  };

  return (
    <Center height="100vh" flexDirection="column">
      <Center>
      <Text fontSize="4xl" fontWeight="bold" mb={10}>
        Rock, Paper, Scissors
      </Text>
      </Center>

      <VStack spacing={6} p={6}>
        <Flex justifyContent="center" gap={6} flexWrap="wrap">
          <Text bg="green.400" p={4} borderRadius="md" color="white" fontWeight="bold">
            Wins: {score.wins}
          </Text>
          <Text bg="red.400" p={4} borderRadius="md" color="white" fontWeight="bold">
            Losses: {score.losses}
          </Text>
          <Text bg="gray.400" p={4} borderRadius="md" color="white" fontWeight="bold">
            Draws: {score.draws}
          </Text>
        </Flex>

        <Box textAlign="center">
          <Flex justifyContent="center" gap={6} flexWrap="wrap">
            <Text p={4} borderWidth={2} borderColor="orange.400" borderRadius="md">
              Player: {playerChoice}
            </Text>
            <Text p={4} borderWidth={2} borderColor="orange.400" borderRadius="md">
              Computer: {computerChoice}
            </Text>
          </Flex>
          <Center mt={4}>
            <Text p={4} borderWidth={2} borderColor="orange.400" borderRadius="md">
              Result: {result}
            </Text>
          </Center>
        </Box>

        <Flex justifyContent="center" gap={6} flexWrap="wrap">
          {choices.map((choice) => (
            <Button
              key={choice}
              p={6}
              bg="blue.400"
              color="white"
              borderRadius="md"
              _hover={{ bg: "blue.500" }}
              onClick={() => handlePlayerChoice(choice)}
            >
              {choice.charAt(0).toUpperCase() + choice.slice(1)}
            </Button>
          ))}
        </Flex>

        <Center>
          <Button
            p={6}
            bg="red.500"
            color="white"
            borderRadius="md"
            _hover={{ bg: "red.600" }}
            onClick={handleReset}
          >
            Reset
          </Button>
        </Center>
      </VStack>
    </Center>
  );
};

export default Game;
