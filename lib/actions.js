'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

function _isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function shareMeal(_preState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    _isInvalidText(meal.title) ||
    _isInvalidText(meal.summary) ||
    _isInvalidText(meal.instructions) ||
    _isInvalidText(meal.creator) ||
    _isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  const result = await saveMeal(meal);
  if (result?.error) {
    return { message: result.message };
  }

  revalidatePath('/meals');
  redirect('/meals');
}
