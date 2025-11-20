'use client';
interface ProductCardProps{
    productName: string;
    productDescription: string;
    isbn: string;
    price: string;

}

export function Productcard({
    productName,
    productDescription,
    isbn,
    price,
}:ProductCardProps){
    return(
        <>
            <div style={{border: '1px solid white', borderRadius:10, padding:20, width: 300, backgroundColor: '#363634ff'}}>
                <h3>{productName}</h3>
                <br/>
                <p>{productDescription}</p>
                <br/>
                <p>item: {isbn}</p>
                <br/>

                <div style={{height: '100%', display:'flex', justifyContent: 'end', alignSelf: 'end'}}><p style={{}}>$ {price}</p></div>
            </div>
        </>
    )
}