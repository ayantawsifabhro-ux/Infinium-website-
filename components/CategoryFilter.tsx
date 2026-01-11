
import React from 'react';
import { Category } from '../types';

interface CategoryFilterProps {
  activeCategory: Category | 'All';
  onCategoryChange: (category: Category | 'All') => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, onCategoryChange }) => {
  const categories: (Category | 'All')[] = ['All', Category.PERFUMES, Category.WATCHES, Category.ACCESSORIES];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-8 py-2 text-xs font-bold tracking-[0.2em] uppercase transition-all border-b-2 ${
            activeCategory === cat 
            ? 'border-infiniumRed text-infiniumBlack' 
            : 'border-transparent text-gray-400 hover:text-infiniumBlack'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
