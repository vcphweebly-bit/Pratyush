export type Memory = {
  date: string;
  title: string;
  description: string;
  image?: string;
  x: number;
  y: number;
  hidden?: boolean;
};

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
  label: string;
  image?: string;
  icon: "sparkles" | "message" | "music" | "heart" | "moon";
};

export type Observation = {
  title: string;
  text: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  date?: string;
  hasSecretArrow?: boolean;
  secretSrc?: string;
};

export type Song = {
  title: string;
  artist: string;
  file: string;
  cover?: string;
  note: string;
  startAtSeconds?: number;
};

export type OpenWhenMessage = {
  title: string;
  message: string;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  answerIndex: number;
  response: string;
};

export const siteContent = {
  recipient: {
    name: "Kausiki",
    nickname: "Ziddi",
    initials: "KZ",
    occasion: "Happy Birthday",
    specialDate: "2010-07-18",
    birthDateLabel: "18 July 2010"
  },

  sender: {
    name: "Pratyush",
    signature: "Made by Pratyush, with too many feelings and questionable coding decisions."
  },

  secretCode: "Ziddi,fattu189",

  hero: {
    title: "For Kausiki",
    subtitle: "Some people enter our lives quietly,\nthen somehow become an entire universe.\nThis one is for you, Ziddi.",
    image: "/images/photo-01.png"
  },

  memories: [
    {
      date: "",
      title: "The Beginning",
      description: "The day an ordinary conversation became something I would remember, Ziddi.",
      image: "/images/photo-02.jpeg",
      x: 18,
      y: 34
    },
    {
      date: "",
      title: "The Laugh I Kept",
      description: "You laughed at something tiny, and the whole day changed shape.",
      image: "/images/photo-03.jpeg",
      x: 37,
      y: 18
    },
    {
      date: "",
      title: "A Quiet Almost",
      description: "One of those moments that was small to the world and huge to me.",
      image: "/images/photo-04.jpeg",
      x: 62,
      y: 31
    },
    {
      date: "",
      title: "The Song Loop",
      description: "A melody started carrying Kausiki's name around in my head.",
      image: "/images/photo-05.jpeg",
      x: 76,
      y: 57
    },
    {
      date: "",
      title: "Warm Light",
      description: "A normal evening, except I wanted to keep it forever.",
      image: "/images/photo-06.jpg",
      x: 46,
      y: 67
    },
    {
      date: "",
      title: "Still Growing",
      description: "This story is still making room for new stars, especially the stubborn Ziddi ones.",
      image: "/images/photo-07.jpeg",
      x: 27,
      y: 76
    },
    {
      date: "",
      title: "The Quiet Memory",
      description: "You found the quiet memory-the one I never say out loud.",
      image: "/images/photo-08.jpeg",
      x: 94,
      y: 14,
      hidden: true
    }
  ] satisfies Memory[],

  timeline: [
    {
      date: "",
      title: "The Beginning",
      description: "The first page of this tiny archive for Kausiki.",
      label: "The beginning",
      image: "/images/photo-02.jpeg",
      icon: "sparkles"
    },
    {
      date: "",
      title: "The First Proper Conversation",
      description: "The moment the conversation stopped being ordinary.",
      label: "The first proper conversation",
      image: "/images/photo-03.jpeg",
      icon: "message"
    },
    {
      date: "",
      title: "The Day I Laughed Too Much",
      description: "I still remember the exact kind of ridiculous it was.",
      label: "The day I laughed too much",
      image: "/images/photo-04.jpeg",
      icon: "heart"
    },
    {
      date: "",
      title: "A Moment I Would Replay",
      description: "If time had a replay button, this would be on the list.",
      label: "A moment I wish I could replay",
      image: "/images/photo-05.jpeg",
      icon: "moon"
    },
    {
      date: "",
      title: "This Little Universe",
      description: "A handmade place for everything that keeps becoming us.",
      label: "The little universe",
      image: "/images/photo-01.png",
      icon: "sparkles"
    }
  ] satisfies TimelineItem[],

  observations: [
    {
      title: "The way you laugh, Ziddi",
      text: "Especially when you try not to. That is usually when it wins."
    },
    {
      title: "Your thoughtful pauses",
      text: "You make silence feel like it is thinking too."
    },
    {
      title: "Your impossible timing",
      text: "You can reply after an entire geological era and still make me smile."
    },
    {
      title: "The care in small things",
      text: "You notice details most people walk past."
    },
    {
      title: "Your stubborn hope",
      text: "It keeps finding a window, even on difficult days."
    },
    {
      title: "How you become a place",
      text: "Some people feel like a person. Kausiki, you also feel like somewhere to arrive."
    }
  ] satisfies Observation[],

  gallery: [
    {
      src: "/images/photo-02.jpeg",
      alt: "Kausiki memory photo",
      caption: "the tiny beginning",
      hasSecretArrow: true,
      secretSrc: "/images/photo-08.jpeg"
    },
    {
      src: "/images/photo-03.jpeg",
      alt: "Kausiki memory photo",
      caption: "a soft blue evening"
    },
    {
      src: "/images/photo-04.jpeg",
      alt: "Kausiki memory photo",
      caption: "kept for later"
    },
    {
      src: "/images/photo-05.jpeg",
      alt: "Kausiki memory photo",
      caption: "this one feels warm"
    },
    {
      src: "/images/photo-06.jpg",
      alt: "Kausiki memory photo",
      caption: "proof of a good day"
    }
  ] satisfies GalleryItem[],

  songs: [
    {
      title: "Dooriyan",
      artist: "For Ziddi",
      file: "/audio/dooriyan.mp3",
      cover: "/images/photo-09.jpeg",
      note: "This one starts from the part that feels like it was waiting for her.",
      startAtSeconds: 31
    }
  ] satisfies Song[],

  openWhenMessages: [
    {
      title: "Open when you feel low",
      message: "Ziddi, I hope this reminds you that one hard hour is not the whole sky."
    },
    {
      title: "Open when you miss me",
      message: "Imagine me saving you a seat in every ordinary moment, Kausiki."
    },
    {
      title: "Open when you cannot sleep",
      message: "Let the world be quiet. You do not have to solve everything tonight."
    },
    {
      title: "Open when you need motivation",
      message: "I am loudly, embarrassingly on your side, Ziddi."
    },
    {
      title: "Open when you are overthinking",
      message: "The gentlest answer is allowed to be true too."
    },
    {
      title: "Open when today feels special",
      message: "Keep a little piece of this day. It belongs to you, Kausiki."
    }
  ] satisfies OpenWhenMessage[],

  gift: {
    type: "promise",
    image: "/images/wish-kausiki.png",
    revealText:
      "One free wish for Ziddi:\nredeemable whenever you want a tiny adventure, a saved seat, a badly hidden smile, or someone quietly choosing your side.",
    couponTitle: "One free wish",
    couponSubtitle: "Issued by Pratyush. No expiry, no questions, and maybe a little more meaning than he will admit out loud."
  },

  quiz: [
    {
      question: "Where did we first talk properly?",
      options: ["Somewhere only the stars remember", "A suspiciously ordinary place", "Ziddi headquarters"],
      answerIndex: 0,
      response: "Close enough. History is written by the emotionally biased anyway."
    },
    {
      question: "Which song reminds me of you?",
      options: ["The soft one", "The late-night one", "All of them, inconveniently"],
      answerIndex: 2,
      response: "A suspiciously accurate answer."
    },
    {
      question: "What phrase do I say too often?",
      options: ["Wait, listen", "This is important", "Ziddi"],
      answerIndex: 2,
      response: "Correct in spirit, which is the only court that matters here."
    },
    {
      question: "Which memory would I replay?",
      options: ["The first laugh", "The quiet almost", "The next one"],
      answerIndex: 2,
      response: "Naturally. The future is very nosy."
    }
  ] satisfies QuizQuestion[],

  finalLetter:
    "Dear Kausiki,\n\nZiddi, I wanted this to feel less like a page and more like opening a drawer full of little proof: that you are noticed, remembered, chosen, and celebrated in ways ordinary words keep failing to hold.\n\nSomewhere between the tiny conversations, the songs, the almosts, and the moments I keep replaying, you became a whole constellation in my life.\n\nSo this is a small universe made for you. It can grow whenever we do.\n\nWith all my unreasonable stars,\nPratyush",

  finalMessage: "Out of every possible timeline,\nI am grateful this one contained you.",

  easterEggs: {
    moon: "Okay, detective. You found the moon's secret.",
    nickname: "You typed the secret name. Of course Ziddi gets a secret note: this whole universe was looking for you.",
    alreadySeen: "You have already seen the universe.\nNow you know why it was made."
  }
};
