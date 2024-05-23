import { generalConfig } from './config';
import { shuffle } from './utils/shuffle';
import { readWallets } from './utils/wallet';

let privateKeys = readWallets('./keys.txt');

if (generalConfig.shuffleWallets) {
  shuffle(privateKeys);
}
