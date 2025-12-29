import React from 'react'
import {categoryImage} from './categoryFullInfos'
import CategoryCard from './CategoryCard'
import Classes from "./Category.module.css"
function Category() {
  return (
    <section className={Classes.category_container}>
        {
            categoryImage.map((infos) => (
                <CategoryCard data = {infos} />
            ))
        }
      
    </section>
  )
}

export default Category
