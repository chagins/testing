import { $, browser } from '@wdio/globals';
import Page from './page';

class UserPage extends Page {
  public get loadingTitle() {
    return $('#users-loading');
  }

  public get usersList() {
    return $('#users-list');
  }

  public get usersItems() {
    return browser.react$$('UserItem');
  }

  public async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
      await this.usersList.waitForDisplayed({ timeout: 2000 });
    } catch (err) {
      console.error('Не удалось загрузить пользователей');
      console.error({ err });
    }
  }

  public async deleteUser() {
    try {
      const usersCount = await this.usersItems.length;

      if (!usersCount) {
        throw new Error('Пользователей нет');
      }

      await this.usersItems[0].$('user-delete').click();
      const usersCountAfterDelete = await this.usersItems.length;
      if (usersCountAfterDelete !== usersCount - 1) {
        throw new Error('Пользователь не был удален');
      }
    } catch (err) {
      console.error({ err });
    }
  }

  public open() {
    return super.open('/users-e2e');
  }
}

export default new UserPage();
