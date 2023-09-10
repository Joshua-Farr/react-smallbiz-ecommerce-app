import "./TestimonialCard.css";

export default function TestimonialCard() {
  return (
    <div className="testimonial-wrapper">
      <p className="testimonial-text">
        “MintRoad made setting up a store and selling digital products super
        easy and fun. No more clunky plugins to manage or taxes to worry about.
        MintRoad does everything I need and more.”
      </p>

      <div className="testimonial-person-info">
        <img
          src="../assets/testimonial_img.jpg"
          alt=""
          className="testimonial-image"
        />
        <div className="testimonial-person-text">
          <h3 className="testimonial-name">Jessica McAlister</h3>
          <h3 className="testimonial-website">liftoffcourse.com</h3>
        </div>
      </div>
    </div>
  );
}
