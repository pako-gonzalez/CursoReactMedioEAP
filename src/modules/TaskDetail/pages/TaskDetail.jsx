import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTask } from '../hooks/useTask'
import { Button } from '@/components/ui/button'
import { TaskCard } from '@/modules/Tanstack/components/TaskCard'

export const TaskDetail = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const { taskQuery } = useTask(id)

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-center mb-6">Tarea {id}</h1>
            <Button onClick={() => navigate('/tanstack')}>Regresar</Button>
            {taskQuery.data &&
                <>
                    <article class="flex max-w-xl flex-col items-start justify-between m-5 p-5 bg-gray-100">
                        <div class="group relative">
                            <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    {taskQuery.data.titulo}
                                </a>
                            </h3>
                            <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                                {taskQuery.data.responsable}
                            </p>
                        </div>
                    </article>
                </>
            }
        </div>
    )
}
