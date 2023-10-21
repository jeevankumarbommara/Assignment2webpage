import React from "react";
import "./card.css";

const Cards = () => {
  return (
    <>
    <div className="category-container container">
                    <h3>Latest posts</h3>

      <section className="filter">
        <div className="categorycontainer">
          <div className="filtertext">
            <i className="fa fa-filter"></i>
            <p>Filter by Category</p>
          </div>
          <ul>
            <li>
              <a href="#" className="active">
                All
              </a>
            </li>
            <li>
              <a href="#">Artificial Intelligence</a>
            </li>
            <li>
              <a href="#">Cloud Computing</a>
            </li>
            <li>
              <a href="#">DevOps</a>
            </li>
            <li>
              <a href="#">Programming Languages</a>
            </li>
            <li>
              <a href="#">Mobile Application Development</a>
            </li>
            <li>
              <a href="#">Technology and Tools</a>
            </li>
            <li>
              <a href="#">Get a Job in a Tech Company</a>
            </li>
            <li>
              <a href="#">Others</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="card">
        <div className="item">
          <a href="#">
            <div className="imagesection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png"
                alt="Blog"
              />
            </div>
            <div className="textsection">
              <h2 className="title">Data Backup And Recovery</h2>
              <div className="authorcontainer">
                <p className="author">
                Pitanjal Dutta 

                  <span> | 05 june 2020</span>
                </p>
              </div>
              <p className="item_description">
              A business must always introspect the areas where they lack in order to bring a positive
               change in the work environment.the main precautions or a contingency plan for business...
              </p>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="#">
            <div className="imagesection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png"
                alt="Blog"
              />
            </div>
            <div className="textsection">
              <h2 className="title">
                Practical Machine Learning with Python and Keras
              </h2>
              <div className="authorcontainer">
                <p className="author">
                  Daniel Pyrathon
                  <span> | 16 Oct 2019</span>
                </p>
              </div>
              <p className="item_description">
                Machine learning is a field of artificial intelligence that uses
                statistical techniques to give computer systems the ability to
                “learn” e.g., progressively...
              </p>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="#">
            <div className="imagesection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png"
                alt="Blog"
              />
            </div>
            <div className="textsection">
              <h2 className="title">
                Challenges of Machine Learning in Big Data Analytics
              </h2>
              <div className="authorcontainer">
                <p className="author">
                  EdYoda
                  <span> | 24 Aug 2019</span>
                </p>
              </div>
              <p className="item_description">
                Machine Learning is a subset of artificial intelligence which is
                an important part of computer science. The revolution of Big
                Data promises to transform the...
              </p>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="#">
            <div className="imagesection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png"
                alt="Blog"
              />
            </div>
            <div className="textsection">
              <h2 className="title">
                Impact of Cloud Computing in various industries
              </h2>
              <div className="authorcontainer">
                <p className="author">
                  EdYoda
                  <span> | 24 Aug 2019</span>
                </p>
              </div>
              <p className="item_description">
                Cloud computing has been rapidly gaining pace in the world of
                information technology. It has been observed that over 90% of
                global enterprises are using cloud...
              </p>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="#">
            <div className="imagesection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png"
                alt="Blog"
              />
            </div>
            <div className="textsection">
              <h2 className="title">Breaking the Myths around Cybersecurity</h2>
              <div className="authorcontainer">
                <p className="author">
                  EdYoda
                  <span> | 26 Aug 2019</span>
                </p>
              </div>
              <p className="item_description">
                Cybersecurity plays an integral role in the process of good
                business models. But even cybersecurity programs built with good
                intentions can fall short in...
              </p>
            </div>
          </a>
        </div>
        <div className="item">
          <a href="#">
            <div className="imagesection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg"
                alt="Blog"
              />
            </div>
            <div className="textsection">
              <h2 className="title">
              Introducing you all to EdYoda -...
              </h2>
              <div className="authorcontainer">
                <p className="author">
                Arman Ahmed
                  <span> | 05 Jul 2019</span>
                </p>
              </div>
              <p className="item_description">
              Really ecstatic and immensely proud to introduce you all to our latest attempt 
              of adding value and making an impact to the world we are a part of...
                
              </p>
            </div>
          </a>
        </div>
      </section>
  </div>
    </>
  );
};


export default Cards;