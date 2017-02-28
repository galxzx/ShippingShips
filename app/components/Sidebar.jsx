import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {

  const categories = props.category.categories;
  console.log('================this is categories', categories)
  return (
    <div>
      <img src="" className="logo" />
      {categories.map((category) => {
        return (
        <section key={category.id}>
          <h4 className="menu-item active">
            <Link to='' onClick={()=>{}}>{category.name}</Link>
          </h4>
        </section>
        )
      })}

    </div>
  );
}

export default Sidebar;
