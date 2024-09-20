"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ImWhatsapp } from "react-icons/im";
import Link from "next/link";
import axios from "axios";
import Swiperr from "./Swiperr";
const HomeListing = () => {
  const [allListings, setAllListings] = useState([]);
  const [listings, setListings] = useState(allListings);
  const [filter, setFilter] = useState("all");
  let replaceImage = 'https://raw.githubusercontent.com/dharmagktr/fruits_images/main/'
  useEffect(() => {
    axios
      .get("https://66ebbc1e2b6cf2b89c5b759e.mockapi.io/dharma")
      .then((response) => {
        setAllListings(response.data);
        setListings(response.data);
      });
  }, []);
  const handleFilterChange = (e) => {
    const value = e.target.value;
    console.log(allListings);

    setFilter(value);
    if (value === "all") {
      setListings(allListings);

    } else if (value == "apple") {
      const rentListings = allListings.filter(
        (listing) => listing.listingType == "apple"
      );
      setListings(rentListings);
    } else if (value == "banana") {
      const saleListings = allListings.filter(
        (listing) => listing.listingType == "banana"
      );
      setListings(saleListings);
    } else if (value == "litchi") {
      const rentListings = allListings.filter(
        (listing) => listing.listingType == "litchi"
      );
      setListings(rentListings);
    } else if (value == "plums") {
      const rentListings = allListings.filter(
        (listing) => listing.listingType == "plums"
      );
      setListings(rentListings);
    } else if (value == "grapes") {
      const rentListings = allListings.filter(
        (listing) => listing.listingType == "grapes"
      );
      setListings(rentListings);
    } else if (value == "plums") {
      const rentListings = allListings.filter(
        (listing) => listing.listingType == "plums"
      );
      setListings(rentListings);

    }
    else if (value == "gua") {
      const rentListings = allListings.filter(
        (listing) => listing.listingType == "gua"
      );
      setListings(rentListings);

    }
    else if (value == "others") {
      const rentListings = allListings.filter(
        (listing) => listing.listingType == "others"
      );
      setListings(rentListings);
    }
  };



  console.log(allListings);
  console.log(listings);
  return (
    <>
      <Navbar />
      <div className="mb-3">
        <Swiperr />
      </div>
      <div className="container my-5">
        <div className="r">
          <div className="col-md-">
            <div >
              <h3>Filters</h3>
              <div className="d-flex gap-lg-5 gap-4 align-items-center my-md-4 p-2 flex-wrap p">
                <div className="my-2">
                  <label
                    className="form-check-label d-flex gap-2"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <input
                      type="checkbox"
                      name="filter"
                      value="all"
                      checked={filter === "all"}
                      onChange={handleFilterChange}
                      style={{ transform: "scale(1.5)" }}
                    />{" "}
                    All
                  </label>
                </div>
                <div className="my-">
                  <label
                    className="form-check-label d-flex gap-2"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <input
                      type="checkbox"
                      name="filter"
                      value="apple"
                      checked={filter === "apple"}
                      onChange={handleFilterChange}
                      style={{ transform: "scale(1.5)" }}
                    />{" "}
                    Apple
                  </label>
                </div>
                <div className="my-">
                  <label
                    className="form-check-label d-flex gap-2"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <input
                      type="checkbox"
                      name="filter"
                      value="banana"
                      checked={filter === "banana"}
                      onChange={handleFilterChange}
                      style={{ transform: "scale(1.5)" }}
                    />{" "}
                    Banana
                  </label>
                </div>
                <div className="my-">
                  <label
                    className="form-check-label d-flex gap-2"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <input
                      type="checkbox"
                      name="filter"
                      value="litchi"
                      checked={filter === "litchi"}
                      onChange={handleFilterChange}
                      style={{ transform: "scale(1.5)" }}
                    />{" "}
                    grapes
                  </label>
                </div>
                <div className="my-">
                  <label
                    className="form-check-label d-flex gap-2"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <input
                      type="checkbox"
                      name="filter"
                      value="grapes"
                      checked={filter === "grapes"}
                      onChange={handleFilterChange}
                      style={{ transform: "scale(1.5)" }}
                    />{" "}
                    litchi
                  </label>
                </div>
                <div className="my-">
                  <label
                    className="form-check-label d-flex gap-2"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <input
                      type="checkbox"
                      name="filter"
                      value="plums"
                      checked={filter === "plums"}
                      onChange={handleFilterChange}
                      style={{ transform: "scale(1.5)" }}
                    />{" "}
                    Plums
                  </label>
                </div>

                <div className="my-">
                  <label
                    className="form-check-label d-flex gap-2"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <input
                      type="checkbox"
                      name="filter"
                      value="gua"
                      checked={filter === "gua"}
                      onChange={handleFilterChange}
                      style={{ transform: "scale(1.5)" }}
                    />{" "}
                    Gua
                  </label>
                </div>

                <div>
                  <label
                    className="form-check-label d-flex gap-2"
                    style={{ fontSize: "1.2rem" }}
                  >
                    <input
                      type="checkbox"
                      name="filter"
                      value="others"
                      checked={filter === "others"}
                      onChange={handleFilterChange}
                      style={{ transform: "scale(1.5)" }}
                    />{" "}
                    Others
                  </label>
                </div>

              </div>
            </div>

          </div>

          <div className="col-md-">
            <div className="row">
              {listings.length !== 0 ? (
                listings.map((listing) => (
                  <div key={listing.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card">
                      <div className="card-overlay">
                        <img
                          src={
                            "https://raw.githubusercontent.com/dharmagktr/fruits_images/main/" +
                            listing.image
                          }
                          className="card-img-top im"
                          alt={listing.title}
                          style={{ height: "200px", objectFit: "cover" }}
                          onError={replaceImage}
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title capitalize">{listing.name}</h5>
                        <div className="card-title ">{listing.tname}</div>
                        <div className="d-flex justify-content-between">
                          <p className="card-text">
                            Price: {listing.price} Rs
                          </p>
                          <p className="card-text">
                            {listing.piece} Kg.
                          </p>
                        </div>
                        <Link
                          className="decoration"
                          href={
                            "https://api.whatsapp.com/send?phone=918973759690&text=" +
                            listing.name
                          }
                          target="_blank"
                        >
                          <div className="d-flex    text-success align-items-center gap-2">
                            <div>Contact</div>
                            <ImWhatsapp />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center">No data available</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <section class="footer mt-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 ps-4 ps-lg-0">
              <div class="mt-4 mb-4">
                <div className="h3 text-decoration-underline">Service</div>
                <div className="text-secondary">
                  Online shopping can be a convenient and enjoyable experience!
                  You can browse a wide range of products, compare prices easily,
                  and often find great deals. Do you have specific questions or
                  need tips contact on Admin...
                </div>

              </div>
            </div>
            <div class="col-lg-7">
              <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-4 mt-4 ps-4 ps-lg-0 ">
                  <div class="h3 text-decoration-underline">Company</div>
                  <div className="">wiser</div>
                  <div className="">contact</div>
                  <div className="">blog</div>
                  <div className="">careers</div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4 mt-4 ps-4 ps-lg-0">
                  <div class="h3 text-decoration-underline">support</div>
                  <div>help and support</div>
                  <div>instructor</div>
                  <div>tutorial</div>
                  <div>user friendly</div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg- mt-4 ps-4 ps-lg-0">
                  <div class="h3 text-decoration-underline">get in touch</div>
                  <div>622 304</div>
                  <div>Email: prakashvadakadu8@gamil.com</div>
                  <div>Phone: 7339628276</div>
                </div>
              </div>
            </div>
          </div>
          <div class="underline m-5"></div>
          <div>© 2023 Wiser-UI, Inc. All Rights Reserved</div>
        </div>
      </section>
      <style jsx>{`
        .card:hover {
          border-radius: 8px;
          transition: all 0.7s;
          width: 101%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
           scale: 1.1;
        }
      `}</style>
    </>
  );
};

export default HomeListing;
