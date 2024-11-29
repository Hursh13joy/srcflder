import React from 'react';

const Services = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 display-4 text-primary">Our Services</h2>
      <section className="row">
        {/* Service Card: Add Your Pet Animal */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <a href="add_pet.html" className="card h-100 text-decoration-none shadow-lg">
            <div className="card-body text-center">
              <div className="title h5 text-uppercase font-weight-bold">Add Your Pet Animal</div>
              <p className="text-muted">Add your lovely pet to keep track.</p>
            </div>
          </a>
        </div>

        {/* Service Card: Book an Appointment */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <a href="bookappointment.html" className="card h-100 text-decoration-none shadow-lg">
            <div className="card-body text-center">
              <div className="title h5 text-uppercase font-weight-bold">Book an Appointment</div>
              <p className="text-muted">Book appointments for your pet with our vets.</p>
            </div>
          </a>
        </div>

        {/* Service Card: Health Activity */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <a href="health_track.html" className="card h-100 text-decoration-none shadow-lg">
            <div className="card-body text-center">
              <div className="title h5 text-uppercase font-weight-bold">Health Activity</div>
              <p className="text-muted">Keep track of your pet's health.</p>
            </div>
          </a>
        </div>

        {/* Service Card: Reminders */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <a href="reminder.html" className="card h-100 text-decoration-none shadow-lg">
            <div className="card-body text-center">
              <div className="title h5 text-uppercase font-weight-bold">Reminders</div>
              <p className="text-muted">Set reminders for medical checkups.</p>
            </div>
          </a>
        </div>

        {/* Service Card: Contact Vet Doctors */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <a href="contact_vet.html" className="card h-100 text-decoration-none shadow-lg">
            <div className="card-body text-center">
              <div className="title h5 text-uppercase font-weight-bold">Contact Vet Doctors</div>
              <p className="text-muted">Contact vet doctors for any kind of help.</p>
            </div>
          </a>
        </div>

        {/* Service Card: Shopping */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <a href="shopping.html" className="card h-100 text-decoration-none shadow-lg">
            <div className="card-body text-center">
              <div className="title h5 text-uppercase font-weight-bold">Shopping</div>
              <p className="text-muted">Shop accessories, toys, food supplements online.</p>
            </div>
          </a>
        </div>

        {/* Service Card: Gallery */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <a href="gallery.html" className="card h-100 text-decoration-none shadow-lg">
            <div className="card-body text-center">
              <div className="title h5 text-uppercase font-weight-bold">Gallery</div>
              <p className="text-muted">A gallery for pet owners to share cherished moments.</p>
            </div>
          </a>
        </div>

        {/* Service Card: Events */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <a href="events.html" className="card h-100 text-decoration-none shadow-lg">
            <div className="card-body text-center">
              <div className="title h5 text-uppercase font-weight-bold">Events</div>
              <p className="text-muted">Join us for exciting events celebrating pets and owners!</p>
            </div>
          </a>
        </div>

        {/* Service Card: FAQ's */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <a href="faq.html" className="card h-100 text-decoration-none shadow-lg">
            <div className="card-body text-center">
              <div className="title h5 text-uppercase font-weight-bold">FAQ's</div>
              <p className="text-muted">Find answers to common questions about our services.</p>
            </div>
          </a>
        </div>

        {/* Service Card: Community */}
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <a href="community.html" className="card h-100 text-decoration-none shadow-lg">
            <div className="card-body text-center">
              <div className="title h5 text-uppercase font-weight-bold">Community</div>
              <p className="text-muted">A friendly community for pet lovers to connect and share.</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
