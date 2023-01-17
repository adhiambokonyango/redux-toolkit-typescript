import {useAppSelector} from "../store/store";

 const List = () =>{
    const persons = useAppSelector(state => state.person.persons)
    return(
     <>
         <ul>
             {
                 persons.map(person => (
                     <ul key ={person.id}>
                         <ul>{person.name}</ul>
                     </ul>
                 ))
             }
         </ul>
     </>
    )
}

export default List;