class Usuario {
    constructor(nombre, apellido, ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = [];
        this.libros = [];
    }
    getFullName = () =>{
        console.log(`Hola ${this.nombre} ${this.apellido}, bienvenida/o!`)
    }
    addMascotas = (nombreMascota) =>{
        this.mascotas.push(nombreMascota)
    }
    countMascotas = () =>{
        console.log(`Tenes ${this.mascotas.length} mascotas`)
    }
    addBook = (libro, autor) => {
        this.libros.push({
            libro: libro,
            autor: autor
        })
    }
    getBookNames = () =>{
        return this.libros.map(libro => libro.libro)
    }
}

const usuario = new Usuario ("Stephanie", "Huamani")

usuario.getFullName()

usuario.addMascotas("Perro")
usuario.addMascotas("Gato")

usuario.countMascotas()


usuario.addBook("Harry Potter", "J.K.Rowling")
usuario.addBook("Cuentos de buenas noches para niñas rebeldes", "Elena Favilli")

console.log(`Los libros favoritos de este usuario son:
${usuario.getBookNames()}`)