import { 
  Button,
  FoodInput, 
  FormContainer, 
  HeaderContainer, 
  MainHeader,
  Select,
} from './Header.style'

const Header = ({ setQuery, setSelectedMeal, mealType, getData }) => {
  
  const handlSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer onSubmit={handlSubmit}>
        <FoodInput 
          type='text'
          placeholder='search'
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type='submit'>SEARCH</Button>
        <Select 
          name='mealType'
          id='mealType'
          onChange={(e)=>setSelectedMeal(e.target.value)}
        >
          {mealType.map((item, index) => (
            <option key={index} value={item.toLowerCase()} style={{ textAlign: 'center'  }}>
              {item}
            </option>
          ))}
        </Select>
      </FormContainer>
    </HeaderContainer>
  )
}

export default Header