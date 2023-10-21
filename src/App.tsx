import "./css/main.scss";
import Banner from "./components/app-components/Banner";
import DetailsBlock from "./components/app-components/DetailsBlock";
import PlacesContainer from "./components/app-components/Places-Container";
import Footer from "./components/app-components/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner paragraph="Little paragraph" title="Nomad nation"button={{text: "Read more",onClick: true 
    }}/>
    <DetailsBlock title="About" mainTitle="Stories of Adventure" paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."  image="https://plus.unsplash.com/premium_photo-1668017178979-9e341bfaa464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" />
    <PlacesContainer/>
    <DetailsBlock title="About" mainTitle="Popular adventures" paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."  image="https://plus.unsplash.com/premium_photo-1690522530834-0ddb71e5e41e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
    <Footer />
    </div>
  );
};

export default App;
