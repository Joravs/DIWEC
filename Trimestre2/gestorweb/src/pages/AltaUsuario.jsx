export default function AltaUsuario(){
    return (
        <div className="form">
            <h2>Alta de Usuario</h2>
            <form>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required/>
                <br/>
                <label for="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido" required/>
                <br/>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required/>
                <br/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
                <br/>
                <label for="fechaNac">Fecha Nacimiento:</label>
                <input type="date" id="fechaNac" name="fechaNac" required/>
                <br/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    );
}