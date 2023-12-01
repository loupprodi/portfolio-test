
const MAX_ITEMS = 9;
// para pegar o numero do meio, então max_itens -1 divido por 2
const MAX_LEFT = (MAX_ITEMS -1) /2;

// eslint-disable-next-line react/prop-types
export const Pagination = ({limit, totalItens, offset, setOffset}) => {
    /// caso o offset seja 0 para ele nao divir ele sempre sera 1
    const currentPage = offset ? (offset/ limit) + 1 : 1;
    const pages = Math.ceil( totalItens / limit);
    const first = Math.max(currentPage - MAX_LEFT, 1);


    return(
       <ul>
        {/**no map do primeiro array, o primeiro argumento é undefined, e so vamos usar o index para paginação */}
           {Array.from({length: MAX_ITEMS}).map((_, index)=> index + first)
           .map((page)=>{
            <li>
                <button 
                onClick={()=>setOffset((page -1) * limit)}
                >
                    {page}
                </button>
            </li>
           })} 
       </ul>
    )
}