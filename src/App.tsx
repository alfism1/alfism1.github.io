import Carrers from "./components/Carrers";
import Container from "./components/Reusable/Container";
import MyArticles from "./components/MyArticles";
import ProfileDescription from "./components/ProfileDescription";
import SocialMedia from "./components/SocialMedia";
import Divider from "./components/Reusable/Divider";
import Projects from "./components/Projects";
// import { useEffect, useState } from "react";

function App() {
  // const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const inputDialog = prompt("Enter password");

  //   if (inputDialog === "alfi") {
  //     setOpen(true);
  //   }
  // }, []);

  // if (!open) {
  //   return <>Under construction</>;
  // }

  return (
    <div className="bg-slate-900 w-full h-full">
      <Container className="py-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <div className="sticky top-12">
              <ProfileDescription />
              <SocialMedia />
            </div>
          </div>
          <div className="col-span-5">
            <Carrers />

            <Divider className="my-12" />

            <Projects />
          </div>

          <div className="col-span-3">
            <MyArticles />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
