import React from "react";
import "./blog.css";
import {useEffect} from "react";
const Blog = () => {
  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://platform.twitter.com/widgets.js";
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
 
  return (
    <section className="blog container section " id="blog">
      <h2 className="section__title">Latest Post</h2>
      <div className="blog__container grid ">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Tutorial</span>
            </a>
          </div>
          <div className="blog__details">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7158422215741386753"
              height="350"
              width="300"
              frameborder="0"
              allowfullscreen=""
              title="Embedded post"
            ></iframe>
            <div className="blog__meta">
           
            </div>
          </div>
        </div>
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Tutorial</span>
            </a>
          </div>
          <div className="blog__details">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7146741039385427968"
              height="350"
              width="300"
              frameborder="0"
              allowfullscreen=""
              title="Embedded post"
            ></iframe>
            <div className="blog__meta">
              <span></span>
            </div>
          </div>
        </div>
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Tutorial</span>
            </a>
          </div>
          <div className="blog__details">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7151196647950036992"
              height="350"
              width="300"
              frameborder="0"
              allowfullscreen=""
              title="Embedded post"
            ></iframe>
            <div className="blog__meta">
              <span></span>
            </div>
          </div>
        </div>
        <div className="blog__card ">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Tutorial</span>
            </a>
          </div>
          <div className="blog__details">
          <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          Hi Developers<br/><br/>
          I successfully completed my 50k impressions on X<br/><br/>
          Let's <a href="https://twitter.com/hashtag/Connect?src=hash&amp;ref_src=twsrc%5Etfw">#Connect</a>! 
          <a href="https://twitter.com/hashtag/buildinpublic?src=hash&amp;ref_src=twsrc%5Etfw">#buildinpublic</a> 
          <a href="https://t.co/MmqVzdJgBf">pic.twitter.com/MmqVzdJgBf</a>
        </p>
        &mdash; Arihant Jain (@Arihantdotcom) <a href="https://twitter.com/Arihantdotcom/status/1739111721577439594?ref_src=twsrc%5Etfw">December 25, 2023</a>
      </blockquote>
           
          </div>
        </div>
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Tutorial</span>
            </a>
          </div>
          <div className="blog__details">
          <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          Hi to all of you<br/><br/>
          I just made my own portfolio website, and I'd love for you to check it out! Take a peek at my work and let me know what you think. Any suggestions? Drop them in the comments!<br/>
          Link: <a href="https://t.co/7L4OqbX3Kt">https://t.co/7L4OqbX3Kt</a>
          <a href="https://twitter.com/hashtag/connect?src=hash&amp;ref_src=twsrc%5Etfw">#connect</a> 
          <a href="https://twitter.com/hashtag/buildinpublic?src=hash&amp;ref_src=twsrc%5Etfw">#buildinpublic</a> 
          <a href="https://twitter.com/ezSnippet?ref_src=twsrc%5Etfw">@ezSnippet</a> 
          <a href="https://twitter.com/reactjs?ref_src=twsrc%5Etfw">@reactjs</a> 
          <a href="https://t.co/Bv7EM33zs7">pic.twitter.com/Bv7EM33zs7</a>
        </p>
        &mdash; Arihant Jain (@Arihantdotcom) <a href="https://twitter.com/Arihantdotcom/status/1738178293806027076?ref_src=twsrc%5Etfw">December 22, 2023</a>
      </blockquote>
            
          </div>
        </div>
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="#">
              <span className="blog__category">Tutorial</span>
            </a>
          </div>
          <div className="blog__details">
          <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          Hi Developers,<br/>
          Building an "Ek chai pilade" open-source platform, similar to buymeacoffee for Indian users. It supports UPI and is 100% commission-free. You can start your Tapri, and supporters can help you.<br/>
          Link: <a href="https://ekchaipilade.vercel.app">ekchaipilade.vercel.app</a>
          <a href="https://twitter.com/hashtag/Budget2024?src=hash&amp;ref_src=twsrc%5Etfw">#Budget2024</a> 
          <a href="https://twitter.com/hashtag/Paytm?src=hash&amp;ref_src=twsrc%5Etfw">#Paytm</a> 
          <a href="https://t.co/EyZXDoG63A">pic.twitter.com/EyZXDoG63A</a>
        </p>
        &mdash; Arihant Jain (@Arihantdotcom) <a href="https://twitter.com/Arihantdotcom/status/1752903391167275317?ref_src=twsrc%5Etfw">February 1, 2024</a>
      </blockquote>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;



