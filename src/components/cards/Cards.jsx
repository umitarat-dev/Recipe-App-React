import { 
  Button,
  Card, 
  Header, 
  Image, 
  MainContainer 
} from './Cards.style';
import defaultImage from '../../assets/default-image.jpg';
import {useNavigate} from 'react-router-dom'; 

const Cards = ({recipes}) => {

  const navigate = useNavigate();

  // const handleViewMore = (url) => {
    // Yeni sekmede açmak için window.open <kullanabiliriz 

  return (
    <MainContainer wrap="wrap">

      {/* {recipes.map((recipe, index) => (
        <Card>
          <Header>{recipe.recipe.label}</Header>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
        </Card>
      ))} */}

      {recipes.map(({recipe}, index) => ( // Destructuring ile direkt recipe objesine ulaşıyoruz.
        <Card key={index}>
          <Header>{recipe.label}</Header>
          <Image src={recipe.image || defaultImage}/>
          
          <Button 
            // replace: true ile history silinebilir.
            onClick={()=> navigate('detail', {state: recipe, replace: false})}
          >
            View More
          </Button>
        
        </Card>
      ))}

      
    </MainContainer>
  )
}

export default Cards