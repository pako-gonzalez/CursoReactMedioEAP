import React from 'react'
import { Loader2, RefreshCcw } from 'lucide-react'
import { TaskCard } from './TaskCard'
import { useTasks } from '../hooks/useTasks'
import { Button } from '@/components/ui/button'

export function Tanstack() {

  const { tasksQuery } = useTasks()

  if (tasksQuery.isPending) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin w-10 h-10 text-indigo-500" />
      </div>
    )
  }

  if (tasksQuery.error) {
    return (
      <div className="text-center text-red-600 py-10">
        Error: {tasksQuery.error.message}
      </div>
    )
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Tareas</h1>
      <div className="text-center mb-6">
        <Button onClick={() => tasksQuery.refetch()}><RefreshCcw/> Recargar</Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tasksQuery.data.map((task, i) => <TaskCard task={task} key={i} />)}
      </div>
    </div>
  )
}
