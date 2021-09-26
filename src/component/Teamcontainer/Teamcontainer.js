import React, { useEffect, useState } from 'react';
import Emloyee from '../Emloyee/Emloyee';
import Teamcost from '../Teamcost/Teamcost';

const Teamcontainer = () => {
    const [person, setperson] = useState([]);
    // sate for Member add
    const [cost, setCost] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data=>setperson(data))
    }, [])
    
    //Event Handeler For Add Member
    const handleMemberCost = (member) => {
        const newCost = [...cost, member];
        setCost(newCost);
    }
    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-md-9 ms-3 mb-3">
                        <div className="row row-cols-1 row-cols-md-3 g-4"> 
                        {
                                person.map(employee => <Emloyee key={employee.name}
                                employee={employee}
                                handleMemberCost={handleMemberCost}
                                ></Emloyee>)
                        }
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <Teamcost
                        cost={cost}
                        ></Teamcost>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Teamcontainer;