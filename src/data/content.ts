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

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

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
    image: asset("images/photo-01.png")
  },

  memories: [
    {
      date: "",
      title: "The Beginning",
      description: "The day an ordinary conversation became something I would remember, Ziddi. Tiny rule from the archive: do not reply just 'hmm' to Pratyush, it makes him worry about you.",
      image: asset("images/photo-02.jpeg"),
      x: 18,
      y: 34
    },
    {
      date: "",
      title: "The Laugh I Kept",
      description: "You laughed at something tiny, and the whole day changed shape.",
      image: asset("images/photo-03.jpeg"),
      x: 37,
      y: 18
    },
    {
      date: "",
      title: "A Quiet Almost",
      description: "One of those moments that was small to the world and huge to me.",
      image: asset("images/photo-04.jpeg"),
      x: 62,
      y: 31
    },
    {
      date: "",
      title: "The Song Loop",
      description: "A melody started carrying Kausiki's name around in my head.",
      image: asset("images/photo-05.jpeg"),
      x: 76,
      y: 57
    },
    {
      date: "",
      title: "Warm Light",
      description: "A normal evening, except I wanted to keep it forever.",
      image: asset("images/photo-06.jpg"),
      x: 46,
      y: 67
    },
    {
      date: "",
      title: "Still Growing",
      description: "This story is still making room for new stars, especially the stubborn Ziddi ones.",
      image: asset("images/photo-07.jpeg"),
      x: 27,
      y: 76
    },
    {
      date: "",
      title: "The Quiet Memory",
      description: "You found the quiet memory-the one I never say out loud. Also, please do not send Pratyush a lonely 'hmm'; his brain immediately starts writing worried poetry about Ziddi.",
      image: asset("images/photo-08.jpeg"),
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
      image: asset("images/photo-02.jpeg"),
      icon: "sparkles"
    },
    {
      date: "",
      title: "The First Proper Conversation",
      description: "The moment the conversation stopped being ordinary.",
      label: "The first proper conversation",
      image: asset("images/photo-03.jpeg"),
      icon: "message"
    },
    {
      date: "",
      title: "The Day I Laughed Too Much",
      description: "I still remember the exact kind of ridiculous it was.",
      label: "The day I laughed too much",
      image: asset("images/photo-04.jpeg"),
      icon: "heart"
    },
    {
      date: "",
      title: "A Moment I Would Replay",
      description: "If time had a replay button, this would be on the list.",
      label: "A moment I wish I could replay",
      image: asset("images/photo-05.jpeg"),
      icon: "moon"
    },
    {
      date: "",
      title: "This Little Universe",
      description: "A handmade place for everything that keeps becoming us.",
      label: "The little universe",
      image: asset("images/photo-01.png"),
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
      text: "You can reply after an entire geological era and still make me smile. Just maybe not with only 'hmm', because Pratyush will start worrying about Ziddi in 4K."
    },
    {
      title: "The care in small things",
      text: "You notice details most people walk past."
    },
    {
      title: "Your stubborn hope",
      text: "It keeps finding a window, even on difficult days. And if the day is heavy, say a little more than 'hmm' so Pratyush knows Ziddi is okay."
    },
    {
      title: "How you become a place",
      text: "Some people feel like a person. Kausiki, you also feel like somewhere to arrive."
    }
  ] satisfies Observation[],

  gallery: [
    {
      src: asset("images/photo-02.jpeg"),
      alt: "Kausiki memory photo",
      caption: "the tiny beginning",
      hasSecretArrow: true,
      secretSrc: asset("images/photo-08.jpeg")
    },
    {
      src: asset("images/photo-03.jpeg"),
      alt: "Kausiki memory photo",
      caption: "a soft blue evening"
    },
    {
      src: asset("images/photo-04.jpeg"),
      alt: "Kausiki memory photo",
      caption: "kept for later"
    },
    {
      src: asset("images/photo-05.jpeg"),
      alt: "Kausiki memory photo",
      caption: "this one feels warm"
    },
    {
      src: asset("images/photo-06.jpg"),
      alt: "Kausiki memory photo",
      caption: "proof of a good day"
    }
  ] satisfies GalleryItem[],

  songs: [
    {
      title: "Dooriyan",
      artist: "For Ziddi",
      file: asset("audio/dooriyan.mp3"),
      cover: asset("images/photo-09.jpeg"),
      note: "This one starts from the part that feels like it was waiting for her.",
      startAtSeconds: 31
    }
  ] satisfies Song[],

  openWhenMessages: [
    {
      title: "Open when you feel low",
      message: "Ziddi, I hope this reminds you that one hard hour is not the whole sky. And if Pratyush asks if you are okay, please do not reply only 'hmm'; that tiny word makes him worry about you."
    },
    {
      title: "Open when you miss me",
      message: "Imagine me saving you a seat in every ordinary moment, Kausiki. Also imagine Pratyush dramatically overthinking one 'hmm', because apparently that is his cardio."
    },
    {
      title: "Open when you cannot sleep",
      message: "Let the world be quiet. You do not have to solve everything tonight. Just send Pratyush a full tiny sentence instead of 'hmm' so he can sleep too."
    },
    {
      title: "Open when you need motivation",
      message: "I am loudly, embarrassingly on your side, Ziddi."
    },
    {
      title: "Open when you are overthinking",
      message: "The gentlest answer is allowed to be true too. If you are quiet, Pratyush will understand; if you write only 'hmm', he will worry about Ziddi instantly."
    },
    {
      title: "Open when today feels special",
      message: "Keep a little piece of this day. It belongs to you, Kausiki. Bonus instruction: no mysterious 'hmm' replies to Pratyush on special days."
    }
  ] satisfies OpenWhenMessage[],

  gift: {
    type: "promise",
    image: asset("images/wish-kausiki.png"),
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
      question: "Which reply makes Pratyush worry about Ziddi way too fast?",
      options: ["A proper sentence", "hmm", "A voice note longer than expected"],
      answerIndex: 1,
      response: "The official universe answer is 'hmm'. Even if you picked something else, the warning still stands."
    },
    {
      question: "Which memory would I replay?",
      options: ["The first laugh", "The quiet almost", "The next one"],
      answerIndex: 2,
      response: "Naturally. The future is very nosy."
    }
  ] satisfies QuizQuestion[],

  finalLetter:
    "Dear Kausiki,\n\nZiddi, I wanted this to feel less like a page and more like opening a drawer full of little proof: that you are noticed, remembered, chosen, and celebrated in ways ordinary words keep failing to hold.\n\nSomewhere between the tiny conversations, the songs, the almosts, and the moments I keep replaying, you became a whole constellation in my life.\n\nOne very small request from Pratyush: please do not reply only 'hmm' when something is wrong. He pretends to be normal, but that one tiny reply makes him worry about Ziddi more than he knows how to say.\n\nSo this is a small universe made for you. It can grow whenever we do.\n\nWith all my unreasonable stars,\nPratyush",

  finalMessage: "Out of every possible timeline,\nI am grateful this one contained you.",

  easterEggs: {
    moon: "Okay, detective. You found the moon's secret.",
    nickname: "You typed the secret name. Of course Ziddi gets a secret note: this whole universe was looking for you. Also, Pratyush has officially requested fewer 'hmm' replies because they make him quietly worry about you.",
    alreadySeen: "You have already seen the universe.\nNow you know why it was made."
  }
};
