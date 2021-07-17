import { CompositeDisposable } from 'atom';
import Logger from './log';
import Hash from './hash';

export default {
  subscriptions: new CompositeDisposable(),

  activate(): void {
    Logger.log('Activating package');
  },

  deactivate(): void {
    Logger.log('Deactivating package');
    this.subscriptions?.dispose();
  },

  provideHash(): unknown {
    Logger.log('Providing service');

    return Hash;
  }
};
