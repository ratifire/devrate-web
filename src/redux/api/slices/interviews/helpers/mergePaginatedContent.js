const mergePaginatedContent = ({ arg, currentCache, newData }) => {
  if (arg.page === 0) {
    currentCache.content = newData.content;
  } else {
    const existingIds = new Set(currentCache.content.map((item) => item.id));
    const uniqueNew = newData.content.filter((item) => !existingIds.has(item.id));
    currentCache.content.push(...uniqueNew);
  }
};

export default mergePaginatedContent;
