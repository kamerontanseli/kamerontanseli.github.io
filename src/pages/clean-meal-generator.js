import Meta from "../components/new/Meta";
import Navigation from "../components/new/Navigation";
import Footer from "../components/Footer";
import { useState } from "react";

function generate() {
  const foods = `Name,Type
bean sprouts,Vegetable
black beans,Vegetable
black-eyed peas,Vegetable
borlotti bean,Vegetable
broad beans,Vegetable
chickpeas,Vegetable
green beans,Vegetable
kidney beans,Vegetable
lentils,Vegetable
lima beans,Vegetable
mung beans,Vegetable
navy beans,Vegetable
peanuts,Vegetable
pinto beans,Vegetable
runner beans,Vegetable
split peas,Vegetable
soy beans,Vegetable
peas,Vegetable
mangetout,Vegetable
artichoke,Vegetable
aubergine,Vegetable
asparagus,Vegetable
broccoli,Vegetable
brussels sprouts,Vegetable
red cabbage,Vegetable
cauliflower,Vegetable
celery,Vegetable
fennel,Vegetable
bok choy,Vegetable
chard,Vegetable
collard greens,Vegetable
kale,Vegetable
spinach,Vegetable
arugula,Vegetable
mushrooms,Vegetable
chives,Vegetable
garlic,Vegetable
leek,Vegetable
onion,Vegetable
shallot,Vegetable
scallion,Vegetable
bell pepper,Vegetable
chili pepper,Vegetable
beetroot,Vegetable
carrot,Vegetable
celeriac,Vegetable
ginger,Vegetable
parsnip,Vegetable
radish,Vegetable
potato,Vegetable
sweet potato,Vegetable
turnip,Vegetable
sweetcorn,Vegetable
butternut squash,Vegetable
marrow ,Vegetable
courgette,Vegetable
tomato,Vegetable
Watercress,Vegetable
Salmon,Protein
Chicken,Protein
Beef,Protein
Tuna,Protein
Greek Yoghurt,Protein
Cottage Cheese,Protein
Eggs,Protein
Turkey,Protein
Prawns,Protein
Pork,Protein
Duck,Protein
Milk,Protein
Tofu,Protein
Lentils,Protein
Cod,Protein
Lamb,Protein
Olive Oil,Fats
Peanuts,Fats
Sesame Seeds,Fats
Almonds,Fats
Pistachio,Fats
Cashews,Fats
Walnuts ,Fats
Avocado,Fats`
    .split("\n")
    .slice(1)
    .map((s) => s.split(","));

  function capitalise(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  const vegetables = foods
    .filter((f) => f[1] === "Vegetable")
    .map((f) => capitalise(f[0]));
  const proteins = foods
    .filter((f) => f[1] === "Protein")
    .map((f) => capitalise(f[0]));
  const fats = foods
    .filter((f) => f[1] === "Fats")
    .map((f) => capitalise(f[0]));

  const settings = {
    vegetables: 3,
    protein: 1,
    fats: 1,
  };

  const meal = {
    vegetables: [],
    proteins: [],
    fats: [],
  };

  for (let i = settings.vegetables; i > 0; i--) {
    const index = Math.floor(Math.random() * vegetables.length);
    meal.vegetables.push(
      vegetables.splice(index, 1)
    );
  }

  for (let i = settings.protein; i > 0; i--) {
    const index = Math.floor(Math.random() * proteins.length)
    meal.proteins.push(proteins.splice(index, 1));
  }

  for (let i = settings.fats; i > 0; i--) {
    const index = Math.floor(Math.random() * fats.length)
    meal.fats.push(fats.splice(index, 1));
  }

  return meal;
}

const Generator = () => {
  const [meal, setMeal] = useState({
    vegetables: [],
    proteins: [],
    fats: [],
  });
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: '2em' }} className="container">
      <div className="intro">
        <h1>Clean Meal Generator</h1>
        <p>
          Click "Generate" below to create a random clean meal fit with 3
          portions of vegetables, 1 protein source, and 1 good fat source. 
          Note: This is to serve as inspiration not as a strict guideline.
        </p>
        <button
          onClick={() => {
            setMeal(generate());
            setShow(true);
          }}
        >
          Generate
        </button>
      </div>
      {show && (
        <div className="result">
          <h3>Vegetables</h3>
          <ul>
            {meal.vegetables.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>

          <h3>Protein</h3>
          <ul>
            {meal.proteins.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>

          <h3>Fats</h3>
          <ul>
            {meal.fats.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      )}
      <style jsx>{`
        .intro {
          margin-bottom: 20px;
        }
        h1 {
          margin-bottom: 0;
        }
        p {
          margin-top: 0;
        }
        h3 {
          margin-bottom: 10px;
        }
        ul {
          margin: 0;
        }
        button {
          padding: 10px 30px;
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

const CleanMealGenerator = () => {
  return (
    <>
      <Meta
        title={`Clean Meal Generator | Randomised dishes to inspire your next meal`}
        description={`Start your year right with randomised healthy meals using the clean meal generator`.trim()}
      />
      <Navigation />
      <Generator />
      <Footer />
      <style jsx>{``}</style>
    </>
  );
};

export default CleanMealGenerator;
