import React, { useState } from 'react';
import GithubImage from './img/github-icon.svg';
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
           <div className="container-profile">
              <div className="profile-img">
                <img src={GithubImage}  alt="logo" height="200px"/>
    
                <div className="followed"> 
                  <div className="followed-profile">
                    <p>Followers</p>
                    <p>0</p>
                  </div>
    
                  <div className="followed-profile">
                    <p>Following </p>
                    <p>0</p>
                  </div>
                </div>
              </div>
              <h1 className="pt-3">
                <a  target="_new">
                  GitHub
                </a>
              </h1>
              <h3>
                GitHub
              </h3>

              <p id="camp-bio" className="text-info">
                GitHub
              </p>

           </div>
        )}

        {userData &&(
          <div className="container-profile">
            <div className="profile-img">
              <img src={userData.avatar_url}  alt="logo" height="200px"/>

              <div className="followed"> 
                <div className="followed-profile">
                  <p>Followers</p>
                  <p>{userData.followers}</p>
                </div>

                <div className="followed-profile">
                  <p>Following </p>
                  <p>{userData.following}</p>
                </div>
              </div>
            </div>
           
            <h1 className="pt-3">
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

            <div className="container-repositorios">
            {userData.repos_url.name}
            </div>
          </div>

          


        )}
        
      </div>
    </div>
  );
}

export default App;
