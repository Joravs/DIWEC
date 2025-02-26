export default function ModificarUsuario(){
    return (
        <div className="form">
            <h2>Eliminacion de Usuario</h2>
            <form>
                <label for="search">Nombre:</label>
                <input type="search" id="search" name="search" required/>
                <br/>
                <input type="submit" value="Buscar"/>
            </form>
        </div>
    );
}