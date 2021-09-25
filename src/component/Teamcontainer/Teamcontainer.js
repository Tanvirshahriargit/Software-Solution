import React, { useEffect, useState } from 'react';
import Emloyee from '../Emloyee/Emloyee';
import Teamcost from '../Teamcost/Teamcost';

const Teamcontainer = () => {
    const [person, setperson] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
        .then(data=>setperson(data))
    },[])
    return (
        <div>
            <div>
                <div className="row">
                    <div className='col-md-9'>
                        <div className="row row-cols-1 row-cols-md-3 g-4"> 
                        {
                            person.map(employee=><Emloyee employee={employee}></Emloyee>)
                        }
                        </div>
                    </div>
                    <div className='col-md-3'>
                    <Teamcost></Teamcost>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Teamcontainer;