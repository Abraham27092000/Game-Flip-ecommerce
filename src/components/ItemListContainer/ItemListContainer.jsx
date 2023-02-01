const ItemListContainer = ({saludo}) => {
    return (
        <div>
            <h1
                style={{
                    padding: 10,
                    color: "black",
                    fontSize: 30,
                    fontWeight: 900
                }}
                >
                { saludo }
            </h1>
        </div>
    );
}


export default ItemListContainer;
