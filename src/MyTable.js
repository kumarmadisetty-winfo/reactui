import React from 'react';
import ReactTable from 'react-table';

class MyTable extends React.Component {
    render() {
        const tableData = [{
            name: 'Aman',
            age: 20,
            course: 'BCA'
        }, {
            name: 'Anubhav',
            age: 21,
            course: 'MCA'
        }, {
            name: 'Akash',
            age: 22,
            course: 'MCA'
        }, {
            name: 'Amit',
            age: 20,
            course: 'BCA'
        }, {
            name: 'Keshav',
            age: 21,
            course: 'MCA'
        }, {
            name: 'Kailash',
            age: 20,
            course: 'B.sc'
        }, {
            name: 'Govind',
            age: 20,
            course: 'B.com'
        }, {
            name: 'Raghav',
            age: 21,
            course: 'MCA'
        }]
        const columns = [{
            Header: 'Name',
            accessor: 'name'
        }, {
            Header: 'Age',
            accessor: 'age'
        }, {
            Header: 'Course',
            accessor: 'course'
        }]
        return (
            <center>
                <div>
                    <ReactTable
                        data={tableData}
                        columns={columns}
                        defaultPageSize={2}
                        pageSizeOptions={[2, 4, 6, 8]
                        }
                    />
                </div>
            </center>
        )
    }
}
export default MyTable;