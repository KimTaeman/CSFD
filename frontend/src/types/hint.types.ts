export type GuessState = 'n/a' | 'success' | 'fail';

export interface HintSet {
  hints: string[];
  editing: boolean;
  draft: string[];
}
