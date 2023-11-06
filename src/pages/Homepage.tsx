import React from "react";
import Carrers from "../components/Carrers";
import Footer from "../components/Footer";
import MyArticles from "../components/MyArticles";
import ProfileDescription from "../components/ProfileDescription";
import Projects from "../components/Projects";
import Container from "../components/Reusable/Container";
import Divider from "../components/Reusable/Divider";
import SocialMedia from "../components/SocialMedia";

function Homepage() {
  return (
    <React.Fragment>
      <div className="bg-slate-900 w-full h-full">
        <Container className="py-12 px-4 lg:px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-12">
                <ProfileDescription />
                <SocialMedia />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <Carrers />

              <Divider className="my-12" />

              <Projects />
            </div>

            <div className="col-span-12 lg:col-span-3">
              <MyArticles />
            </div>
          </div>

          <Footer />
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Homepage;
