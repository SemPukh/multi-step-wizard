import { FC, Fragment, useContext, useEffect, useState } from 'react';
import { Input } from '../../components/Input/Input';
import { CheckboxGroup } from '../../components/CheckboxGroup/CheckboxGroup';
import { RadioGroup } from '../../components/RadioGroup/RadioGroup';
import { Context } from '../../App';
import { getOneQuestion, saveOneQuestion } from '../../api';
import { IQuestion } from '../../interface/question';
import { AnswerValue, QuizState } from '../../interface/common';
import { text } from '../../utils/constants/text';
import {
  getDefaultAnswerValue,
  validateAnswer,
} from '../../utils/helpers/answers';
import './style.css';

export const Main: FC = () => {
  const {
    currentStep,
    setQuizState,
    isLoading,
    setIsLoading,
    setCurrentStep,
    maxSteps,
  } = useContext(Context);

  const [answer, setAnswer] = useState<AnswerValue>('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>(
    {} as IQuestion,
  );

  const getQuestion = async () => {
    setIsLoading(true);

    try {
      const question = await getOneQuestion(currentStep);

      const newAnswerDefaultValue = getDefaultAnswerValue(question.data.type);
      setCurrentQuestion(question.data);
      setAnswer(newAnswerDefaultValue);
    } catch (error) {
      setQuizState(QuizState.error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveAnswer = async () => {
    setIsLoading(true);

    try {
      await saveOneQuestion({
        text: Array.isArray(answer) ? answer.join(', ') : answer.toString(),
        questionId: currentQuestion._id,
      });

      setCurrentStep(currentStep + 1);
    } catch (error) {
      setQuizState(QuizState.error);
    } finally {
      setIsLoading(false);
    }
  };

  const onNextStepClick = () => {
    const validationError = validateAnswer(currentQuestion.type, answer);
    setValidationError(validationError);

    if (validationError) {
      return;
    }

    saveAnswer();
  };

  const handleAnswerChange = (newValue: AnswerValue) => {
    setAnswer(newValue);
    setValidationError(null);
  };

  const getComponentFromType = (questionData: IQuestion) => {
    switch (questionData.type) {
      case 'input': {
        return (
          <Input
            value={answer as string}
            onChange={handleAnswerChange}
          />
        );
      }
      case 'multiChoice': {
        return (
          <CheckboxGroup
            value={answer as string[]}
            onChange={handleAnswerChange}
            options={currentQuestion.options}
          />
        );
      }
      case 'singleChoice': {
        return (
          <RadioGroup
            value={answer as string}
            onChange={handleAnswerChange}
            options={currentQuestion.options}
          />
        );
      }
      case 'numeric': {
        return (
          <Input
            value={answer as string}
            onChange={handleAnswerChange}
            type="number"
          />
        );
      }
      default: {
        return <Fragment />;
      }
    }
  };

  useEffect(() => {
    getQuestion();
  }, [currentStep]);

  return (
    <>
      <h1>{currentQuestion?.text}</h1>

      {getComponentFromType(currentQuestion)}

      {validationError && (
        <p className="validationError__text">{validationError}</p>
      )}

      <div className="stepper__container">
        <p>
          {currentStep}/{maxSteps}
        </p>

        <button
          disabled={isLoading}
          onClick={onNextStepClick}
        >
          {text.buttons.nextQuestion}
        </button>
      </div>
    </>
  );
};
