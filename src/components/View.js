import React from 'react'


export const View = ({books,deleteBook}) => {
    
    return books.map(book=>(
        
        <tr>
            <td>{book.title}</td>
            <td>{book.desc}</td>
            <td>{book.email}</td>
            <td>{book.range}</td>
        </tr>            
    
))
}
