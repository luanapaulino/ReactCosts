import {useState, useEffect} from 'react'
import styles from './ProjectForm.module.css'
import { Submit } from '../form/Submit'
import { Entrada } from '../form/Entrada'
import { InputSelect } from '../form/InputSelect'

export function ProjectForm({handleSubmit, btnText, projectData}){
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

   useEffect(() => {
    fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
   }, [])

   const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
   }

   function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value})
        console.log(project)
   }

    return(
        <div onSubmit={submit} className={styles.div}>
            <Entrada type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" handleOnChange={handleChange}/>
            <Entrada type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" handleOnChange={handleChange}/>
            <InputSelect name="Selecione" options={categories}/>
            <Submit text={btnText}/>
        </div>
    )
}