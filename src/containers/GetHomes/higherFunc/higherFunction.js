export const seachingFor = (searchCommunity) => {
  return (search) => {
    return (
      search.type.toLowerCase().includes(searchCommunity.toLowerCase()) ||
      !searchCommunity
    );
  };
};
