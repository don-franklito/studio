'use server';

/**
 * @fileOverview A resume enhancement AI agent.
 *
 * - enhanceResumeWithAI - A function that enhances a resume based on a job description.
 * - EnhanceResumeWithAIInput - The input type for the enhanceResumeWithAI function.
 * - EnhanceResumeWithAIOutput - The return type for the enhanceResumeWithAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceResumeWithAIInputSchema = z.object({
  resume: z
    .string()
    .describe('The user\'s resume as plain text.'),
  jobDescription: z.string().describe('The job description as plain text.'),
});
export type EnhanceResumeWithAIInput = z.infer<typeof EnhanceResumeWithAIInputSchema>;

const EnhanceResumeWithAIOutputSchema = z.object({
  enhancedResume: z.string().describe('The enhanced resume with tailored adjustments.'),
});
export type EnhanceResumeWithAIOutput = z.infer<typeof EnhanceResumeWithAIOutputSchema>;

export async function enhanceResumeWithAI(input: EnhanceResumeWithAIInput): Promise<EnhanceResumeWithAIOutput> {
  return enhanceResumeWithAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceResumeWithAIPrompt',
  input: {schema: EnhanceResumeWithAIInputSchema},
  output: {schema: EnhanceResumeWithAIOutputSchema},
  prompt: `You are an expert career advisor specializing in resume optimization.

You will be provided with a resume and a job description. Your task is to compare the two documents and suggest tailored adjustments to the resume to better match the job requirements.

Resume:
{{resume}}

Job Description:
{{jobDescription}}

Provide an enhanced version of the resume with specific improvements and suggestions to align it with the job description. Focus on highlighting relevant skills and experience, and rephrasing sections for better impact.
`,
});

const enhanceResumeWithAIFlow = ai.defineFlow(
  {
    name: 'enhanceResumeWithAIFlow',
    inputSchema: EnhanceResumeWithAIInputSchema,
    outputSchema: EnhanceResumeWithAIOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
