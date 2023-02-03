import { commonComponents } from './commonComponents'
import { petstoreMainPage } from '../pages/petstoreMainPage.page.js';

export const updateRequest = {
btnUpdate : 'id=operations-pet-updatePet',

async updatePetRequest (page, pet) {
  const petPage = new petstoreMainPage(page);
  await petPage.goto();
  await page.locator(this.btnUpdate).click();
  await page.locator(commonComponents.btnTryout).click();
  const petToString = JSON.stringify(pet);
  await page.locator(commonComponents.textBodyPet).fill(petToString);
  await page.locator(commonComponents.btnExecute).click();
  }
}