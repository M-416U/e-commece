const formatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});

const Currency = ({ value }: { value: string | number }) => {
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
