import React from 'react';

const Sidebar = (props) => {

  const categories = props.categories;

  return (
    <sidebar>
      <img src="" className="logo" />
      {categories.map((category) => {
        <section>
          <h4 className="menu-item active">
            <Link to='' onClick={selectCategory}>{category}</Link>
          </h4>
        </section>
      })}

    </sidebar>
  );
}

export default Sidebar;
