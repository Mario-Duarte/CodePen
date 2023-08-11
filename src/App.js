import { Avatar } from "./Components/Avatar";
import { Bio } from "./Components/Bio";
import { Featured } from "./Components/Featured";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Pens } from "./Components/Pens";
import { links } from "./Constants/links";
import { FaLinkedin, FaInstagramSquare, FaBehance, FaDribbble } from "react-icons/fa";


function App() {

  const mainLinks = [
    {
      label: "MarioDesigns",
      url: links.website,
    },
    {
      label: "Github",
      url: links.github,
    }
  ];

  const secondaryLinks = [
    {
      label: <FaLinkedin />,
      url: links.linkedin
    },
    {
      label: <FaInstagramSquare />,
      url: links.instagram
    },
    {
      label: <FaBehance />,
      url: links.behance
    }, {
      label: <FaDribbble />,
      url: links.dribble
    }
  ];

  return (
    <div className="App">
      <Featured/>
      <Header
        links={mainLinks}
        avatar={<Avatar />}
        secondaryLinks={secondaryLinks}
      />
      <Bio/>
      <Pens/>
      <Footer/>
    </div>
  );
}

export default App;
