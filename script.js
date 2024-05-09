const quizData = [
    {
      question: "Qual é o principal gás responsável pelo efeito estufa?",
      choices: ["Oxigênio", "Nitrogênio", "Dióxido de Carbono", "Hidrogênio"],
      correct: 2
    },
    {
      question: "Qual é a principal causa do desmatamento?",
      choices: ["Agricultura", "Mineração", "Urbanização", "Desenvolvimento de Infraestrutura"],
      correct: 0
    },
    {
      question: "Qual é a importância da reciclagem de materiais?",
      choices: ["Reduz a poluição", "Conserva os recursos naturais", "Diminui a quantidade de resíduos", "Todas as anteriores"],
      correct: 3
    },
    {
      question: "Quais são os três Rs da sustentabilidade?",
      choices: ["Reciclar, Reutilizar, Reduzir", "Replantar, Reciclar, Reduzir", "Reutilizar, Recarregar, Reduzir", "Redefinir, Reutilizar, Replantar"],
      correct: 0
    },
    {
      question: "O que é aquecimento global?",
      choices: ["Aumento gradual da temperatura média da Terra devido às atividades humanas", "Alteração sazonal das temperaturas em regiões específicas", "Fenômeno natural causado pelo Sol", "Redução da temperatura atmosférica devido à poluição"],
      correct: 0
    },
    {
      question: "Qual é o principal poluente responsável pela chuva ácida?",
      choices: ["Dióxido de Carbono", "Dióxido de Nitrogênio", "Metano", "Monóxido de Carbono"],
      correct: 1
    },
    {
      question: "O que é a camada de ozônio?",
      choices: ["Uma camada de gases inflamáveis na atmosfera", "Uma camada de oxigênio puro que protege a Terra dos raios solares", "Uma camada de ozônio que protege a Terra da radiação ultravioleta prejudicial", "Uma camada de nuvens densas que reflete a luz solar"],
      correct: 2
    },
    {
      question: "Qual é a importância das áreas de conservação ambiental?",
      choices: ["Proteger a diversidade biológica", "Promover o turismo", "Desenvolver atividades industriais", "Eliminar habitats naturais"],
      correct: 0
    },
    {
      question: "Como a agricultura sustentável contribui para o meio ambiente?",
      choices: ["Aumenta o uso de pesticidas", "Reduz a erosão do solo", "Causa o desmatamento de grandes áreas", "Aumenta o consumo de água"],
      correct: 1
    },
    {
      question: "O que é pegada de carbono?",
      choices: ["Uma marca deixada por carbono puro", "A quantidade de carbono liberada na atmosfera devido às atividades humanas", "Uma medida da quantidade de carbono em um objeto", "Um tipo de impressão digital de carbono"],
      correct: 1
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;

  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const scoreElement = document.getElementById("score");
  
  function displayQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    choicesElement.innerHTML = "";
  
    currentQuizData.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.innerText = choice;
      button.addEventListener("click", () => checkAnswer(index));
      choicesElement.appendChild(button);
    });
  }
  
  function checkAnswer(choiceIndex) {
    const currentQuizData = quizData[currentQuestion];
    if (choiceIndex === currentQuizData.correct) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    questionElement.innerText = "";
    choicesElement.innerHTML = "";
    scoreElement.innerText =` Você acertou ${score} de ${quizData.length} perguntas. `;
  }
  
  displayQuestion();
  