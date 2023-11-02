import Carrers from "./components/Carrers";
import Container from "./components/Container/Container";
import MyArticles from "./components/MyArticles";
import ProfileDescription from "./components/ProfileDescription";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="bg-slate-900 w-full h-full">
      <Container className="py-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <ProfileDescription />
            <SocialMedia />
          </div>
          <div className="col-span-5">
            <h3 className="text-blue-200 text-2xl font-semibold mb-3">
              Experiences
            </h3>
            <Carrers />
          </div>

          <div className="col-span-3 bg-blue-950 p-6 overflow-auto">
            <MyArticles />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
