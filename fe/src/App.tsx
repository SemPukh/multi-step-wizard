import { FC, Fragment, createContext, useEffect, useState } from 'react';
import { Main } from './pages/Main/Main';
import { Loader } from './components/Loader/Loader';
import { IStore, QuizState } from './interface/common';
import { getAllQuestionsCount } from './api';
import { text } from './utils/constants/text';
import './App.css';

export const Context = createContext<IStore>({} as IStore);

export const App: FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [maxSteps, setMaxSteps] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [quizState, setQuizState] = useState<QuizState>(QuizState.notStarted);

  const getQuestionsCount = async () => {
    setIsLoading(true);

    try {
      const allQuestions = await getAllQuestionsCount();

      setMaxSteps(allQuestions.data);
    } catch (error) {
      setQuizState(QuizState.error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCurrentStepChange = (newStep: number) => {
    if (newStep > maxSteps) {
      setIsLoading(false);
      setQuizState(QuizState.finished);

      return;
    }

    setCurrentStep(newStep);
  };

  const getMainContent = () => {
    switch (quizState) {
      case QuizState.notStarted: {
        return (
          <div className="firstScreen__container">
            <h1>
              {text.quiz.takeTheQuiz} {maxSteps} {text.quiz.questions}
            </h1>

            <button onClick={() => setQuizState(QuizState.inProgress)}>
              {text.buttons.startQuiz}
            </button>
          </div>
        );
      }
      case QuizState.inProgress: {
        return <Main />;
      }
      case QuizState.finished: {
        return <h1>{text.quiz.thankYou}</h1>;
      }
      case QuizState.error: {
        return <h1>{text.errors.api}</h1>;
      }
      default: {
        return <Fragment />;
      }
    }
  };

  useEffect(() => {
    getQuestionsCount();
  }, []);

  return (
    <Context.Provider
      value={{
        currentStep,
        setCurrentStep: handleCurrentStepChange,
        quizState,
        setQuizState,
        isLoading,
        setIsLoading,
        maxSteps,
      }}
    >
      <div className="quiz__container">
        {isLoading && <Loader />}

        {getMainContent()}
      </div>
    </Context.Provider>
  );
};
