// Import all character images
import rumiImg from '../assets/images/rumi.png';
import miraImg from '../assets/images/mira.png';
import zoeImg from '../assets/images/zoe.png';
import tigerImg from '../assets/images/tiger.png';
import demonImg from '../assets/images/demon.png';
import sajaImg from '../assets/images/saja.png';

// Import all sound files
import goldenSound from '../assets/sounds/golden.mp3';
import takedownSound from '../assets/sounds/takedown.mp3';
import doneSound from '../assets/sounds/done.mp3';
import wrongSound from '../assets/sounds/wrong.mp3';

export const gameData = {
  1: {
    title: "Chapter 1",
    story: "Rumi faces a demon trying to steal fans' energy.",
    hero: "Rumi",
    villain: "Energy Demon",
    heroImage: rumiImg,
    villainImage: demonImg,
    unlocked: true
  },
  2: {
    title: "Chapter 2",
    story: "Mira confronts a Saja Boys blocking the stage.",
    hero: "Mira",
    villain: "Saja Boys",
    heroImage: miraImg,
    villainImage: sajaImg,
    unlocked: false
  },
  3: {
    title: "Chapter 3",
    story: "Zoey battles a sneaky demon hiding in the concert lights.",
    hero: "Zoey",
    villain: "Light Demon",
    heroImage: zoeImg,
    villainImage: demonImg,
    unlocked: false
  },
  4: {
    title: "Chapter 4",
    story: "Suzie the Tiger leaps at a demon that jumped into the crowd.",
    hero: "Suzie the Tiger",
    villain: "Crowd Demon",
    heroImage: tigerImg,
    villainImage: demonImg,
    unlocked: false
  },
  5: {
    title: "Chapter 5",
    story: "Rumi challenges the Saja Boys attempting to disrupt rehearsal.",
    hero: "Rumi",
    villain: "Saja Boys",
    heroImage: rumiImg,
    villainImage: sajaImg,
    unlocked: false
  },
  6: {
    title: "Chapter 6",
    story: "Mira protects the fans from a charging demon in the streets.",
    hero: "Mira",
    villain: "Street Demon",
    heroImage: miraImg,
    villainImage: demonImg,
    unlocked: false
  },
  7: {
    title: "Chapter 7",
    story: "Zoey faces the final Saja Boys boss, blocking the stadium exit.",
    hero: "Zoey",
    villain: "Saja Boys Boss",
    heroImage: zoeImg,
    villainImage: sajaImg,
    unlocked: false
  }
};

export const sounds = {
  correct: [goldenSound, takedownSound, doneSound],
  wrong: wrongSound
};

// Only 1, 2, 3, 10, 0, and 11 times tables, not going past 10, and for 11 table, not 10x11 or 11x11
export const multiplicationTables = [1,2,3,10,0,11];

export const generateQuestion = () => {
  let table = multiplicationTables[Math.floor(Math.random() * multiplicationTables.length)];
  let multiplier;

  if (table === 11) {
    // For 11 times table, only 1-9 (not 10 or 11)
    multiplier = Math.floor(Math.random() * 9) + 1;
  } else if (table === 0) {
    // For 0 times table, 1-10
    multiplier = Math.floor(Math.random() * 10) + 1;
  } else {
    // For others, 1-10
    multiplier = Math.floor(Math.random() * 10) + 1;
  }

  return {
    question: `${table} × ${multiplier}`,
    answer: table * multiplier,
    table,
    multiplier
  };
};

export const generateQuestions = (count = 35) => {
  const questions = [];
  for (let i = 0; i < count; i++) {
    questions.push(generateQuestion());
  }
  return questions;
};