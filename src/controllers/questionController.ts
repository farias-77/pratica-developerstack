import * as questionServices from "../services/questionService"
import * as answerServices from "../services/answerService";
import { TQuestion } from '../types/questionTypes';
import { TAnswers } from '../types/answerTypes';
import { Request, Response } from 'express';

export async function createQuestion(req: Request, res: Response) {
  const questionBody: TQuestion = req.body;

  await questionServices.createQuestion(questionBody);

  return res.status(200).send("Pergunta criada.");
}

export async function createAnswer(req: Request, res: Response) {
  const answerBody: TAnswers = req.body;
  const questionId:number = Number(req.params.id);

  await answerServices.createAnswer(questionId, answerBody);

  return res.status(200).send("Reposta criada com sucesso.");
}

export async function get(req: Request, res: Response) {
  const questions = await questionServices.getAllQuestions();

  return res.status(200).send({questions});
}

export async function getById(req: Request, res: Response) {
  const questionId:number = Number(req.params.id);

  const question = await questionServices.getQuestionById(questionId);
  const answers: TAnswers[] = await answerServices.getAnswersByQuetionId(questionId);
  const functionReturn = {...question, answers}

  return res.status(200).send(functionReturn);
}
