import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css";
import prideimg from "../../assets/1.png";
import ingredients from "../../assets/2.png";
import Data from "../../Data";
import { Carousel } from "react-bootstrap";
import item1 from "../../assets/2.jpg";
import item2 from "../../assets/3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const blogItem = Data.map((item) => {
    return (
      <div className="col-md-4">
        <div className="box">
          <img src={item.img} />
          <h5>{item.title}</h5>
          <span>{item.time}</span>
          <h6>{item.price}</h6>
        </div>
        <button>
          <a href="">Order Now</a>
        </button>
      </div>
    );
  });

  return (
    <Fragment>
      <Header />
      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1287+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-md-3">
              <h2> 4587+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className="col-md-3">
              <h2>1452+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className="col-md-3">
              <h2>1287+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={prideimg} title="img" />
            </div>
            <div className="col-md-6">
              <h2>
                We pride ourselves on making real food from the best ingredients
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button>
                <a href="">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="ingredients">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                We make everything by hand with the best possible ingredient
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
              <button>
                <a href="#">Learn More</a>
              </button>
            </div>
            <div className="col-md-6">
              <img src={ingredients} alt="ingredients" />
            </div>
          </div>
        </div>
      </section>
      <section className="paralex">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>
                When a man's stomach is full it makes no difference whether he
                is rich or poor.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio
                <br /> finibus bibendum in sit amet leo. Mauris feugiat erat
                tellus.
              </p>
              <a href="">Wtach Our Story</a>
            </div>
          </div>
        </div>
      </section>
      <section className="blogs">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h2>Explore Our Foods</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus. Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts. Separated they live in Bookmarksgrove.
              </p>
            </div>
          </div>
          <div className="row">{blogItem}</div>
        </div>
      </section>
      <section className="slider">
        <section className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Testimonials</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Carousel>
                <Carousel.Item>
                  <img src={item1} />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={item2} />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </section>
      </section>
      <section className="faq">
        <div className="container">
          <h2 className="text-center">Frequently Asked Questions</h2>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h4>Is Foodera Bread really baked fresh each day?</h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
              <h4>Can I order your products online?</h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-lg-6 col-md-6">
              <h4>Do you bake breads containing animal fats or products?</h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
              <h4>When are you opening a shop near me?</h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe">
        <div className="container">
          <form>
            <i class="fa-solid fa-envelope"></i>
            <input type="email" placeholder="Your Email" name="mail" />
            <input type="submit" value="Subscribe" />
          </form>
          <p>Hurry up! Subscribe our newsletter and get 25% Off</p>
        </div>
      </section>
      <footer>
        <div className="link">
          <a href="#">Register</a>
          <a href="#">Forum</a>
          <a href="#">Afiliate</a>
          <a href="#">FAQ</a>
        </div>
        <div className="social">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <p> &copy; Foodera. All rights reserved.</p>
      </footer>
    </Fragment>
  );
};

export default Home;
