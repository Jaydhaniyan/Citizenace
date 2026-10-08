"use client";

interface Props {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
            selected === category
              ? "bg-blue-700 text-white shadow-md"
              : "bg-blue-50 text-blue-700 hover:bg-blue-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}