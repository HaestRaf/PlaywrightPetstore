// @ts-check
import pet from '../fixtures/pet.json'
import { expect,  test } from '@playwright/test';
import { petstoreMainPage } from '../pages/petstoreMainPage.page.js';


 test('POST request', async ({ page }) => {
  const petPage = new petstoreMainPage(page);
  await petPage.postPet(pet.pet1);
  await expect(petPage.exampleValue).toContainText(JSON.stringify(pet.pet1));
}); 

test('GET request', async ({ page }) => {
  const petPage = new petstoreMainPage(page);
  await petPage.getPet(JSON.stringify(pet.pet1.id));
  await expect(petPage.responseBody).toContainText(JSON.stringify(pet.pet1.name));
});

test('PUT request', async ({ page }) => {
  const petPage = new petstoreMainPage(page);
  await petPage.updatePet(pet.pet2);
  await expect(petPage.exampleValue).toContainText(JSON.stringify(pet.pet2));
});
 
test('DELETE request', async ({ page }) => {
  const petPage = new petstoreMainPage(page);
  await petPage.deletePet(JSON.stringify(pet.pet2.id));
  await expect(petPage.responseBody).toContainText('Pet deleted');
});  
