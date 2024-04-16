import { AnswerValue } from '../../interface/common';
import { QuestionType } from '../../interface/question';
import { text } from '../constants/text';

export const validateAnswer = (
  questionDataType: QuestionType,
  value: AnswerValue | undefined,
): string | null => {
  switch (questionDataType) {
    case 'input': {
      if (!(value as string).length) {
        return text.errors.validation.input;
      }

      break;
    }
    case 'multiChoice': {
      if (!(value as string[]).length) {
        return text.errors.validation.multiChoice;
      }

      break;
    }
    case 'singleChoice': {
      if (!(value as string).length) {
        return text.errors.validation.singleChoice;
      }

      break;
    }
    case 'numeric': {
      if (!value) {
        return text.errors.validation.numeric;
      }

      break;
    }
  }

  return null;
};

export const getDefaultAnswerValue = (questionDataType: QuestionType) => {
  switch (questionDataType) {
    case 'input': {
      return '';
    }
    case 'multiChoice': {
      return [];
    }
    case 'singleChoice': {
      return '';
    }
    case 'numeric': {
      return 0;
    }
  }

  return '';
};
