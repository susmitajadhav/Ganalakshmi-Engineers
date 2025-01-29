import React from 'react';
import './CompanyDetails.css'; // CSS file for styling

const CompanyDetails = () => {
  return (
    <div className="company-container">
      <div className="image-side">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0v15p7ir2dHmNithECf37L0Sts-ppCN8YA&s" alt="Company" />
      </div>
      <div className="details-side">
        <h1>Manufacturer Details</h1>
    <p>We started off by establishing “Control Systems Engineers” in the year 1996 with an objective to manufacture custom-made Electrical and Instrumentation Control Panels for diverse industries. We observed tremendous growth in our business, especially in the renewable energy sector and continuing to move forward, “CSE Panels Private Limited” was incorporated in 2006 with a focus on catering to our customers for the wind energy.

22+ years of experience catering to various customer requirements of diverse industries, we are proud to have achieved great knowledge and fine workmanship in the manufacturing of E&I Control Panels. As a part of our quest to continually grow ourselves and to be a part of an ever-changing industry, we have diversified ourselves to Industrial Automation and Control.</p>
      </div>
    </div>
  );
};

export default CompanyDetails;
