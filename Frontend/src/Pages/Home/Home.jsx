import React,{useState} from 'react'
import './Home.css'
import AppDownload from '../../components/AppDownload/AppDownload'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

  const [category, setCategory] = useState("All");
  return (
    <div>
       <Header/>
       <ExploreMenu  category={category} setCategory={setCategory}/>
        <FoodDisplay  category={category} />
        <AppDownload/>
    </div>
  )
}

export default Home