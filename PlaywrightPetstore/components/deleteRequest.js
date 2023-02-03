import { commonPage } from '../components/commonPage'
import { petstoreMainPage } from '../pages/petstoreMainPage.page.js';

export const deleteRequest = {
btnDelete : 'id=operations-pet-deletePet',

async deletePetRequest (page, id) {
  const petPage = new petstoreMainPage(page);
  await petPage.goto();
  await page.locator(this.btnDelete).click();
  await page.locator(commonPage.btnTryout).click();
  await page.locator(commonPage.petIdPlaceHolder).fill(id)
  await page.locator(commonPage.btnExecute).click();
  }
}