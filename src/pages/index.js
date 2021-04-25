import Meta from "../components/new/Meta";
import Bio from "../components/Bio";

const Index = () => {
  return (
    <>
      <Meta
        title={`Kameron Tanseli | Growth Engineer`}
        description={`
        Kameron Tanseli's Blog. Kameron is a Senior Growth Engineer at Qatalog ($18m+), 
        investor (getchip.uk, getcoconut.com), and IndieHacker (293 upvotes and counting).
        `.trim()}
      />
      <Bio />
    </>
  );
};

export default Index;
