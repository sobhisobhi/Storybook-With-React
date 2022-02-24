import React, { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Element } from './Element';
import formJSON from './formElement.json';
import { FormContext } from './FormContext';

function App({ values, touched, errors, handleChange, handleBlur }) {
  const [user, setUser] = useState();
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(formJSON[0])

  }, [])

  const { fields, page_label } = elements ?? {};

  return ( 
    <FormContext.Provider>
      <Header 
        user={user}
        onLogin={() => setUser({ name: 'Sobhi Boughanmi' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Sobhi Boughanmi' })} 
      />
      <div>
        <h3>{page_label}</h3>
        <form>
        {fields ? fields.map((field, i) => 
          <Element
            key={i}
            field={field}
            //value={values.userName}
            //onChange={handleChange}
            //onBlur={handleBlur}
            //error={touched.usertName && errors.usertName}
          />
          ) 
          : null}
          
        </form>
      </div>
    </FormContext.Provider>
  );
}

export default App;
