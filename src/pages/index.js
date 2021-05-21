import Meta from "../components/new/Meta";
import Bio from "../components/Bio";
import Navigation from "../components/new/Navigation";

const Index = () => {
  return (
    <>
      <Meta
        title={`Kameron Tanseli | Growth Engineer`}
        description={`
        Kameron Tanseli's Blog. Kameron is a Senior Growth Engineer at Qatalog ($18m+).
        `.trim()}
      />
      <Navigation />
      <Bio />
    </>
  );
};

export default Index;
