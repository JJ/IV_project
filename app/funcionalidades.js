

/** Clase que representa una competición: sus funcionalidades.*/
class Funcionalidades {

    /**
     * Crea una competición.
     * @param {string} nombre_competicion - Nombre de la competición.
     */
    constructor(nombre_competicion, path_db) {
        this.path = path_db
        this.nombre = nombre_competicion
        this.categorias = ['femenina','masculina','mixta'];
        this.plazas = {
            "femenina": 20,
            "masculina": 20,
            "mixta": 20
            };
        this.fs = require('fs')

        // Si no existe el archivo de integrantes, lo creamos inicianizándolo
        if (!this.fs.existsSync(this.path)) {
            var json = JSON.stringify(JSON.parse("[]"), null, 2);
            this.fs.writeFileSync(this.path,json,'utf8',function(err){
                if(err) {
                    throw err;
                }
            });
        }

        // Si sí que existe el archivo simplemente lo abrimos y lo leemos.
        else {
            this.data = this.fs.readFileSync(this.path,'utf8',function(err){
                if(err) {
                    throw err;
                }
            });

            // Si al leer el archivo, está vacío, lo inicializamos
            if (this.data === ""){
                var json = JSON.stringify(JSON.parse("[]"), null, 2);
                this.fs.writeFileSync(this.path,json,'utf8',function(err){
                    if(err) {
                        throw err;
                }
                });
            }

            // Inicializamos los atributos de la clase en base a si ya hay información
            // en el archivo de integrantes o no
            var obj = JSON.parse(this.data);            
            // Comprobamos las parejas que ya se encuentran en el archivo y actualizamos
            // las plazas disponibles
            var obj_filtred = obj.filter(o => (o.categoria == "femenina"));
            this.plazas["femenina"] = 20 - obj_filtred.length;
            obj_filtred = obj.filter(o => (o.categoria == "mixta"));
            this.plazas["mixta"] = 20 - obj_filtred.length;
            obj_filtred = obj.filter(o => (o.categoria == "masculina"));
            this.plazas["masculina"] = 20 - obj_filtred.length;
        }

        this.data = this.fs.readFileSync(this.path,'utf8',function(err){
            if(err) {
                throw err;
            }
        });
    }

    /**
     * Decrementa el número de plazas disponibles de una categoría.
     * @param {string} categoria - Categoría con una plaza disponible menos.
     */
    decrementar_plazas(categoria) {
        this.plazas[categoria] -= 1;
    }

    /**
     * Decrementa el número de plazas disponibles de una categoría.
     * @param {string} categoria - Categoría con una plaza disponible más.
     */
    incrementar_plazas(categoria) {
        this.plazas[categoria] += 1;
    }

