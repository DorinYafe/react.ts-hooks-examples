import React from "react";

const EffectAndRef: React.FC = () => {

  const [name, setName] = React.useState("");
  const inputElement: any = React.useRef();
  const [isError, setError] = React.useState(false);
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    inputElement.current.focus();
  }, []);

  React.useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      setError(name === "");
    }
  }, [name]);

  return (

    <div>
      <h1>Use Effect and Use Ref Example:</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        ref={inputElement}
      />
      <button onClick={() => inputElement.current.focus()}>Focus</button>

      {isError && (
        <label style={{ color: "red", padding: "0 1rem" }}>
          Invalid input!
        </label>
      )}

      <hr />
      <h1>{name}</h1>
    </div>
  )
};

export default EffectAndRef;
