import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css"; 
const Contacts = ({ contacts }) => {
    const columns = [{
        Header: 'id',
        accessor: 'id'
    }, {
        Header: 'name',
        accessor: 'name',
        sort:true
    }, {
        Header: 'country',
        accessor: 'country',
        sort:true
    }]
    return (
        <div>
            <center><h1>Contact List</h1></center>
            <ReactTable
                        data={contacts}
                        columns={columns}
                        defaultPageSize={2}
                        pageSizeOptions={[2, 4, 6, 8]
                        }
                    />
        </div>
    )
};

export default Contacts;