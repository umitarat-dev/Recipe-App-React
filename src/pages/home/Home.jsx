import { 
  // useEffect, 
  useState 
} from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import { HeaderText, HomeImg, ImgDiv } from "./Home.style";
import homeSvg from '../../assets/home.svg';


const Home = () => {

  const mealType = ['Breakfast', 'Launch', 'Dinner', 'Snack']
  const [query, setQuery] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  // const [recipes, setRecipes] = useState('');
  const [recipes, setRecipes] = useState(null);

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;
  const EDAMAM_ACCOUNT_USER = process.env.REACT_APP_EDAMAM_ACCOUNT_USER;

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (!query) { // Boş arama/veri çekme yapılmasını engelle.
      alert('Please enter a food item');
      return; 
    }
    try {
      const {data} = await axios.get(url, {
        headers: {
        "Edamam-Account-User": EDAMAM_ACCOUNT_USER
      }
    }) 
    // console.log(data.hits);
    setRecipes(data.hits);

    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => { // Test amaçlı, ilk yüklenmede veri gelsin diye açtık.
  //   getData();
  // }, []);

  // console.log(recipes);

  return (
    <div>
      <Header 
        setQuery={setQuery} 
        setSelectedMeal={setSelectedMeal} 
        mealType={mealType}
        getData={getData} // Veriyi çekme fonksiyonunu Header'a prop olarak geçiyoruz.
      />

      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg}/>
        </ImgDiv>)
      }
      
      {recipes?.length === 0 && ( // Optional chaining ile recipes null ise hata verme.
        <HeaderText>
          No recipes found. Please try again.
        </HeaderText>)
      }
      
      {/* {recipes.length === 0 && (
        <HeaderText>
          No recipes found. Please try again.
        </HeaderText>)
      } */}
      
      {recipes?.length > 0 && <Cards recipes={recipes} />}

    </div>
  );
};

export default Home;
