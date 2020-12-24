import React, { useState } from 'react';
import GithubImage from './github-icon.svg';
import './App.css';

function App() {

  const [search,setSearch] = useState('');
  const [userData,setUserData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(userResponse => setUserData(userResponse));
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }


  return (
    <div className="container text-center">
      <h1 id="title" className="py-5 text-uppercase">
        perfil do github
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input type="text" placeholder="Digite o perfil do github desejado..." value={search} onChange={handleChange} require/>

           <span className="input-group-btn">
             <button type="submit" id="btn-procurar">
               Procurar
             </button>
           </span>
          </div>
        </div>
      </form>
      
      <div className="py-5">
        
        {!userData && (
          <img src={GithubImage} className ="responsive rounded-circle" alt="logo" height="200px"/>
        )}

        {userData &&(
          <div>
           <img src={userData.avatar_url} className ="responsive rounded-circle" alt="logo" height="200px"/>
          
          <h1 className="pt-5">
            <a href={userData.html_url} target="_new">
              {userData.name}
            </a>
          </h1>
          <h3>
            {userData.location}
          </h3>

          <p id="camp-bio" className="text-info">
            {userData.bio}
          </p>

          </div>
        )}
        
      </div>
    </div>
  );
}

export default App;
