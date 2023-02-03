import { commonComponents } from './commonComponents.js'
import { petstoreMainPage } from '../pages/petstoreMainPage.page.js';

export const getRequest = {
btnGet : 'id=operations-pet-getPetById',

async getPetRequest (page, id) {    
  const petPage = new petstoreMainPage(page);
  await petPage.goto();
  await page.locator(this.btnGet).click();
  await page.locator(commonComponents.contentType).selectOption('application/json');
  await page.locator(commonComponents.btnTryout).click();
  await page.locator(commonComponents.petIdPlaceHolder).fill(id)
  await page.locator(commonComponents.btnExecute).click();
  }
}