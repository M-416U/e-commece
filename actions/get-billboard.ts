const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillBoard = async (id: string): Promise<{ data: BillboardTypes }> => {
  const res = await fetch(`${URL}/${id}`);
  return res.json();
};
export default getBillBoard;
