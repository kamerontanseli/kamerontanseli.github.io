import Bio from "../components/Bio";
import Navigation from "../components/new/Navigation";
import SEO from "../components/new/Seo";

const Index = () => {
  return (
    <>
      <SEO title={`Kameron Tanseli | Growth Engineer`} />
      <Navigation />
      <Bio />
    </>
  );
};

export default Index;
