exports.petstoreMainPage = class petstoreMainPage {

    constructor(page) {
        this.page = page;
        this.btnPost = this.page.locator('id=operations-pet-addPet');
        this.btnGet = this.page.locator('id=operations-pet-getPetById');
        this.btnUpdate = this.page.locator('id=operations-pet-updatePet');
        this.btnDelete = this.page.locator('id=operations-pet-deletePet');
        this.btnTryout = this.page.locator('.btn.try-out__btn');
        this.btnExecute = this.page.locator('.btn.execute.opblock-control__btn');
        this.petIdPlaceHolder = this.page.locator('input[placeholder="petId"]');
        this.textBodyPet = this.page.locator('.body-param__text');
        this.exampleValue = this.page.locator('.microlight').first();
        this.responseBody = this.page.locator('tr.response > td > div > div > .microlight')
        this.contentType = this.page.locator('select.content-type')
      }

      async goto() {
        await this.page.goto('https://petstore3.swagger.io/');
        
      }

      async postPetRequest (pet) {
        await this.goto();
        await this.btnPost.click();
        await this.btnTryout.click();
        const petToString = JSON.stringify(pet);
        await this.textBodyPet.fill(petToString);
        await this.btnExecute.click();
      }

      async getPetRequest (id) {
        await this.goto();
        await this.btnGet.click();
        await this.contentType.selectOption('application/json')
        await this.btnTryout.click();
        await this.petIdPlaceHolder.fill(id)
        await this.btnExecute.click();
      }
    
      async updatePetRequest (pet) {
        await this.goto();
        await this.btnUpdate.click();
        await this.btnTryout.click();
        const petToString = JSON.stringify(pet);
        await this.textBodyPet.fill(petToString);
        await this.btnExecute.click();
      }

      async deletePetRequest (id) {
        await this.goto();
        await this.btnDelete.click();
        await this.btnTryout.click();
        await this.petIdPlaceHolder.fill(id)
        await this.btnExecute.click();
      }
}