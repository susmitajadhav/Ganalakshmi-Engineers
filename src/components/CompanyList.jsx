import React from 'react';
import './CompanyList.css'; // Make sure to create a CSS file for styling

const CompanyCard = ({ company }) => {
  return (
    <div className="company-card">
      <div className="card-image">
        <img src={company.logo} alt={company.name} />
      </div>
      <div className="card-details">
        <h2 className="company-name">{company.name}</h2>
        <p className="company-description">{company.description}</p>
      </div>
    </div>
  );
};

const CompanyList = () => {
  const companies = [
    {
      name: 'Relay Card',
      description: 'A leading tech company focused on innovation in the tech industry.',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNuPchksyg4jkduPwFtfPS6ADnjsbsH-EypHXTr6wfLSSimU0duLtJ2ESdX2x8-_lPh0&usqp=CAU',
  
    },
    {
      name: 'Machinery Manufacturer',
      description: 'A sustainable company providing eco-friendly solutions worldwide.',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNuPchksyg4jkduPwFtfPS6ADnjsbsH-EypHXTr6wfLSSimU0duLtJ2ESdX2x8-_lPh0&usqp=CAU',
    },
    {
      name: 'Industrial Panel ',
      description: 'A leading automobile manufacturing company with a global presence.',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNuPchksyg4jkduPwFtfPS6ADnjsbsH-EypHXTr6wfLSSimU0duLtJ2ESdX2x8-_lPh0&usqp=CAU',
      
    },
  ];

  return (
    <div className="company-list">
      {companies.map((company, index) => (
        <CompanyCard key={index} company={company} />
      ))}
    </div>
  );
};

export default CompanyList;
