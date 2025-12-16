import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return <div className="text-red-100">app</div>;
};

export default App;
