import React from 'react';
// import styles from '../styles/loading.css'

const LoadingScreen = () => {
  return (
    <body className='containerall'> 
      <section class="container">
        <div>
          <div>
            <span class="one h6 third" />
            <span class="two h3 second" />
          </div>
        </div>

        <div>
          <div>
            <span class="one h1 first" />
            <span class="two h4 second" />
          </div>
        </div>

        <div>
          <div>
            <span class="one h5 third" />
            <span class="two h2 first" />
          </div>
        </div>
      </section>
    </body>
  );
};

export default LoadingScreen;
