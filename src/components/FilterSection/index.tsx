import React from "react";

interface IFilterSectionProps {
  customClass?: string;
}
function FilterSection({ customClass = "" }: IFilterSectionProps) {
  return (
    <div style={{ width: "20%", height: "90vh", backgroundColor: "black" }}>
      FilterSection
    </div>
  );
}

export default FilterSection;
