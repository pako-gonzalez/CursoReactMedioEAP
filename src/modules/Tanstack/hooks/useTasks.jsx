import { useQuery } from "@tanstack/react-query"


const getTareas = async () => {
    const response = await fetch('http://localhost:3001/tareas')
    if (!response.ok) throw new Error('Network response was not ok')
    return response.json()
}

export const useTasks = () => {

    const tasksQuery = useQuery({
        queryFn: getTareas,
        queryKey: ['tareas'],
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

    return {tasksQuery}
}