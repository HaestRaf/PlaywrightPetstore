import { commonComponents } from './commonComponents'
import { petstoreMainPage } from '../pages/petstoreMainPage.page.js';

export const deleteRequest = {
btnDelete : 'id=operations-pet-deletePet',

async deletePetRequest (page, id) {
  const petPage = new petstoreMainPage(page);
  await petPage.goto();
  await page.locator(this.btnDelete).click();
  await page.locator(commonComponents.btnTryout).click();
  await page.locator(commonComponents.petIdPlaceHolder).fill(id)
  await page.locator(commonComponents.btnExecute).click();
  }
}