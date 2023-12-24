import type { Component, } from 'solid-js';
import { Router, Route, useNavigate } from '@solidjs/router'

const FooRoute : Component = () => {
  const navigate = useNavigate()
  
  return (<div>
<button
  onClick={navigate('/')}
>go</button>

  </div>)
}

const RootRoute = () =>{
  return (<div>
    <button
      onClick={navigate('/foo')}
    >go</button>
    
      </div>)
}

const App: Component = () => {
  return (
    <>
    <Router base={import.meta.env.BASE_URL}>
      <Route 
        path={'/'}
        component={RootRoute}
      />
            <Route 
        path={'/foo'}
        component={FooRoute}
      />
      </Router>
    </>
  );
};

export default App;
