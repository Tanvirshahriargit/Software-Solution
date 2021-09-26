import React from 'react';

const Teamcost = (props) => {
    // console.log(props.cost);
    const { cost } = props || {}
    // console.log(cost);

    //Total Cost 
    const sumReducer = (previousValue, currentValue) => previousValue + currentValue.salary;
    const total = cost.reduce(sumReducer, 0);
    return (
        <div>
            <h6 className="bg-info text-light rounded-pill p-2"><i class="fas fa-user-check text-light"></i> Added Member: {cost.length}</h6>
                {cost.map((member) => <p className='shadow p-2 mb-3 mt-2 bg-body rounded'>Name: {member.name }</p>)}
            <h4>Total Costing: <br/> <i class="fas fa-dollar-sign"></i> {total}</h4>
        </div>
    );
};

export default Teamcost;