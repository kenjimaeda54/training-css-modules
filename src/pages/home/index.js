import h from "hyperscript";
import helper from "hyperscript-helpers";
import { card1, card2 } from './style.css';
import Bob1 from '../../assets/bob.jpeg';
import Bob2 from "../../assets/bob2.jpg";

const { div,img  } = helper(h);

const bob1 = img({src:Bob1});
const bob2 = img({src:Bob2});

const Card = div({ className: card1 },[
  bob1,
  bob2,
]);


export default Card;