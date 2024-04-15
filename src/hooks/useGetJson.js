export const useGetJson = async () => {
  const JsonData = async () => {
    try {
      const fetc = await fetch("src/hooks/data.json");
      const res = await fetc.json();

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const { listOfGray } = await JsonData()

  return { listOfGray };
};
