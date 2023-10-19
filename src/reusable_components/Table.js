import { useEffect, useState } from "react"
import { tableData, tableHeader } from "../utils/style"
import fetchData from "../custom_functions/fetchData";



function Table(props) {
    const [ data, setData ] = useState([]);
    const [ limit, setLimit ] = useState(props.limit || 10)
    const [ page, setPage ] = useState(1);


    useEffect(() => {
        fetchData(props.url, console.log, (data) => {console.log(data);setData(data)})
    }, [ page ])


    function togglePage(type) {
        if (type === 'prev' && page > 1) {
            setPage(page - 1)
        } else {
            setPage(page + 1)
        }
    }

    return(
        <div className="w-full">
            <table className='w-full'>
                <thead>
                    <tr>
                        {
                            props.options.map((opt, ind) => 
                                <th 
                                    key={ind} 
                                    className={ tableHeader }
                                >
                                    {opt.header}
                                </th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((dt, ind) => 
                            <tr key={ind}>
                                {
                                    props.options.map((opt,indx) => 
                                        <td 
                                            key={indx} 
                                            className={ tableData }
                                        >
                                            {opt.render ? opt.render(dt, ind) : dt[opt.key]}
                                        </td> 
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {
                props.pagination && 
                <div className="flex justify-center p-4">
                    <button onClick={() => togglePage('prev')}>Prev</button>
                    <span className="mx-8">Page : {page}</span>
                    <button onClick={() => togglePage('next')}>Next</button>
                </div>
            }
        </div>
    )
}

export default Table;