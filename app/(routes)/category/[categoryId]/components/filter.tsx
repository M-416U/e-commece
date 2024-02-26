"use client";
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface filterProps {
  data: (ColorTypes | SizeTypes)[];
  valueKey: string;
  label: string;
}

const Filter: React.FC<filterProps> = ({ data, valueKey, label }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedValue = searchParams.get(valueKey);
  const toggleFilter = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }
    const url = qs.stringifyUrl(
      { url: window.location.href, query },
      { skipNull: true }
    );
    router.push(url);
  };
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold">{label}</h2>
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300 flex items-center gap-x-2",
                selectedValue === filter.id && "bg-black text-white"
              )}
              onClick={() => toggleFilter(filter.id)}
            >
              {filter.name}
              {valueKey === "colorId" && (
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: filter.value }}
                />
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
