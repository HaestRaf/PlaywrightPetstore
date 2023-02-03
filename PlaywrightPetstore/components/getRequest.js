import { commonPage } from './commonPage.js'
import { petstoreMainPage } from '../pages/petstoreMainPage.page.js';

export const getRequest = {
btnGet : 'id=operations-pet-getPetById',

async getPetRequest (page, id) {    
  const petPage = new petstoreMainPage(page);
  await petPage.goto();
  await page.locator(this.btnGet).click();
  await page.locator(commonPage.contentType).selectOption('application/json');
  await page.locator(commonPage.btnTryout).click();
  await page.locator(commonPage.petIdPlaceHolder).fill(id)
  await page.locator(commonPage.btnExecute).click();
  }
}