import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeCard.module.scss'


const RecipeCard = ({name, createdBy, country, img, id}) => {

    console.log(id)
  return (
    <Link to={`${id}`}>
        <div className={styles.recipeCard}>
            <div className={styles.recipeImgDiv}>
                <img alt='' className={styles.recipeImg} src={img} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
                <p>{country}</p>
                <p>Recipe by {createdBy}</p>
            </div>
        </div>
    </Link>
    );
};

export default RecipeCard;

