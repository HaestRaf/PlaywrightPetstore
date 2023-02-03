import { commonComponents} from './commonComponents'
import { petstoreMainPage } from '../pages/petstoreMainPage.page.js';

export const postRequest = {
btnPost : 'id=operations-pet-addPet',

async postPetRequest (page, pet) {
  const petPage = new petstoreMainPage(page);
  await petPage.goto();
  await page.locator(this.btnPost).click();
  await page.locator(commonComponents.btnTryout).click();
  const petToString = JSON.stringify(pet);
  await page.locator(commonComponents.textBodyPet).fill(petToString);
  await page.locator(commonComponents.btnExecute).click();
  }
}
