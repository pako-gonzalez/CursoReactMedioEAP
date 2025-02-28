import { useQuery } from "@tanstack/react-query"


const getTarea = async (id) => {
    const response = await fetch(`http://localhost:3001/tareas/${id}`  )
    if (!response.ok) throw new Error('Network response was not ok')
    return response.json()
}

export const useTask = (id) => {
    
    const taskQuery = useQuery({
        queryFn: () => getTarea(id),
        queryKey: ['tarea', id],
        // staleTime: 5000,
        placeholderData: [
            {
                id: '0',
                titulo: 'Primer título',
                responsable: 'venga... yo',
                activo: false
            },
        ]
    })

    return {taskQuery}
}