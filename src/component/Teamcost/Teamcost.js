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
            <h3>Added Member: {cost.length}</h3>
            <h4>Total Costing: {total}</h4>
            
                {cost.map((member) => <p className='text-success'>Name: {member.name }</p>)}
        </div>
    );
};

export default Teamcost;