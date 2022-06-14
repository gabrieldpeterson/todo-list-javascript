import { domBuilder } from './domBuilder';
import Card from './card';

let cardList = [];

domBuilder.buildSkeleton();

cardList.push(new Card('test1'));
cardList.push(new Card('test2'));

cardList.forEach((card) => card.info());