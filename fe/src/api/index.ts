import { IAnswerData } from '../interface/answer';
import { IQuestion } from '../interface/question';
import { axiosInstance } from './axiosInstance';

export const getAllQuestionsCount = async () =>
  await axiosInstance.get<number>('questions/count');

export const getOneQuestion = async (questionOrderId: number) =>
  await axiosInstance.get<IQuestion>(`questions/${questionOrderId}`);

export const saveOneQuestion = async (answerData: IAnswerData) =>
  await axiosInstance.post('answers', answerData);
