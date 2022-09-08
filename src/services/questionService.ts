import * as questionRepository from "../repositories/questionRepository"
import { TQuestion } from "../types/questionTypes";

export async function getAllQuestions(){
    const questions = await questionRepository.getQuestions();

    return questions;
}

export async function getQuestionById(questionId: number){
    const question = await questionRepository.getQuestionById(questionId);

    return question; 
}

export async function createQuestion(question: TQuestion){
    return await questionRepository.insertQuestion(question);
}