    /**
     * Inscribe una pareja en la competición.
     * @param {string} nombre1 - Nombre del primer integrante de la pareja.
     * @param {string} dni1 - DNI del primer integrante de la pareja.
     * @param {string} telefono1 - Teléfono del primer integrante de la pareja.
     * @param {string} correo1 - Correo electrónico del primer integrante de la pareja.
     * @param {string} nombre2 - Nombre del segundo integrante de la pareja.
     * @param {string} dni2 - DNI del segundo integrante de la pareja.
     * @param {string} telefono2 - Teléfono del segundo integrante de la pareja.
     * @param {string} correo2 - Correo electrónico del segundo integrante de la pareja.
     * @param {string} categoria - Categoría a la que pertenece la pareja.
     */
    inscribir_pareja(nombre1, dni1, telefono1, correo1, nombre2, dni2, telefono2, correo2, categoria){

        // Si aún hay plazas restantes
        if (this.plazas[categoria] > 0) {
            var cat_encontrada = false;

            // Creamos nueva pareja con los datos introducidos
            var nueva_pareja = {
                "participante1": {
                    "nombre":nombre1,
                    "dni":dni1,
                    "telefono":telefono1,
                    "correo":correo1
                },

                "participante2": {
                    "nombre":nombre2,
                    "dni":dni2,
                    "telefono":telefono2,
                    "correo":correo2
                },

                "categoria":categoria
                };

            // Comprobamos que la categoría elegida existe
            this.categorias.forEach(function(element) {
                if (element == categoria) {
                    cat_encontrada = true;
                }
            });

            // Si los datos introducidos son correctos
            var tipo1 = ((typeof nombre1) == "string");
            var tipo2 = ((typeof nombre2) == "string");
            var tipo3 = ((typeof dni1) == "string");
            var tipo4 = ((typeof dni2) == "string");
            var tipo5 = ((typeof telefono1) == "string");
            var tipo6 = ((typeof telefono2) == "string");
            var tipo7 = ((typeof correo1) == "string");
            var tipo8 = ((typeof correo2) == "string");

            // Comprobamos que exista la categoría introducida y que el tipo de los datos
            // es correcto
            if (cat_encontrada && tipo1 && tipo2 && tipo3 && tipo4 && tipo5
                && tipo6 && tipo7 && tipo8) {
                
                var ya_existente = false;
                
                // Releemos el archivo por si se han producido cambios
                this.data = this.fs.readFileSync(this.path,'utf8',function(err){
                    if(err) {
                    throw err;
                }
                });
                
                // Comprobamos que no esté vacío el archivo
                if(this.data === "" ){
                    var err = new Error('Empty database file');
                    throw err;
                }
                else {
                    // Si no se produce error en la lectura del archivo ni está vacío
                    // Creamos objeto json de lo leído
                    var obj = JSON.parse(this.data);
                    var ya_existe = false;

                    // Recorremos el objeto json para comprobar si la pareja que se
                    // quiere inscribir ya lo está
                    obj.forEach(function(element) {
                        var p1 = element.participante1.nombre;
                        var p2 = element.participante2.nombre;

                        if (( p1 == nombre1 && p2 == nombre2) 
                            || (p1 == nombre2 && p2 == nombre1)) {
                                ya_existe = true;
                            }
                    });

                    // Si no existe ya la pareja
                    if (!ya_existe) {

                        // Insertamos nueva pareja en el json
                        obj.push(nueva_pareja);

                        //console.log('\n\nPareja inscrita correctamente.');
                        
                        // Decrementamos las plazas disponibles
                        this.decrementar_plazas(categoria);
                        //this.consultar_plazas_disponibles(categoria);

                        // Creamos string que vamos a añadir al archivo donde almacenamos
                        // los integrantes
                        this.data = this.fs.readFileSync(this.path,'utf8',function(err){
                            if(err) {
                                throw err;
                            }
                        });
                        var json = JSON.stringify(obj, null, 2);

                        // Escribimos nuevos datos en el archivo de salida
                        this.fs.writeFileSync(this.path,json,function(err){
                            if(err) {
                                throw err;
                            }
                        });
                    }
                    else {
                        var err = new Error('La pareja ya existe, no se puede reinscribir.');
                        err.status = 400;
                        throw err;
                    }

                }

            }
            else {
                var err = new Error('Datos incorrectos.');
                err.status = 400;
                throw err;
            }
        }
        else {
            var err = new Error('No quedan plazas disponibles.');
            err.status = 400;
            throw err;
        }     
    }

    /**
     * Cancela la inscripción de una pareja.
     * @param {string} dni1 - DNI del integrante 1 de la pareja.
     * @param {string} dni2 - DNI del integrante 2 de la pareja.
     */
    cancelar_inscripcion(dni1,dni2) {
        var index = -1;
        var categoria, p1, p2;

        // Leemos el archivo del almacenamiento de integrantes
        this.data = this.fs.readFileSync(this.path,'utf8',function(err){
            if(err) {
                throw err;
            }
        });

        if (this.data === "") {
            var err = new Error('Empty database file.');
            throw err;            
        }
        // Si no está vacío
        else {
            index = -1;
            var obj = JSON.parse(this.data);

            // Lo transformamos a JSON y lo recorremos en busca de la pareja a eliminar
            for (var i = 0; i < obj.length ; ++i) {
            //obj.forEach(function(element) {
                p1 = obj[i].participante1.dni;
                p2 = obj[i].participante2.dni;

                if ((p1 == dni1 && p2 == dni2) || (p2 == dni1 && p1 == dni2)) {
                    index = i; // Guardamos índice de la pareja
                    categoria = obj[i].categoria;
                }
            }

            // Si la pareja que se quiere eliminar, se encuentra
            if (index > -1) {

                // Borramos la pareja
                delete obj[index];

                // Borramos 'null' si se ha dado la posibilidad de que se quede en el archivo
                var json = JSON.stringify(obj, (k, v) => Array.isArray(v) ? v.filter(e => e !== null):v, 2 );
                
                // Escribimos json sin la pareja
                this.fs.writeFileSync(this.path,json,function(err){
                    if(err) {
                        throw err;
                    }
                });

                // Incrementamos plazas disponibles
                this.incrementar_plazas(categoria);
                //this.consultar_plazas_disponibles(categoria);
                //console.log("\n\nInscripción cancelada correctamente.")
            }
            else {
                var err = new Error('La pareja no existe, no se puede cancelar la inscripción.');
                err.status = 404;
                throw err;
            }
        }
    }

