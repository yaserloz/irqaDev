import React from 'react'
import SemanticUiList from './SemanticUiList'
const ListLayout = () => {
    return (
        <>
            <SemanticUiList posts={[
                {
                    id: 1,
                    category: 2,
                    title: "postNumber1",
                    text: 'Bla Bla Bla',
                    date: "11/12/2020",
                    author: "alqaisi yasir"
                },
                {
                    id: 2,
                    category: 2,
                    title: "postNumber2",
                    text: 'Bla Bla Bla',
                    date: "11/12/2020",
                    author: "alqaisi yasir"
                },
                {
                    id: 3,
                    category: 2,
                    title: "postNumber3",
                    text: 'Bla Bla Bla',
                    date: "11/12/2020",
                    author: "alqaisi yasir"
                }
            ]} />
        </>
    )
}

export default ListLayout;