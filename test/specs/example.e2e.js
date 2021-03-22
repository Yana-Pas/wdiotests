import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('ianapastukhova22@gmail.com');
        LoginPage.setPassword('Azazel22#');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();

    });
});


