'use server';

/**
 * @fileOverview This file defines a Genkit flow for an AI chatbot that answers user questions.
 *
 * The flow takes a user's question as input and returns the AI's response.
 * It uses the Google Gemini API to generate the response.
 *
 * @exports askAiChatbot - The main function to call to ask the AI chatbot a question.
 * @exports AskAiChatbotInput - The input type for the askAiChatbot function.
 * @exports AskAiChatbotOutput - The output type for the askAiChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema
const AskAiChatbotInputSchema = z.object({
  question: z.string().describe('The question to ask the AI chatbot.'),
});
export type AskAiChatbotInput = z.infer<typeof AskAiChatbotInputSchema>;

// Define the output schema
const AskAiChatbotOutputSchema = z.object({
  answer: z.string().describe('The AI chatbot\'s answer to the question.'),
});
export type AskAiChatbotOutput = z.infer<typeof AskAiChatbotOutputSchema>;

// Define the prompt
const askAiChatbotPrompt = ai.definePrompt({
  name: 'askAiChatbotPrompt',
  input: {schema: AskAiChatbotInputSchema},
  output: {schema: AskAiChatbotOutputSchema},
  prompt: `You are a helpful AI assistant. Answer the following question: {{{question}}}`,
});

// Define the flow
const askAiChatbotFlow = ai.defineFlow(
  {
    name: 'askAiChatbotFlow',
    inputSchema: AskAiChatbotInputSchema,
    outputSchema: AskAiChatbotOutputSchema,
  },
  async input => {
    const {output} = await askAiChatbotPrompt(input);
    return output!;
  }
);

/**
 * Asks the AI chatbot a question and returns the answer.
 * @param input - The input object containing the question.
 * @returns The output object containing the AI's answer.
 */
export async function askAiChatbot(input: AskAiChatbotInput): Promise<AskAiChatbotOutput> {
  return askAiChatbotFlow(input);
}
