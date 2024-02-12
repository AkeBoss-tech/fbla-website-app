// Organization.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OrganizationCard from '../components/OrganizationCard';
import Carousel from '../components/Carousel';
import { DiscussionEmbed } from 'disqus-react';

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
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
    const relatedOrganizations = shuffle(partners.filter((p) => p.id !== partner.id)).slice(0, 8); // Limit to 5 organizations

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h2>{partner.name}</h2>
                <img
                    /* check if image is path or link */
                    src={partner.logo.includes('http') ? partner.logo : `images/${partner.logo}`}
                    alt={partner.name}
                    className="img-fluid h-100 w-100 object-fit-cover"
                />
                
                <p>Categories: {partner.category.join(', ')}</p>

                {/* add the orginal source of the organization */}
                <a href={partner.link}>Source</a>

                {/* add the about in fancy text */}
                <Section title="About" content={partner.about} />

                {/* add the address, phone and website with icons next to them */}
                <div className="row">
                    <div className="col-md-4">
                        <i className="bi bi-geo-alt-fill"></i>
                        <p>{partner.address}</p>
                    </div>
                    <div className="col-md-4">
                        <i className="bi bi-telephone-fill"></i>
                        <p>{partner.phone}</p>
                    </div>
                    <div className="col-md-4">
                        <i className="bi bi-link-45deg"></i>
                        <a href={partner.website}>Website</a>
                    </div>
                </div>

                {/* if there is an address embed a little google maps iframe */}
                {partner.address && (
                    <p>I love google maps</p>
                )}
                
                {/* make a little card for local representative if exists */}
                {partner.contact_info.name  && (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Representative: {partner.contact_info.name}</h5>
                            <p className="card-text">{partner.contact_info.title}</p>
                            <p className="card-text"><i className="bi bi-telephone-fill"></i> {partner.contact_info.phone}</p>
                        </div>
                    </div>
                )}

                {/* if there are images make a caruosel for them */}
                {partner.images != null && partner.images.length > 0 && (
                    <>
                    <h3>Images</h3>
                    <Carousel>
                        {partner.images.map((image) => (
                            <div className="p-2">
                                <img
                                    src={image.includes('http') ? image : `images/${image}`}
                                    alt={partner.name}
                                    className="img-fluid h-100 w-100 object-fit-cover"
                                />
                            </div>
                        ))}
                    </Carousel>
                    </>
                )}
                <br></br>
                
            </div>

            {/* Disqus */}
            <div className="container mb-6 mt-5">
                <DiscussionEmbed
                    shortname='organizations-near-you'
                    config={
                        {
                            url: window.location.href,
                            identifier: partner.id.toString(),
                            title: partner.name,
                            language: 'en_US',
                        }
                    }
                />
            </div>
            

            {/* Carousel with Related Organizations */}
            <div className="related-organizations-carousel-container">
                <h3>Related Organizations</h3>
                <Carousel>
                    {relatedOrganizations.map((org) => (
                        <div className="p-2"><OrganizationCard organization={org} smallerSize={true} image={false} /></div>
                    ))}
                </Carousel>
            </div>
            <Footer />
        </>
    );
};

export default Organization;
