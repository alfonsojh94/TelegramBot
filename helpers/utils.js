
const executeQuery = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

/**
 * Ejecuta una sentencia SQL y devuelve el primer elemento recogido en la query o el valor null si no encuentra dicho elemento
 * @param {*} query sentencia SQL a ejecutar
 * @param {*} params array con los valores a sustituir dentro de la sentencia
 * @returns una promesa con el resultado de la ejecución de la query
 */
const executeQueryOne = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (err, result) => {
            if (err) return reject(err);
            if (result.length === 0) resolve(null);
            resolve(result[0]);
        });
    });
}

module.exports = {
    executeQuery, executeQueryOne
}