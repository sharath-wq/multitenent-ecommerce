import { Categories } from "./categoreis";
import { SearchInput } from "./search-input";

interface IProps {
  data: any;
}

export const SearchFilters = ({ data }: IProps) => {
  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      <SearchInput />
      <Categories data={data} />
    </div>
  );
};
