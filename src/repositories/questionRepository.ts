import { prisma } from "../config/database";
import { TQuestion } from "../types/questionTypes";

export async function getQuestions(){
    return await prisma.questions.findMany();
}

export async function getQuestionById(questionId: number){
    return await prisma.questions.findUnique({where: {id: questionId}});
}

export async function insertQuestion(question: TQuestion){
    return await prisma.questions.create({data: question});
}