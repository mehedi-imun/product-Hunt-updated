import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React from "react";

interface BrandProps {
  brand: string;
  isChecked:boolean
  onBrandChange: (brand: string) => void;
}

const Brand: React.FC<BrandProps> = ({ brand, onBrandChange ,isChecked}) => {
  const handleCheckboxChange = () => {
    onBrandChange(brand);
  };

  return (
    <div className="flex items-center space-x-3 mt-2 font-semibold">
      <Checkbox  id={brand} checked={isChecked} onCheckedChange={handleCheckboxChange} />
      <Label htmlFor={brand}>{brand}</Label>
    </div>
  );
};

export default Brand;
