const fs = require("fs")

const path = "./products.json";

class Contenedor{
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo
    }

    async getAll() {
        let archivoDato = []
        try{
            archivoDato = await fs.promises.readFile("productos.txt", "utf-8")
            archivoDato = JSON.parse(archivoDato)
        } catch(error){
            console.log(error.message)
        }
        return archivoDato
    }

    async save(objetoProducto){
        const datos = await fs.promises.readFile("productos.txt", "utf-8")
        const datosParse = JSON.parse(datos)

        let id = datosParse.lenght+1
        objetoProducto.id = id
        
        datosParse.push(objetoProducto)

        const datosString = JSON.stringify(datosParse)
        await fs.promises.writeFile("productos.txt", datosString)

        console.log("Producto agregado!")
    }

    async getById(id){
        const datos = await fs.promises.readFile("productos.txt", "utf-8")
        const datosParse = JSON.parse(datos)
        const productos = datosParse.find((productos) => productos.id == id)

        console.log(`El id es: ${id}`)

        if (productos){
            return productos
        } else {
            console.log("producto no encontrado")
        }
    }

    async deleteById(id){
        let archivoDato = await this.getAll()
        archivoDato = archivoDato.filter(producto => producto.id !== id)
        archivoDato = JSON.stringify(archivoDato, null, "\t")
        await fs.promises.writeFile("productos.txt", archivoDato)
    }

    async deleteAll() {
    await fs.writeFileSync('productos.txt', '[]');
    console.log("Se han eliminado todos los productos");
    }

    async deleteFill(){
        const existeArchivo = fs.existsSync("productos.txt")
        if(existeArchivo){
            await fs.promises.unlink("productos.txt")
            console.log("El archivo fue eliminado")
        }
    }
}

const productoEjemplo1 = {
    title: "Los siete maridos de Evelyn Hugo",
    price: 1000,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReHxu5Zj1vopwsNzR9gQhtxS_wJ8eSIG-Xp0TqrDN7f43iXN0o"
}

const productoEjemplo2 = {
    title: "Los dos mueren al final",
    price: 1500,
    thumbnail: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS3IYgB1AoqqIO1AQqGR0E9iVxXfKL17lVgkVH-v6Swo-VYFKNK"
}

const productoEjemplo3 = {
    title: "Harry Potter y la orden del fenix",
    price: 2000,
    thumbnail: "https://http2.mlstatic.com/D_NQ_NP_821054-MLA50170338734_062022-O.webp"
}

const newProduct = new Contenedor("productos");


newProduct.getAll()
newProduct.save(productoEjemplo1)
newProduct.save(productoEjemplo2)
newProduct.save(productoEjemplo3)
newProduct.getById(productoEjemplo1)
newProduct.deleteById(1)
newProduct.deleteAll()
newProduct.save(productoEjemplo1)