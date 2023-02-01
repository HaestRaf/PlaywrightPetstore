exports.petstoreMainPage = class petstoreMainPage {

    constructor(page) {
        this.page = page;
        this.postBtn = this.page.locator('id=operations-pet-addPet');
        this.getBtn = this.page.locator('id=operations-pet-getPetById');
        this.updateBtn = this.page.locator('id=operations-pet-updatePet');
        this.deleteBtn = this.page.locator('id=operations-pet-deletePet');
        this.tryoutBtn = this.page.locator('.btn.try-out__btn');
        this.executeBtn = this.page.locator('.btn.execute.opblock-control__btn');
        this.placeholderPetId = this.page.locator('input[placeholder="petId"]');
        this.petTextbody = this.page.locator('.body-param__text');
        this.exampleValue = this.page.locator('.microlight').first();
        this.responseBody = this.page.locator('tr.response > td > div > div > .microlight')
      }

      async goto() {
        await this.page.goto('https://petstore3.swagger.io/');
      }

      async postPet (pet) {
        await this.goto();
        await this.postBtn.click();
        await this.tryoutBtn.click();
        const petToString = JSON.stringify(pet);
        await this.petTextbody.fill(petToString);
        await this.executeBtn.click();
      }

      async getPet (id) {
        await this.goto();
        await this.getBtn.click();
        await this.page.locator('select.content-type').selectOption('application/json')
        await this.tryoutBtn.click();
        await this.placeholderPetId.fill(id)
        await this.executeBtn.click();
      }
    
      async updatePet (pet) {
        await this.goto();
        await this.updateBtn.click();
        await this.tryoutBtn.click();
        const petToString = JSON.stringify(pet);
        await this.petTextbody.fill(petToString);
        await this.executeBtn.click();
      }

      async deletePet (id) {
        await this.goto();
        await this.deleteBtn.click();
        await this.tryoutBtn.click();
        await this.placeholderPetId.fill(id)
        await this.executeBtn.click();
      }
}