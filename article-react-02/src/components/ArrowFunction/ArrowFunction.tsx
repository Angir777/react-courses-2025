const ArrowFunction = () => {
  const handleClickOne = () => {
    alert('The function will only be called when you click!');
  };

  const handleClickTwo = (message: string) => {
    alert(message);
  };

  return (
    <>
        <button onClick={handleClickOne}>
            Click me!
        </button>

        <button onClick={() => handleClickTwo('HELLO!')}>
            Click me too!
        </button>
    </>
  );
};

export default ArrowFunction;
