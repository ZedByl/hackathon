export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}