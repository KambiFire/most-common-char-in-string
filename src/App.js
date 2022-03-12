import "./styles.css";

export default function App() {

  function getMostChars(str){
    if (!str) return '';

    let charCount = {}, mostChar = '', mostCharCount = 0;

    // Get rid of spaces and change case
    str = str.replace(/\s+/g, '').toLowerCase();

    // Pipe str to object :- key is char, value is no. of times
    for (let i=0; i<str.length; i++)
        charCount[str[i]] = ++charCount[str[i]] || 1;

    // Get the most no. of times from object
    for (let key in charCount)
      if (charCount[key] >= mostCharCount){
        mostCharCount = charCount[key];
        mostChar = key;
      }
    return '\''+ mostChar + '\' ('+ mostCharCount+')'; 
  }

  const tests = [
    'Pneumonoul ',
    ' Tramicro ',
    ' Scopicsilico ',
    ' Volcano ',
    ' Coniosis',
    ' Pneumonoul Tramicro Scopicsilico Volcano Coniosis ',
    'PneumonoulTramicroScopicsilicoVolcanoConiosis',
  ]
  
  return (
    <div className="App">
      <h2>Most Commonly Used Character in String</h2>
      <div style={{ marginLeft: "50px", textAlign: "left" }}>
        {tests.map((test, index) => (
          <h3 key={index}>String: {test} --- {getMostChars(test)}</h3>
        ))}
      </div>
      
      
    </div>
  );
}
