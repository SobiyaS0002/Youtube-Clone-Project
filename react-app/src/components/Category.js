import React from 'react';
import './Category.css';

const categories = [
  'All', 'Website', 'Music', 'Gaming', 'Node.js',
  'Javascript', 'React.js', 'TypeScript', 'Coding',
  'Nextjs', 'Data analysis', 'Web design', 'HTML',
  'Tailwind', 'CSS', 'CSS', 'Express.js'
];

function CategoryBar() {
  return (
    <div className="con-wrapper">
      <div className="category-list">
        {categories.map((cat, idx) => (
          <button className="category-btn" key={idx}>{cat}</button>
        ))}
      </div>
    </div>
  );
}

export default CategoryBar;
