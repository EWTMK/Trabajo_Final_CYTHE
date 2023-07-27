import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';



const app = express();
app.use(cors());
app.use(express.json());



const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cythe'
});

conexion.connect(function (error) {
    if (error) {
        console.log("Error al conectar a la base de datos");
    } else {
        console.log("Conectado exitosamente");
    }
});




//path


const __dirname = path.resolve();

//multer

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, 'uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});


const upload = multer({ storage: storage });




app.get('/obtenerProductos', (peticion, respuesta) => {
    const sql = "select * from productos";
    conexion.query(sql, (error, resultado) => {
        if (error) return respuesta.json({ mensaje: "error" });
        return respuesta.json({ mensaje: "exitoso", contenido: resultado });
    });
});

app.get('/obtenerCategorias', (peticion, respuesta) => {
    const sql = "select * from categorias";
    conexion.query(sql, (error, resultado) => {
        if (error) return respuesta.json({ mensaje: "error" });
        return respuesta.json({ mensaje: "exitoso", contenido: resultado });
    });
});

app.post('/acceso', (peticion, respuesta) => {
    const sql = "select * from usuarios1 where correo_electronico=? and contrasenia=SHA1(?)";
    conexion.query(sql, [peticion.body.correo_electronico, peticion.body.contrasenia],
        (error, resultado) => {
            if (error) return respuesta.json({ mensaje: "error en la consulta" });
            if (resultado.length > 0) {
                const token = jwt.sign({ usuario: resultado[0].correo_electronico }, 'clave_secreta', { expiresIn: '1d' });
                respuesta.cookie('token', token);
                return respuesta.json({ Estatus: "Correcto", usuario: token });
            } else {
                return respuesta.json({ Estatus: "Error", Error: "Usuario o contraseña incorrecta" });
            }
        });
});

//login como admin 

app.post('/acceso_admin', (peticion, respuesta) => {
    const sql = "select * from administradores where correo_electronico=? and contrasenia=SHA1(?)";
    conexion.query(sql, [peticion.body.correo_electronico, peticion.body.contrasenia],
        (error, resultado) => {
            if (error) return respuesta.json({ mensaje: "error en la consulta" });
            if (resultado.length > 0) {
                const token = jwt.sign({ usuario: resultado[0].correo_electronico }, 'clave_secreta', { expiresIn: '1d' });
                respuesta.cookie('token', token);
                return respuesta.json({ Estatus: "Correcto", usuario: token });
            } else {
                return respuesta.json({ Estatus: "Error", Error: "Usuario o contraseña incorrecta" });
            }
        });
});

app.post('/registrar', (peticion, respuesta) => {
    const sql = "INSERT INTO usuarios1 (correo_electronico, contrasenia) VALUES (?, SHA1(?))";
    conexion.query(sql, [peticion.body.correo_electronico, peticion.body.contrasenia],
        (error, resultado) => {
            if (error) {
                return respuesta.json({ mensaje: "Error al registrar el usuario", error });
            }
            return respuesta.json({ Estatus: "Correcto" });
        });
});


//Mcategorias 


app.post('/agregarCategoria', upload.single('imagen'), (peticion, respuesta) => {
    const { nombre, descripcion } = peticion.body;
    const imagen = peticion.file.filename; // Obtenemos el nombre de la imagen almacenada por multer
    const sql = "INSERT INTO categorias (nombre, descripcion, imagen) VALUES (?, ?, ?)";
    conexion.query(sql, [nombre, descripcion, imagen], (error, resultado) => {
        if (error) {
            return respuesta.json({ Estatus: "Error", Error: "Error al agregar la categoría" });
        }
        return respuesta.json({ Estatus: "Correcto" });
    });
});

app.post('/eliminarCategoria', (peticion, respuesta) => {
    const { id } = peticion.body;
    const sql = "DELETE FROM categorias WHERE id = ?";
    conexion.query(sql, [id], (error, resultado) => {
        if (error) {
            return respuesta.json({ Estatus: "Error", Error: "Error al eliminar la categoría" });
        }
        return respuesta.json({ Estatus: "Correcto" });
    });
});


//Mprod

app.post('/agregarProducto', upload.single('imagen'), (peticion, respuesta) => {
    const { nombre, descripcion, precio } = peticion.body;
    const imagen = peticion.file.filename; // Obtenemos el nombre de la imagen almacenada por multer
    const sql = "INSERT INTO productos (nombre, descripcion, imagen, precio) VALUES (?, ?, ?, ?)";
    conexion.query(sql, [nombre, descripcion, imagen, precio], (error, resultado) => {
        if (error) {
            return respuesta.json({ Estatus: "Error", Error: "Error al agregar el producto" });
        }
        return respuesta.json({ Estatus: "Correcto" });
    });
});


