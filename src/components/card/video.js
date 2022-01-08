import h from "hyperscript";
import helper from "hyperscript-helpers";
import { cardLeft,cardAvatar,containerIcons,containerProfileFooter,headerFooter,cardFooter, } from './style.css';
import Bob1 from '../../assets/bob.jpeg';
import Bob2 from "../../assets/bob2.jpg";
import Like from "../../assets/like.png";
import Dislike from "../../assets/dislike.png";
import Message from "../../assets/message.png";
import global from "../../global/card.css"

const { section,img,h3,p,div  } = helper(h);

const bob1 = img({src:Bob1, width: 300, height: 150});
const comment = img({src:Message});
const like =  img({src:Like});
const dislike = img({src:Dislike});
const name =  h3("Luiza Maria");
const avatar = img({src:Bob2, className:cardAvatar});  
const wrapIcons = div({className:containerIcons},[like,dislike,comment]);
const containerProfile = div({className:containerProfileFooter},[avatar,name]);
const topFooter = div({className: headerFooter},[containerProfile,wrapIcons]);
const description = p("Eu gostei muito dessa foto,eu dei like, aonde consigo dar mais likes?Eu gostei muito dessa foto,eu dei like, aonde consigo dar mais likes?Eu gostei muito dessa foto,eu dei like, aonde consigo dar mais likes?");
const footer = div({className: cardFooter},[topFooter,description]);


//card e uma classe global
//vantagem que consigo reaproveitar o css
//se olhar no inspetor estou com essa classe com nomes normais
const Card = section({ className: "card" },[
  bob1,
  footer,
]);


export default Card;