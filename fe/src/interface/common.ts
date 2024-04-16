export interface IStore {
  currentStep: number;
  setCurrentStep: (newData: number) => void;
  quizState: QuizState;
  setQuizState: (newData: QuizState) => void;
  isLoading: boolean;
  setIsLoading: (newData: boolean) => void;
  maxSteps: number;
}

export enum QuizState {
  notStarted,
  inProgress,
  finished,
  error,
}

export type AnswerValue = string | number | string[];
