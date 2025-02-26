import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import React, { useState } from 'react'

export const Formulario = () => {

    const defaultTask = {
        titulo: '',
        responsable: '',
        errorTitulo: '',
        errorResponsable: '',
        activo: false
    }

    const [task, setTask] = useState(defaultTask)
    const [tasks, setTasks] = useState([])

    const { titulo, responsable, errorTitulo, errorResponsable } = task

    const handleClick = (e) => {
        e.preventDefault()
        if (task.titulo == '') {
            setTask({
                ...task,
                errorTitulo: 'Este campo no puede estar vacío',
            })
            return
        }
        if (task.responsable == '') {
            setTask({
                ...task,
                errorResponsable: 'Este campo no puede estar vacío',
            })
            return
        }
        setTasks([task, ...tasks])
        setTask(defaultTask)
    }

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
            errorTitulo: '',
            errorResponsable: ''
        })
    }

    const handleActiveTaskStatus = (index) => {
        const updatedTasks = tasks.map((tarea, i) =>
            i == index ? { ...tarea, activo: !tarea.activo } : tarea
        )
        setTasks(updatedTasks)
    }

    return (
        <>
            <h1 className="m-4 text-4xl font-bold">Formulario</h1>
            <div className="grid gap-8 md:grid-cols-2 m-4">
                {/* Columna Izquierda: Formulario */}
                <div>
                    <form className="space-y-4 p-4 border rounded-md">
                        <div className="space-y-2">
                            <Label htmlFor="titulo">Título</Label>
                            <Input
                                id="titulo"
                                name="titulo"
                                placeholder="Ingresa el título"
                                onChange={handleChange}
                                value={titulo}
                            />
                            <div className='text-sm text-red-500'>{errorTitulo}</div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="responsable">Responsable</Label>
                            <Input
                                id="responsable"
                                name="responsable"
                                placeholder="Ingresa el responsable"
                                onChange={handleChange}
                                value={responsable}
                            />
                            <div className='text-sm text-red-500'>{errorResponsable}</div>
                        </div>
                        <Button variant="default" className="m-2" onClick={handleClick}>
                            Guardar
                        </Button>
                    </form>
                </div>

                {/* Columna Derecha: Lista con checkbox, título y responsable */}
                <div className="p-4 border rounded-md">
                    <ul className="space-y-4">
                        {tasks.map(({ titulo, responsable, activo }, index) =>
                            <li className="flex items-center space-x-2" key={index}>
                                <Checkbox className="h-6 w-6" checked={activo} onClick={() => handleActiveTaskStatus(index)} />
                                <div>
                                    <p className="font-semibold text-lg">{titulo}</p>
                                    <p className="text-sm text-muted-foreground">
                                        Responsable: <span className="font-bold">{responsable}</span>
                                    </p>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}