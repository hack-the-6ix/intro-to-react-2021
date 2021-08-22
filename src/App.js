import { useState, useEffect } from "react";

function Component(props) {
  const [ loading, setLoading ] = useState(false);
  const [ image, setImage ] = useState();

  useEffect(() => {
    if (!loading) return;

    const timer = window.setTimeout(() => {
      setImage('https://pbs.twimg.com/profile_images/949539666574811136/8KmP8saz_400x400.jpg');
      setLoading(false);
    }, 2000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [ loading ]);

  if (loading) {
    return <h1>Loading Image...</h1>
  }

  return (
    <div>
      {image
        ? (
          <img src={image} alt='owo'/>
        )
        : (
          <button onClick={() => setLoading(true)}>
            Load Image
          </button>
        )
      }
    </div>
  );
}

function App() {
  return (
    <>
      <Component/>
    </>
  );
}

export default App;
