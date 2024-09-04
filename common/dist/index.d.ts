import { z } from "zod";
export declare const signunInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    name?: string | undefined;
}, {
    username: string;
    password: string;
    name?: string | undefined;
}>;
export declare const signinInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export declare const createBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    imageUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    imageUrl: string;
}, {
    title: string;
    content: string;
    imageUrl: string;
}>;
export declare const updateBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    id: number;
}, {
    title: string;
    content: string;
    id: number;
}>;
export type SigninInput = z.infer<typeof signinInput>;
export type SignunInput = z.infer<typeof signunInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
