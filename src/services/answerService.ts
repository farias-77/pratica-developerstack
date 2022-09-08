import * as answerRepositories from "../repositories/answerRepository";
import { TAnswers } from "../types/answerTypes";

export async function createAnswer(questionId: number, answer: TAnswers){
    return await answerRepositories.createAnswer(questionId, answer);
}

export async function getAnswersByQuetionId(questionId: number){
    const answers = await answerRepositories.getAnswersByQuetionId(questionId);
    const treatedAnsw: TAnswers[] = answers.map(answ => {
        return {answer: answ.answer, answeredBy: answ.answeredBy }
    })

    return treatedAnsw;
}