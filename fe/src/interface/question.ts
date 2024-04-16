export interface IQuestion {
  text: string;
  order: number;
  type: QuestionType;
  validationPattern?: string; // Regexp ?
  options: string[];
  _id: string;
}

export type QuestionType = 'input' | 'multiChoice' | 'singleChoice' | 'numeric';
