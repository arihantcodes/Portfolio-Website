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
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7282036278219452416"  height="350"
              width="300" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
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
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7323710706212569088" height="350" width="300" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
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
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7319590208365060096" height="350" width="300" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
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
            <blockquote className="twitter-tweet" data-media-max-width="560">
              <p lang="en" dir="ltr">
                Spectrum AI Waitlist is LIVE<br/><br/>
                Imagine getting the perfect AI prompt for any task-just type your idea, and we do the magic<br/><br/>
                Early access: <a href="https://t.co/YxD2QJWdd5">https://t.co/YxD2QJWdd5</a><br/><br/>
                Early users get exclusive updates &amp; surprises<br/><br/>
                Tag a friend who loves AI, and RT to spread the word. <a href="https://t.co/YiUsCclAf5">pic.twitter.com/YiUsCclAf5</a>
              </p>
              &mdash; Arihant Jain (@arihantCodes) <a href="https://twitter.com/arihantCodes/status/1916362741788332421?ref_src=twsrc%5Etfw">April 27, 2025</a>
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
          <blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Rate My Resume for Frontend Developer Position Scale of 1-10<a href="https://twitter.com/piyushgarg_dev?ref_src=twsrc%5Etfw">@piyushgarg_dev</a> <a href="https://twitter.com/mannupaaji?ref_src=twsrc%5Etfw">@mannupaaji</a> <a href="https://twitter.com/100xDevs?ref_src=twsrc%5Etfw">@100xDevs</a> <a href="https://twitter.com/kirat_tw?ref_src=twsrc%5Etfw">@kirat_tw</a> <a href="https://twitter.com/Hiteshdotcom?ref_src=twsrc%5Etfw">@Hiteshdotcom</a> <a href="https://t.co/FoOUnhfkVg">pic.twitter.com/FoOUnhfkVg</a></p>&mdash; Arihant Jain (@arihantCodes) <a href="https://twitter.com/arihantCodes/status/1855590992570941495?ref_src=twsrc%5Etfw">November 10, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;



