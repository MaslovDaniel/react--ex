
export function Animals({animalInfos}) {


return <section>
<h1> Rare Animals</h1>
<table className="animal-table">

    {animalInfos.map(animal => 
    <tr key={animal.count}> 
    <th>{animal.type}</th> 
    <th>{animal.count}</th> 
     <th><a href={`https://www.google.com/search?q=${animal.type}`} target="_blank">Search</a></th>
     </tr> )}
</table>
   
</section>

}



