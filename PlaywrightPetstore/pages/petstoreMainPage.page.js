exports.petstoreMainPage = class petstoreMainPage {

    constructor(page) {
        this.page = page;
      }

      async goto() {
        await this.page.goto('https://petstore3.swagger.io/');     
      }
}