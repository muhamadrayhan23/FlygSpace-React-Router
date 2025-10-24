import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="/img/logo1.png"
            alt="About Us"
            className="img-fluid rounded object-fit-cover"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold text-bold mb-3">About FlyingSpace</h2>
          <p className="lead">
            Flying Space is a gripping and unconventional clothing brand based in Bandung since 2022. Represents not only a more refined and forward-thinking brand, we reflect our each issues like a musical albums and every articles is like a song we write.

            Driven by the dream-quest of demon force that bore black mass hysteria, a carnal beast, living in a cosmos that is indifferent to our existence. Flying Space is dangerous flame of brand that seemed lost for many years and that now once again has been set loose upon everyday society & to decipher the world objectively.

            Four young boys were brought together by our passion for music. Our first love has always been and will always be music, we try to give back to our roots through the products and opportunities we provide through the company. We remains extremely involved in the production and direction of Flying Space, maintaining the respect over communities we continue to support our friends, which helps us fuel and inspire our original vision. Our goal for Flying Space is to evoke emotions then create topics of discussion through our designs and boldly stated our idea at the hand of youth culture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
