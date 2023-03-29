import React from 'react';
import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/alex.jpg"
          alt="An image showing Alexandra"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, i´m Alexandra</h1>
      <p>
        A blog about web development - especially frontend framework like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
