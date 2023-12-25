import React from "react";
import "./contact.css";
import { contact } from "../components/data/Data";
const Contact = () => {
  return (
    <>
      <section className="contact-container">
        <div className="rgfs">
          <div className="row8">
            <div className="left">
              <img src="../images/contact.png" alt="" />
            </div>
            <div className="right">
              {contact.map((item) => (
                <div className="frcs">
                  <img src={item.cover} alt="" />

                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="contact1-container">
          <div>
            <div className="row10">
              <div className="left">
                <img src="./images/right.png" alt="" />
              </div>
              <div className="mid">
                <h1>Let’s Get In Touch</h1>
              </div>
              <div className="right">
                <p>
                  At Codecamp, our mission is to make coding education
                  accessible to everyone, regardless of their background or
                  financial means. We believe that everyone should have the
                  opportunity to learn to code and pursue a career.
                </p>
              </div>
            </div>
          </div>
          <div className="from">
            <form>
              <div className="row11">
                <div className="form1">
                  <div className="from2">
                    <label>Name</label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="Enter Your Fullname"
                    />
                  </div>
                  <div className="from2">
                    <label>Email Id</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Your Email Id"
                    />
                  </div>
                </div>

                <div className="form1">
                  <div className="from2">
                    <label for="name">Phone No</label>
                    <input
                      type="phone"
                      id="phone"
                      name="phone"
                      placeholder="Please Enter Phone No"
                    />
                  </div>

                  <div className="from2">
                    <label for="myfile">Project Documents</label>
                    <input
                      type="file"
                      id="project_documents"
                      name="project_documents"
                    />
                  </div>
                </div>

                <div className="form1">
                  <div className="from2">
                    <label for="father_occ">Father’s Occupation</label>
                    <input
                      type="text"
                      id="father_occ"
                      name="father_occ"
                      placeholder="Please Enter Father’s Occupation"
                    />
                  </div>

                  <div className="from2 anual">
                    <label for="income">Annual Income</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      name="annualincome"
                    >
                      <option disabled="">Select annual income</option>
                      <option value="1 lack - 3 lacks">1 lack - 3 lacks</option>
                      <option value="3 lacks - 7 lacks">
                        3 lacks - 7 lacks
                      </option>
                      <option value="Above 7 lacks">Above 7 lacks</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
