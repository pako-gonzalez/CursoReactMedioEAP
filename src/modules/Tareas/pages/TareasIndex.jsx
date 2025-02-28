import { useEffect, useState } from "react"
import { columns } from "../components/columns"
import { DataTable } from "../components/data-table"

export const TareasIndex = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/tareas')
            .then(resp => resp.json())
            .then(data => setData(data))
            .catch( error => console.log(error))
    }, [])

    return (
        <div className="container mx-auto py-10 p-12">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
