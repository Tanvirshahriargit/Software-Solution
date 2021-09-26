import React from 'react';

const Emloyee = (props) => {
    // console.log(props.employee);
    const { img, name, age, des, type, salary, country } = props.employee;
    return (
        <div>
                <div class="col shadow">
                 <div class="card">
                        <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">{ name}</h5>
                <p class="card-text">Designation: { des}</p>
                <p class="card-text"><small>Ages: { age}</small></p>
                <p class="card-text">Job-Type: { type}</p>
                <p class="card-text">Salary: { salary}</p>
                <p class="card-text">Country: {country}</p>
                {/* Button and Event Handeler */}
                <button onClick={() => props.handleMemberCost(props.employee)}
                className="btn btn-outline-info text-dark" type="submit"><i class="fas fa-user-plus"></i> Add Team Member</button>
                </div>
                </div>
                </div>
        
        </div>
    );
};

export default Emloyee;