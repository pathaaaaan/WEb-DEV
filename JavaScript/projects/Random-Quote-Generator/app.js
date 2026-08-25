const quotes = [
  "The best way to predict the future is to create it.",
  "Success is the sum of small efforts repeated every day.",
  "Dream big, start small, act now.",
  "Discipline beats motivation when motivation fades.",
  "Every expert was once a beginner.",
  "Your only limit is your mind.",
  "Great things take time.",
  "Don't watch the clock; do what it does. Keep going.",
  "Hard work compounds over time.",
  "Progress, not perfection.",
  "Stay hungry, stay foolish.",
  "Difficult roads often lead to beautiful destinations.",
  "Believe you can, and you're halfway there.",
  "Small steps every day lead to big results.",
  "Focus on the process, not just the outcome.",
  "Failure is simply an opportunity to begin again.",
  "Make today count.",
  "Consistency is the key to mastery.",
  "The future depends on what you do today.",
  "You don't have to be great to start.",
  "Start where you are. Use what you have.",
  "Challenges are what make life interesting.",
  "Learn from yesterday, live for today.",
  "Action is the foundational key to success.",
  "Don't quit when you're tired. Quit when you're done.",
  "Growth begins outside your comfort zone.",
  "Success requires patience and persistence.",
  "Turn your obstacles into opportunities.",
  "Be better than you were yesterday.",
  "Keep moving forward, one step at a time.",
];


const btn = document.querySelector("button");
const quote = document.querySelector("h1");

btn.addEventListener('click', () => {
    const index = Math.floor(Math.random() * 20);
    quote.textContent = quotes[index];
})