app.post('/eliminarProducto', (peticion, respuesta) => {
    const { id } = peticion.body;
    const sql = "DELETE FROM productos WHERE id = ?";
    conexion.query(sql, [id], (error, resultado) => {
        if (error) {
            return respuesta.json({ Estatus: "Error", Error: "Error al eliminar el producto" });
        }
        return respuesta.json({ Estatus: "Correcto" });
    });
});


//Musuarios

app.get('/obtenerUsuarios', (peticion, respuesta) => {
    const sql = "select * from usuarios1";
    conexion.query(sql, (error, resultado) => {
        if (error) return respuesta.json({ mensaje: "error" });
        return respuesta.json({ mensaje: "exitoso", contenido: resultado });
    });
});

app.post('/agregarUsuario', (peticion, respuesta) => {
    const { correo_electronico, contrasenia } = peticion.body;
    const sql = "INSERT INTO usuarios1 (correo_electronico, contrasenia) VALUES (?, SHA1(?))";
    conexion.query(sql, [correo_electronico, contrasenia], (error, resultado) => {
        if (error) {
            return respuesta.json({ Estatus: "Error", Error: "Error al agregar el usuario" });
        }
        return respuesta.json({ Estatus: "Correcto" });
    });
});

app.post('/eliminarUsuario', (peticion, respuesta) => {
    const { id } = peticion.body;
    const sql = "DELETE FROM usuarios1 WHERE id = ?";
    conexion.query(sql, [id], (error, resultado) => {
        if (error) {
            return respuesta.json({ Estatus: "Error", Error: "Error al eliminar el usuario" });
        }
        return respuesta.json({ Estatus: "Correcto" });
    });
});



// Imagenes cat

// Imagenes cat

app.get('/obtenerImagen/:id', (peticion, respuesta) => {
    const { id } = peticion.params;
    const sql = "SELECT imagen FROM categorias WHERE id = ?";
    conexion.query(sql, [id], (error, resultado) => {
        if (error) {
            return respuesta.status(500).json({ mensaje: "Error al obtener la imagen" });
        }

        if (resultado.length === 0) {
            return respuesta.status(404).json({ mensaje: "Imagen no encontrada" });
        }

        const imagen = resultado[0].imagen;
        respuesta.writeHead(200, { 'Content-Type': 'image/jpeg' });
        respuesta.end(imagen, 'binary');
    });
});



// Ruta para insertar datos del formulario en la tabla "formularios"

  // Ruta para insertar datos del formulario en la tabla "formularios"
app.post('/insertarFormulario', (req, res) => {
    const { comentarios, correo } = req.body;
  
    // Realiza la inserción en la tabla "formularios"
    const sql = 'INSERT INTO formulario (comentarios, correo_electronico) VALUES (?, ?)';
    conexion.query(sql, [comentarios, correo], (error, resultado) => {
      if (error) {
        console.error('Error al insertar datos en la tabla "formularios":', error);
        res.status(500).json({ mensaje: 'Error al insertar datos en la tabla "formularios"' });
      } else {
        console.log('Datos insertados correctamente en la tabla "formularios".');
        res.status(200).json({ mensaje: 'Datos insertados correctamente en la tabla "formularios"' });
      }
    });
  });
  





app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

  

app.listen(8081, () => {
    console.log("Servidor iniciado");
});


app.post('/insertarFormulario', (req, res) => {
    const { comentarios, correo, nombreApellido, numero, numeroTarjeta, cvv, total, productos } = req.body;
  
    // Realiza la inserción en la tabla "formularios"
    const sql = 'INSERT INTO formularios (comentarios, correo_electronico, nombre_apellido, numero, numero_tarjeta, cvv, total, productos) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    conexion.query(sql, [comentarios, correo, nombreApellido, numero, numeroTarjeta, cvv, total, JSON.stringify(productos)], (error, resultado) => {
      if (error) {
        console.error('Error al insertar datos en la tabla "formularios":', error);
        res.status(500).json({ mensaje: 'Error al insertar datos en la tabla "formularios"' });
      } else {
        console.log('Datos insertados correctamente en la tabla "formularios".');
        res.status(200).json({ mensaje: 'Datos insertados correctamente en la tabla "formularios"' });
      }
    });
  });

  





