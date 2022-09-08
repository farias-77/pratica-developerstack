import { prisma } from "../config/database";
import { TAnswers } from "../types/answerTypes";

export async function createAnswer(questionId: number, answer: TAnswers){
    const answerBody = {
        ...answer,
        questionId
    }
    
    return await prisma.answers.create({
        data: answerBody
    })
}

export async function getAnswersByQuetionId(questionId: number){
    return await prisma.answers.findMany({
        where:{
            questionId
        }
    })
}