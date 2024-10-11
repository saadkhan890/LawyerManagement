import React from 'react';
import { Link } from 'react-router-dom';
import './ListedLawyers.css';

const ListedLawyers = () => {
    const lawyers = [
        {
            name: 'Anuj Kumar',
            title: 'Cheque Bounce, Civil',
            image: require('../../assets/Images/Lawyer1.jpg'),
            id: 1, // Add unique IDs
        },
        {
            name: 'Rahul Singh',
            title: 'Cheque Bounce, Civil, Property, Recovery, Wills/Trusts',
            image: require('../../assets/Images/Lawyer2.jpg'),
            id: 2,
        },
        {
            name: 'Amit Singh',
            title: 'Cheque Bounce, Recovery, Business Lawyer',
            image: require('../../assets/Images/Lawyer3.jpg'),
            id: 3,
        },
        {
            name: 'Sanjeev Kumar',
            title: 'Business Lawyer, Civil, Criminal, Domestic Violence, Property, Wills/Trusts',
            image: require('../../assets/Images/Lawyer4.jpg'),
            id: 4,
        },
    ];

    return (
        <div className="lawyers-list-container">
            <h2>Listed Lawyers / Advocates</h2>
            <div className="breadcrumbs">Home &gt; Pages &gt; Listed Lawyers / Advocates</div>
            <div className="lawyers-list">
                {lawyers.map((lawyer) => (
                    <div className="lawyer-card" key={lawyer.id}>
                        <img src={lawyer.image} alt={lawyer.name} className="lawyer-image" />
                        <h3>
                            <Link to={`/lawyer/${lawyer.id}`}>{lawyer.name}</Link>
                        </h3>
                        <p className="lawyer-title">{lawyer.title}</p>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button>Previous</button>
                <button>1</button>
                <button>Next</button>
            </div>
        </div>
    );
};

export default ListedLawyers;
