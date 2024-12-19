const changeColorOfLastTitleWord = (text) => {
  const words = text.split(' ');
  const lastWord = words.pop();
  const modifiedText = words.join(' ');
  return (
    <>
      {modifiedText} <span style={{ color: '#FCA728' }}>{lastWord}</span>
    </>
  );
};

export default changeColorOfLastTitleWord;
