// Función para cargar los productos desde localStorage
const cargarProductos = () => {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    // con getItem recupero el valor guardado
    //con json.parse convierto en objeto js el json para trabajarlo
    const listaProductos = document.getElementById('productos-lista');
    //producto-lista en el index.html
    listaProductos.innerHTML = '';  // Limpiar la lista antes de agregar

    productos.forEach(producto => {
        const productItem = document.createElement('li');
        productItem.classList.add('producto-card');
        productItem.innerHTML = `
            <div>
                <img src="${producto.imagen}" alt="${producto.nombre}"><br>
                <strong>${producto.nombre}</strong><br><br>
                $${producto.precio}<br>
            
            <button onclick="eliminarProducto(${producto.id})">🗑️</button>
            </div>
        `;
        listaProductos.appendChild(productItem);
    });
};

// Función para agregar un producto al localStorage
const agregarProducto = (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const imagen = document.getElementById('imagen').value;

    // Crear un nuevo producto
    const nuevoProducto = {
        id: Date.now(), // Usamos el timestamp como ID único
        nombre,
        precio,
        imagen
    };

    // Recuperar productos existentes del localStorage, o crear un arreglo vacío si no existen
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    // Añadir el nuevo producto al arreglo
    productos.push(nuevoProducto);

    // Guardar el arreglo de productos actualizado en localStorage
    localStorage.setItem('productos', JSON.stringify(productos));

    // Recargar la lista de productos en la página
    cargarProductos();

    // Limpiar el formulario
    document.getElementById('product-form').reset();
};

// Función para eliminar un producto del localStorage
const eliminarProducto = (id) => {
    // Obtener los productos actuales desde localStorage
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    // Filtrar el producto que se va a eliminar
    const productosActualizados = productos.filter(producto => producto.id !== id);

    // Guardar los productos actualizados en localStorage
    localStorage.setItem('productos', JSON.stringify(productosActualizados));

    // Recargar la lista de productos
    cargarProductos();
};

// Limpiar el formulario de agregar producto
const limpiarFormulario = () => {
    document.getElementById('product-form').reset();
};

// Configurar eventos
document.getElementById('product-form').addEventListener('submit', agregarProducto);
document.getElementById('clear-button').addEventListener('click', limpiarFormulario);

// Cargar los productos cuando la página se carga
cargarProductos();
