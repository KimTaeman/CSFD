export type GuessState = 'n/a' | 'success' | 'fail';

export interface Hint {
  id: string;
  order: number;
  content: string;
  revealDate: Date;
}
