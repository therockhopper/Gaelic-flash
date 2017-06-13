export interface Option {
  id: number;
  title: string;
  audioUrl: string;
}

export interface Link {
  title: string;
  url: string;
}

export interface Card {
  title: string;
  value: number;
  answerId: number;
  audioUrl: string;
  imageUrl?: string;
  options: Option[];
  link: Link;
}

export interface FlashCards {
  id: number;
  name: string;
  theme: string;
  backgroundUrl: string;
  cards: Card[];
}

export interface FlashCardResult {
  correct?: boolean;
  correctAnswer?: {};
}



