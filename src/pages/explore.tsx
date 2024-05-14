import React from "react";
import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg"
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg"

const ExplorePage: React.FC = () => {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <p className='exploreCategoryHeading'>Categories</p>
        <div className='exploreCategories'>
          <Link to='/category/rent'>
            <img
              src={rentCategoryImage}
              alt='rent'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Places for rent</p>
          </Link>
          <Link to='/category/sale'>
            <img
              src={sellCategoryImage}
              alt='sell'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Places for sale</p>
          </Link>
        </div>
    </div>
  );
};

export default ExplorePage;
