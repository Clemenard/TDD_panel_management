describe("Arduino", function () {
    describe("Navbar", function () {
        var Navbar = require('../../Navbar.js');
        beforeEach(function () {
            navbar = new Navbar();
        });

        it("should open a modal when click on save", function () {
            spyOn(navbar, 'openModal');
            navbar.clickOnSave()
            expect(navbar.openModal).toHaveBeenCalled();
        });
        it("should open the save modal when click on save", function () {
            navbar.clickOnSave()
            let modal = navbar.openModal("save")
            expect(modal).toEqual("save");
        });
        it("should close the current modal when click on close", function () {
            spyOn(navbar, 'closeModal');
            navbar.clickOnClose()
            expect(navbar.closeModal).toHaveBeenCalled();
        });
        it("should close the current modal when click on close", function () {
            navbar.clickOnClose()
            let modal = navbar.clickOnClose()
            expect(modal).toBeTruthy();
        });
    })
})