    /**
     * Modifica los datos de una pareja, si no se desean modificar algunos de ellos,
     * simplemente introducir los valores actuales.
     * @param {string} dni1 - DNI del primer integrante de la pareja.
     * @param {string} dni2 - DNI del segundo integrante de la pareja.
     * @param {string} nnombre1 - Nuevo nombre del primer integrante de la pareja.
     * @param {string} nnombre2 - Nuevo nombre del segundo integrante de la pareja.
     * @param {string} ndni1 - Nuevo DNI del primer integrante de la pareja.
     * @param {string} ndni2 - Nuevo DNI del segundo integrante de la pareja.
     * @param {string} ntelefono1 - Nuevo teléfono del primer integrante de la pareja.
     * @param {string} ntelefono2 - Nuevo teléfono del segundo integrante de la pareja.
     * @param {string} ncorreo1 - Nuevo correo del primer integrante de la pareja.
     * @param {string} ncorreo2 - Nuevo correo del segundo integrante de la pareja.
     */
    modificar_pareja(dni1,dni2,nnombre1, nnombre2, ndni1, ndni2, ntelefono1, ntelefono2,
                     ncorreo1, ncorreo2) {
        var categoria, p1, p2, index;

        // Creamos información nueva de la pareja
        var modificacion = {
            "participante1": {
                "nombre":nnombre1,
                "dni":ndni1,
                "telefono":ntelefono1,
                "correo":ncorreo1
            },

            "participante2": {
                "nombre":nnombre2,
                "dni":ndni2,
                "telefono":ntelefono2,
                "correo":ncorreo2
            },

            "categoria":null
            };

        this.data = this.fs.readFileSync(this.path,'utf8',function(err){
            if(err) {
                throw err;
            }
        });

        if (this.data === "") {
            console.log("Empty file.");            
        }
        else {
            index = -1;

            var obj = JSON.parse(this.data);

            // Filtramos el json para ver si existe una pareja con la información nueva
            var obj_filtred = obj.filter(o => (o.participante1.dni == ndni1
                                              && o.participante2.dni == ndni2)
                                              ||
                                              (o.participante1.dni == ndni2
                                              && o.participante2.dni == ndni1));

            // Si no existe, podemos proceder a modificar la información antigua
            //if (obj_filtred[0] == undefined) {
            
            for (var i = 0; i < obj.length ; ++i) {
                p1 = obj[i].participante1.dni;
                p2 = obj[i].participante2.dni;
                categoria = obj[i].categoria;

                if ((p1 == dni1 && p2 == dni2) || (p2 == dni1 && p1 == dni2)) {
                    index = i; // Guaramos índice de la pareja con info obsoleta
                }
            }

            if (index > -1) {
                // Modificamos información nueva
                modificacion.categoria = categoria;
                obj[index] = modificacion;

                var json = JSON.stringify(obj, null, 2);
                
                this.fs.writeFileSync(this.path,json,function(err){
                    if(err) {
                        throw err;
                    }
                });

            }
            else {
                var err = new Error('La pareja no existe, no se puede modificar la inscripción.');
                err.status = 404;
                throw err;
            }
            //}
            //else {
                // Si ya existe la pareja con la información nueva, simplemente damos de baja
                // la pareja con información obsoleta
            //    this.cancelar_inscripcion(dni1,dni2);
            //}                               

        }
    }

