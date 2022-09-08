import { Answers } from "@prisma/client";

export type TAnswers = Omit<Answers, 'id' | 'questionId'>