import { commonPage} from '../components/commonPage.js'
import { petstoreMainPage } from '../pages/petstoreMainPage.page.js';

export const postRequest = {
btnPost : 'id=operations-pet-addPet',

async postPetRequest (page, pet) {
  const petPage = new petstoreMainPage(page);
  await petPage.goto();
  await page.locator(this.btnPost).click();
  await page.locator(commonPage.btnTryout).click();
  const petToString = JSON.stringify(pet);
  await page.locator(commonPage.textBodyPet).fill(petToString);
  await page.locator(commonPage.btnExecute).click();
  }
}
