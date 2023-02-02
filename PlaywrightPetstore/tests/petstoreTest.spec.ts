// @ts-check
import pet from '../fixtures/pet.json'
import { expect, test } from '@playwright/test';
import { petstoreMainPage } from '../pages/petstoreMainPage.page.js';

/* test.beforeEach(async ({ request }) => {
  const response = await request.post('https://petstore3.swagger.io/api/v3/pet', {
  data: pet.pet1
  })
})
 */

test.beforeEach( async ({ page }) => {
  await page.route('https://petstore3.swagger.io/api/v3/pet', (route) => route.fulfill({
    status: 200,
    body: JSON.stringify([pet.pet1])
  })
)})


test('GET request', async ({ page }) => {
  const petPage = new petstoreMainPage(page);
  await petPage.getPetRequest(JSON.stringify(pet.pet1.id));
  await expect(petPage.responseBody).toContainText(JSON.stringify(pet.pet1.name));
});

test('PUT request', async ({ page }) => {
  const petPage = new petstoreMainPage(page);
  await petPage.updatePetRequest(pet.pet2);
  await expect(petPage.exampleValue).toContainText(JSON.stringify(pet.pet2));
}); 
 
test('DELETE request', async ({ page }) => {
  const petPage = new petstoreMainPage(page);
  await petPage.deletePetRequest(JSON.stringify(pet.pet1.id));
  await expect(petPage.responseBody).toContainText('Pet deleted');
});    
