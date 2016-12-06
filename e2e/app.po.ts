import { browser, element, by } from 'protractor';

export class ReadingsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app h1')).getText();
  }
}