    /**
     * Devuelve las parejas integrantes de una categoría.
     * @param {string} categoria - Categoría de la que se quieren saber las parejas.
     * @returns {json} - Parejas integrantes de una categoría.
     */
    consultar_parejas_categoria(categoria){
        var cat_encontrada = false;
        this.categorias.forEach(function(element) {
          if (element == categoria) {
              cat_encontrada = true;
          }
        });
      
        if (!cat_encontrada) {
          var err = Error('Categoría inexistente.')
          throw(err);
        }
        else {  
            this.data =this.fs.readFileSync(this.path,'utf8',function(err){
                if(err) {
                    throw err;
                }
            });
            var obj = JSON.parse(this.data);
            var obj_filtred = obj.filter(o => o.categoria == categoria);
                        
            if (obj_filtred[0] == undefined) {
                var err = new Error('Categoría vacía.');
                err.status = 404;
                throw err;
            }

            return obj_filtred;
        }
    }

    /**
     * Devuelve las parejas que hay inscritas en toda la competición.
     * @returns {json} - Parejas que hay inscritas en toda la competición
     */
    consultar_parejas_totales(){
        this.data = this.fs.readFileSync(this.path,"utf8",function(err){
            if(err) {
                err.status = 400;
                throw err;
            }
        });
        var obj = JSON.parse(this.data);

        if (obj[0] == undefined) {
            var err = new Error('Competición sin parejas.');
            err.status = 404;
            throw err;
        }

        return obj;
    }

    /**
     * Devuelve la categoría a la que pertenece una pareja.
     * @param {string} nombre1 - Nombre del primer integrante.
     * @param {string} nombre2 - Nombre del segundo integrante.
     * @returns {json} - Categoría a la que pertenece una pareja
     */
    consultar_categoria_pareja(nombre1, nombre2){
        this.data = this.fs.readFileSync(this.path,"utf8",function(err){
                if(err) {
                    err.status = 400;
                    throw err;
                }
            });
        var obj = JSON.parse(this.data);

        var obj_filtred = obj.filter(o => (o.participante1.nombre == nombre1 && o.participante2.nombre == nombre2) 
                                        || o.participante1.nombre == nombre2 && o.participante2.nombre == nombre1);

        if (obj_filtred[0] == undefined) {
            var err = new Error('Pareja inexistente.');
            err.status = 404;
            throw err;
        }
        
        return obj_filtred[0].categoria;
    }

    /**
     * Devuelve la información de la pareja del participante indicado
     * @param {string} nombre - Integrante de la pareja del que se desconoce compañero
     * @returns {json} - Información de la pareja.
     */    
    consultar_pareja_integrante(nombre){
        this.data = this.fs.readFileSync(this.path,"utf8",function(err){
                if(err) {
                    err.status = 400;
                    throw err;
                }
            });
        var obj = JSON.parse(this.data);

        var obj_filtred = obj.filter(o => o.participante1.nombre == nombre || o.participante2.nombre == nombre);

        if (obj_filtred[0] == undefined) {
            var err = new Error('Pareja inexistente.');
            err.status = 404;
            throw err;
        }

        return obj_filtred[0];
    }

    /**
     * Devuelve la pareja de un participante en una categoría concreta.
     * @param {string} nombre - Nombre de uno de los integrantes de la pareja.
     * @param {string} categoria - Categoría a la que pertenece la pareja.
     * @returns {json} - Pareja del participante en la categoría.
     */
    consultar_pareja_categoria(nombre, categoria){
        this.data = this.fs.readFileSync(this.path,"utf8",function(err){
                if(err) {
                    err.status = 400;
                    throw err;
                }
            });
        var obj = JSON.parse(this.data);

        var obj_filtred = obj.filter(o => o.categoria == categoria && (o.participante1.nombre == nombre || o.participante2.nombre == nombre));
        
        if (obj_filtred[0] == undefined) {
            var err = new Error('Pareja inexistente.');
            err.status = 404;
            throw err;
        }

        return obj_filtred[0];
    }

    /**
     * Devuelve el número de parejas que hay en la categoría indicada.
     * @param {string} categoria - Categoría de la que se quieren conocer plazas disponibles.
     * @returns {string} - Plazas disponibles.
     */
    consultar_plazas_disponibles(categoria){
        var obj = {"plazas":this.plazas[categoria]};
        
        return obj;
    }
}

module.exports = Funcionalidades;
