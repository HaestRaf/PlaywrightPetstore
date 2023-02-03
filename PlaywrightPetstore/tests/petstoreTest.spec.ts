// @ts-check
import pet from '../fixtures/pet.json'
import { expect, test } from '@playwright/test';
import { getRequest } from '../components/getRequest.js';
import { commonComponents } from '../components/commonComponents';
import { responseObj } from '../fixtures/responseObj.js';
import { postRequest } from '../components/postRequest.js';
import { updateRequest } from '../components/updateRequest.js';
import { deleteRequest } from '../components/deleteRequest.js';

test('POST request', async({ page }) => {
  await postRequest.postPetRequest(page, pet.pet1);
  await expect(page.locator(commonComponents.exampleValue).first()).toContainText(JSON.stringify(pet.pet1));
})

test('GET request', async ({ page }) => {
  await page.route('**/api/v3/pet/12', async (route) => {
    await route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify(responseObj)
    })
  })
  await getRequest.getPetRequest(page, JSON.stringify(pet.pet1.id));
  await expect(page.locator(commonComponents.responseBody)).toContainText(JSON.stringify(pet.pet1.name));
});

test('PUT request', async ({ page }) => {
  await page.route('**/api/v3/pet/12', async (route) => {
    await route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify(responseObj)
    })
  })
  await updateRequest.updatePetRequest(page, pet.pet2);
  await expect(page.locator(commonComponents.exampleValue).first()).toContainText(JSON.stringify(pet.pet2));
}); 
 
test('DELETE request', async ({ page, request }) => {
  await request.post('https://petstore3.swagger.io/api/v3/pet', {
    data: pet.pet1
  })
  await deleteRequest.deletePetRequest(page, JSON.stringify(pet.pet1.id));
  await expect(page.locator(commonComponents.responseBody)).toContainText('Pet deleted');
});    