// Organization.js
import React from "react";
import { useParams } from "react-router-dom";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OrganizationCard from "../components/OrganizationCard";
import Carousel from "../components/Carousel";
import { DiscussionEmbed } from "disqus-react";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const Organization = ({ partners }) => {
  const { id } = useParams();
  const partner = partners.find((p) => p.id === parseInt(id, 10));

  if (!partner) {
    return <div>Partner not found</div>;
  }

  // Filter out the current organization from related organizations
  /* shuffle this list */
  const relatedOrganizations = shuffle(
    partners.filter((p) => p.id !== partner.id)
  ).slice(0, 8); // Limit to 5 organizations

  const handleCategoryClick = (category) => {
    // Redirect to a search page or route with the selected category
    /* window.location.href = `/search?category=${category}`; */
  };

  const handleMouseEnter = (event) => {
    event.currentTarget.classList.add('hovered-card'); // Add a class when hovered
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.classList.remove('hovered-card'); // Remove the class when not hovered
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="text-center">
          <img
            /* check if image is path or link */
            src={
              partner.logo.includes("http")
                ? partner.logo
                : `images/${partner.logo}`
            }
            alt={partner.name}
            className="img-fluid logo-image"
          />

          <h2 className="mt-4">{partner.name}</h2>
        </div>

        <div className="basic-info mt-3 text-center">
          <p>
            {partner.category.map((category, index) => (
              <span
                key={index}
                className="badge bg-primary mx-1 category-badge text-white pointer"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </span>
            ))}
          </p>
        </div>

        {/* add the about in fancy text */}
        {partner.about && (
          <div className="about mt-5 mb-5 text-center">
            <p>{partner.about}</p>
          </div>
        )}

        {/* Additional Info with Icons */}
        <div className="container mt-2">
          <div className="card-deck">
            {partner.address && (
              <div className="card org-card text-center">
                <div className="card-body">
                  <i className="bi bi-geo-alt-fill icon"></i>
                  <p className="card-text" title="Address">
                    {partner.address}
                  </p>
                </div>
              </div>
            )}
            {partner.phone && (
              <div className="card org-card text-center">
                <div className="card-body">
                  <i className="bi bi-telephone-fill icon"></i>
                  <p className="card-text" title="Phone">
                    {partner.phone}
                  </p>
                </div>
              </div>
            )}
            {partner.website && (
              <div className="card org-card text-center">
                <div className="card-body">
                  <i className="bi bi-link-45deg icon"></i>
                  <p className="card-text" title="Website">
                    <a href={partner.website}>{partner.website}</a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* if there is an address embed a little google maps iframe */}
        {/* {partner.address && <div sx="width: 100%" className="mt-5"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src={"https://maps.google.com/maps/place/" + partner.address.replaceAll(" ", "%20")}><a href="https://www.gps.ie/">gps tracker sport</a></iframe></div>} */}

        {/* make a little card for local representative if exists */}
        {partner.contact_info.name && (
            <div className="card org-card text-center mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="card-header">
        <i className="bi bi-person icon"></i>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          {partner.contact_info.name}
        </h5>
        <p className="card-text">{partner.contact_info.title}</p>
        <p className="card-text">
          <i className="bi bi-telephone-fill"></i>{" "}
          {partner.contact_info.phone}
        </p>
      </div>
    </div>
        )}

        {/* if there are images make a caruosel for them */}
        {partner.images != null && partner.images.length > 0 && (
          <div className="mt-3">
            <h3>Images</h3>
            <Carousel>
              {partner.images.map((image) => (
                <div className="p-2">
                  <img
                    src={image.includes("http") ? image : `images/${image}`}
                    alt={partner.name}
                    className="img-fluid h-100 w-100 object-fit-cover"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        )}
        <br></br>
      </div>

      <div className="text-center mt-5 mb-4">
        <a className="btn btn-secondary" href={partner.link}>
          Organization Source
        </a>
      </div>

      {/* Disqus */}
      <div className="container mb-6 mt-5">
        <DiscussionEmbed
          shortname="organizations-near-you"
          config={{
            url: window.location.href,
            identifier: partner.id.toString(),
            title: partner.name,
            language: "en_US",
          }}
        />
      </div>

      {/* Carousel with Related Organizations */}
      <div className="related-organizations-carousel-container">
        <h3>Related Organizations</h3>
        <Carousel>
          {relatedOrganizations.map((org) => (
            <div className="p-2">
              <OrganizationCard
                organization={org}
                smallerSize={true}
                image={false}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <Footer />
    </>
  );
};

export default Organization;
