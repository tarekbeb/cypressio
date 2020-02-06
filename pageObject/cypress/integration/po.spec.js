import BasePage from '../page-objects/BasePage'

describe('BasePage test', ()=>{
    it('Basepage should work', ()=>{
        const basePage = new BasePage()
        basePage.pause(5000)
    })
})