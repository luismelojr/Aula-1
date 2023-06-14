import React, {useEffect, useState} from "react";
import {Blog} from "./Blog.tsx";

interface ListInterface {
    title: string;
    description: string;
}
export const NoteList: React.FC = () => {
    const [lists, setLists] = useState<ListInterface[]>([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        const info = JSON.parse(localStorage.getItem('my-list') || '[]')
        setLists(info || [])
    }, [])

    function handleList() {
        const newList = lists
        newList.push({
            title,
            description
        })
        setLists(newList)
        setTitle('')
        setDescription('')
        localStorage.setItem('my-list', JSON.stringify(newList))
    }

    function removeInfoList(title: string) {
        const newList = lists.filter((item) => item.title !== title)
        setLists(newList)
        localStorage.setItem('my-list', JSON.stringify(newList))
    }

    return (
        <div>
            <form>
                <div>
                    <label>Titulo</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Descricao</label>
                    <input value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                    <button type={'button'} onClick={handleList}>Cadastrar</button>
                </div>
            </form>
            <div>
                {lists.length > 0 ? (
                    lists.map((item, index) => (
                        <React.Fragment key={index}>
                            <Blog title={item.title} description={item.description}/>
                            <button onClick={() => removeInfoList(item.title)}>Remove</button>
                        </React.Fragment>
                    ))
                ) : (
                    <h1>Sem dados</h1>
                )}
            </div>
        </div>
    )
}

