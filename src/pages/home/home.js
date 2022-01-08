import Carousel from '../../components/card/Carousel';
import Style from "./style.css";
import Video from '../../components/card/Video';
import h from "hyperscript"
import helper from 'hyperscript-helpers';

const { div } = helper(h);

const Home = div({ className: Style.container },[
  Carousel,
  Video
])

export default Home;