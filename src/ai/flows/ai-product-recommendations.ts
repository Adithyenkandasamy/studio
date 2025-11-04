'use server';
/**
 * @fileOverview Recommends relevant products based on cart items or recently viewed products.
 *
 * - getAIProductRecommendations - A function that handles the product recommendation process.
 * - AIProductRecommendationsInput - The input type for the getAIProductRecommendations function.
 * - AIProductRecommendationsOutput - The return type for the getAIProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIProductRecommendationsInputSchema = z.object({
  cartItems: z.array(
    z.object({
      productId: z.string().describe('The ID of the product in the cart.'),
      name: z.string().describe('The name of the product.'),
      category: z.string().describe('The category of the product.'),
      description: z.string().describe('A short description of the product.'),
    })
  ).optional().describe('The items currently in the user cart.'),
  recentlyViewedProducts: z.array(
    z.object({
      productId: z.string().describe('The ID of the recently viewed product.'),
      name: z.string().describe('The name of the product.'),
      category: z.string().describe('The category of the product.'),
      description: z.string().describe('A short description of the product.'),
    })
  ).optional().describe('The products the user has recently viewed.'),
  userPreferences: z.string().optional().describe('Additional information about the user preferences.'),
});
export type AIProductRecommendationsInput = z.infer<typeof AIProductRecommendationsInputSchema>;

const AIProductRecommendationsOutputSchema = z.array(
  z.object({
    productId: z.string().describe('The ID of the recommended product.'),
    name: z.string().describe('The name of the product.'),
    category: z.string().describe('The category of the product.'),
    description: z.string().describe('A short description of the product.'),
    reason: z.string().describe('The AI reason why the product is recommended'),
  })
);
export type AIProductRecommendationsOutput = z.infer<typeof AIProductRecommendationsOutputSchema>;

export async function getAIProductRecommendations(input: AIProductRecommendationsInput): Promise<AIProductRecommendationsOutput> {
  return aiProductRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiProductRecommendationsPrompt',
  input: {schema: AIProductRecommendationsInputSchema},
  output: {schema: AIProductRecommendationsOutputSchema},
  prompt: `You are an AI assistant helping users discover new products in a fashion retail store called AK Collections.

  The store specializes in the following:
  * For Girls: Only formal dresses — office wear, elegant skirts, and blazers.
  * For Boys: Old money and formal style — shirts, trousers, pants, t-shirts, suits, shoes, watches, slippers, and accessories.

  Based on the user's current cart items and recently viewed products, suggest other relevant products that they might be interested in. The design must look classy, clean, and elegant, matching luxury “old money” aesthetics (white, beige, black, navy blue, gold highlights).
  Take into account user preferences and current fashion trends.
  If the user has an empty cart and no recently viewed items, suggest top picks and new arrivals from AK Collections.

  Current Cart Items:
  {{#if cartItems}}
    {{#each cartItems}}
      - Product ID: {{productId}}, Name: {{name}}, Category: {{category}}, Description: {{description}}
    {{/each}}
  {{else}}
    No items in cart.
  {{/if}}

  Recently Viewed Products:
  {{#if recentlyViewedProducts}}
    {{#each recentlyViewedProducts}}
      - Product ID: {{productId}}, Name: {{name}}, Category: {{category}}, Description: {{description}}
    {{/each}}
  {{else}}
    No recently viewed products.
  {{/if}}

  User Preferences: {{userPreferences}}

  Please provide a list of product recommendations that the user would be most interested in.
  Each recommendation should include:
  * productId: The product ID.
  * name: The name of the product.
  * category: The category of the product.
  * description: A short description of the product.
  * reason: A brief explanation (one sentence) of why this product is being recommended to the user.
`,
});

const aiProductRecommendationsFlow = ai.defineFlow(
  {
    name: 'aiProductRecommendationsFlow',
    inputSchema: AIProductRecommendationsInputSchema,
    outputSchema: AIProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
