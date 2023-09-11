import React from "react";

function Project(props) {
  return (
    <main>
      <section class="header">
        <img src="./assets/images/Avatar.png" alt="" />
        <h1>Wendy Ochoa</h1>
        <p>
          <b>Los Angeles, California 2022</b>
        </p>
      </section>
      <section class="about" id="about">
        <h2> About Me </h2>
        <p>
          {" "}
          Greetings! I'm Wendy Ochoa, a Los Angeles native. I hold an associate
          degree in office administration, and long carrer in the veterinary
          industry. I am quite the coffee enthusiast, social butterfly, foodie,
          pet lover, and techie! Besides my day to day commitments, i love
          spending time with my family and 4 lovely canines, and love to learn
          new things! Come join me and lets see what im all about on my page!
        </p>
      </section>
      <section class="experience" id="experience">
        <h2> Experience </h2>
        <p>
          {" "}
          I have 10 years of experience in office administration and team
          leadership. I am trilingual, i currently speak English, Spanish, and
          Korean. Working towards to becoming fluent in the language of Code as
          well! My years of experience come from sales, customer satisfaction
          and over 8 years in the veterinary field. I love saving mans best
          friends, but recently opened my level of experience with software
          management. This is where my creativity sparked and drew me to the
          language of code. I plan to open doors for many along the way!{" "}
        </p>
      </section>

      <section class="contact" id="contact">
        <h2> Contact Me </h2>
        <address>
          <p>
            Email:{" "}
            <a href="email:owlwithwings@gmail.com">owlwithwings@gmail.com</a>
          </p>
        </address>
      </section>
      <section class="Porfolio" id="portfolio">
        <h2>Porfolio</h2>
        <div class="container">
          <div class="card">
            <h2> Project#1:</h2>{" "}
            <p>
              {" "}
              This was our very first project completed. We created a
              music/drink app to entertainment
            </p>
            <img src="assets/images/proj1.jpg" alt="My Image" class="Proj1" />
            <h2> Project#2:</h2>{" "}
            <p>
              {" "}
              My second project was created to open a diverse communication
              forum to users in their local geographical area. Allowing users to
              create content, post, comment "anonymously". In addtion having the
              option to create or login to a social account with privacy.
            </p>
            <img
              src="assets/images/P-2sample.png"
              alt="My Image"
              class="P-2sample"
            />
            <h2> Posting Page</h2>
            <img src="assets/images/img2.png" alt="My Image" class="img2" />
            <h2> Login Page for User</h2>
            <img src="assets/images/img3.png" alt="My Image" class="img3" />
            <div>
              <a href="https://babylex710.github.io/Rhythm-and-booze/">
                <button class="site">Site</button>
              </a>
              <a href="https://github.com/GithubOchoa1/Challenge2">
                <button class="code">Code</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="resume" id="resume">
        <h2> Resume </h2>
        <p> Upon Request </p>
      </section>
    </main>
  );
}

export default Project;
