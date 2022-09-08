import { Questions } from "@prisma/client";

export type TQuestion = Omit<Questions, 'id'>